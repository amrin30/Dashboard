# Dashboard Application

This repository contains the code for the **Firstbench UI Mock Test Results Dashboard**, built using **React**, **Vite**, **Tailwind CSS**, and libraries such as **Chart.js** and **React Range**. Follow the steps below to set up and run the application locally.

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** (Node package managers)

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

or, if you are using Yarn:

```bash
yarn install
```

### Run the Application

To start the development server:

```bash
npm run dev
```

or, with Yarn:

```bash
yarn dev
```

The application will be accessible at `http://localhost:5173` in your browser.

### Build for Production

To build the project for production:

```bash
npm run build
```

or, with Yarn:

```bash
yarn build
```

The optimized output will be available in the `dist` directory.

### Run Tests

If tests are included in the project, you can run them using:

```bash
npm test
```

or, with Yarn:

```bash
yarn test
```

## Project Structure

```
|-- src
    |-- components      # Reusable UI components
    |-- pages           # Application pages
    |-- assets          # Static files (images, icons, etc.)
    |-- styles          # Tailwind CSS configurations
    |-- utils           # Helper functions and utilities
    |-- App.jsx         # Root application file
    |-- main.jsx        # Entry point of the application
```

## Features

- **User Interface:** Built with React and styled using Tailwind CSS.
- **Vite as Bundler:** For fast builds and optimized development workflow.
- **Interactive Charts:** Implemented using the Chart.js library.
- **Range Slider:** Enhanced user experience with React Range.
- **Responsive Design:** Ensures compatibility across various devices and screen sizes.
- **Mock Test Results Dashboard:** Visualize and analyze test results interactively.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add your feature description'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

