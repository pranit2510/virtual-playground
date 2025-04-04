# Virtual Playground Website

A cutting-edge website for Virtual Playground (virtualplayground.io), a revolutionary platform that unifies all LLMs (Language, Image, and Video Generation models) under one subscription.

## Features

- Immersive 3D interface with parallax scrolling
- Seamless light/dark mode toggle
- Responsive design with mobile-first approach
- Interactive 3D elements using Three.js
- Smooth animations and transitions
- Modern UI components with micro-interactions

## Tech Stack

- React with TypeScript
- Three.js for 3D graphics
- Framer Motion for animations
- Styled Components for styling
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/virtual-playground.git
cd virtual-playground
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
  ├── components/        # Reusable UI components
  ├── pages/            # Page components
  ├── context/          # React context providers
  ├── styles/           # Global styles and theme
  ├── hooks/            # Custom React hooks
  ├── utils/            # Utility functions
  ├── assets/           # Static assets
  └── 3d/              # Three.js components
```

## Development

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Write meaningful component and function names
- Add comments for complex logic

### Component Guidelines

- Keep components small and focused
- Use styled-components for styling
- Implement proper prop types
- Add error boundaries where necessary

### Performance Optimization

- Lazy load routes and heavy components
- Optimize 3D models and textures
- Use React.memo for expensive components
- Implement proper code splitting

## Deployment

1. Build the production version:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Three.js for 3D graphics
- Framer Motion for animations
- React community for excellent tools and libraries 