# Architecture: 07-demo-site

## Overview
A premium corporate portfolio and demo website built with React 19 and Vite 6. The architecture focuses on high-fidelity scroll-driven animations and a modular component structure for resume and project showcasing.

## Tech Stack
-   **Framework**: React 19
-   **Build Tool**: Vite 6
-   **Styling**: Tailwind CSS v4
-   **Animations**: Framer Motion 12
-   **Icons**: Lucide React

## Key Components
-   **Hero Section**: Immersive background with radial pulse effects and advanced tracking headers.
-   **Scroll Progress**: Top-fixed spring-animated bar indicating reading progress.
-   **Skills Matrix**: Interactive skill bars with viewport-triggered entrance animations.
-   **Project Grid**: Responsive cards with hovermicro-interactions and external link integration.

## Performance
-   Tree-shaken Lucide icons for minimal bundle size.
-   Spring-physics driven animations for natural feel without layout thrashing.
-   Optimized Vite-based static asset pipeline.
