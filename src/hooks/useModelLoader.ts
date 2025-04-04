import { useState, useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface ModelLoaderOptions {
  modelPath: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
  hoverAnimation?: boolean;
  scale?: number;
}

interface ModelState {
  isLoading: boolean;
  error: Error | null;
  model: THREE.Group | null;
  animations: THREE.AnimationClip[];
}

export const useModelLoader = ({
  modelPath,
  autoRotate = true,
  rotationSpeed = 0.005,
  hoverAnimation = true,
  scale = 1
}: ModelLoaderOptions) => {
  const [state, setState] = useState<ModelState>({
    isLoading: true,
    error: null,
    model: null,
    animations: []
  });

  const modelRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(modelPath);

  useEffect(() => {
    try {
      // Clone the scene to avoid modifying the original
      const model = scene.clone();
      
      // Apply scale
      model.scale.set(scale, scale, scale);

      // Center the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);

      setState({
        isLoading: false,
        error: null,
        model,
        animations
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error as Error
      }));
    }
  }, [scene, animations, scale]);

  const animate = () => {
    if (!modelRef.current || !autoRotate) return;

    modelRef.current.rotation.y += rotationSpeed;
  };

  const handlePointerOver = () => {
    if (!modelRef.current || !hoverAnimation) return;

    // Scale up slightly on hover
    modelRef.current.scale.set(scale * 1.1, scale * 1.1, scale * 1.1);
  };

  const handlePointerOut = () => {
    if (!modelRef.current || !hoverAnimation) return;

    // Return to original scale
    modelRef.current.scale.set(scale, scale, scale);
  };

  const playAnimation = (animationName: string) => {
    if (!state.animations.length) return;

    const animation = state.animations.find(a => a.name === animationName);
    if (!animation || !modelRef.current) return;

    const mixer = new THREE.AnimationMixer(modelRef.current);
    const action = mixer.clipAction(animation);
    action.play();

    return () => {
      action.stop();
      mixer.stopAllAction();
    };
  };

  return {
    ...state,
    modelRef,
    animate,
    handlePointerOver,
    handlePointerOut,
    playAnimation
  };
}; 