import { useEffect, useCallback } from 'react';

type KeyCombo = string[];
type ShortcutHandler = (event: KeyboardEvent) => void;

interface ShortcutConfig {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  meta?: boolean;
  preventDefault?: boolean;
  stopPropagation?: boolean;
}

interface ShortcutMap {
  [key: string]: {
    handler: ShortcutHandler;
    config: ShortcutConfig;
  };
}

export const useKeyboardShortcuts = (shortcuts: ShortcutMap) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const pressedKey = event.key.toLowerCase();
      const pressedCombo = {
        key: pressedKey,
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
        meta: event.metaKey
      };

      Object.entries(shortcuts).forEach(([id, { handler, config }]) => {
        const matchesKey = config.key.toLowerCase() === pressedKey;
        const matchesCtrl = config.ctrl === pressedCombo.ctrl;
        const matchesShift = config.shift === pressedCombo.shift;
        const matchesAlt = config.alt === pressedCombo.alt;
        const matchesMeta = config.meta === pressedCombo.meta;

        if (
          matchesKey &&
          matchesCtrl &&
          matchesShift &&
          matchesAlt &&
          matchesMeta
        ) {
          if (config.preventDefault) {
            event.preventDefault();
          }
          if (config.stopPropagation) {
            event.stopPropagation();
          }
          handler(event);
        }
      });
    },
    [shortcuts]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Helper function to create a shortcut configuration
  const createShortcut = (
    key: string,
    handler: ShortcutHandler,
    options: Partial<ShortcutConfig> = {}
  ): [string, { handler: ShortcutHandler; config: ShortcutConfig }] => {
    const config: ShortcutConfig = {
      key,
      preventDefault: true,
      stopPropagation: true,
      ...options
    };

    return [key, { handler, config }];
  };

  // Common accessibility shortcuts
  const accessibilityShortcuts = {
    ...Object.fromEntries([
      createShortcut('Tab', (event) => {
        // Handle tab navigation
        const focusableElements = document.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0] as HTMLElement;
        const lastFocusable = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            event.preventDefault();
          }
        }
      }),
      createShortcut('Escape', () => {
        // Close modals, dropdowns, etc.
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }),
      createShortcut('/', (event) => {
        // Focus search input
        const searchInput = document.querySelector(
          'input[type="search"], input[aria-label="Search"]'
        ) as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
          event.preventDefault();
        }
      })
    ])
  };

  return {
    shortcuts: { ...shortcuts, ...accessibilityShortcuts },
    createShortcut
  };
}; 