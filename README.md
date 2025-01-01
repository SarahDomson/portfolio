# React Firebase Deployed App

This is a React project deployed using Firebase Hosting.

## Project Structure

```
- public/
  - images/
    - Avatar.svg
    - HTML.png
    - css-logo.png
    - react.png
    - Tailwind CSS.png
    - github.png
    - X logo.png
    - linkedin.png
    - stackoverflow.png
- src/
  - assets/
    - App.css
    - index.css
  - App.jsx
  - HeroSection.jsx
  - index.jsx
  - main.jsx
- .gitignore
- eslint.config.js
- index.html
- package-lock.json
- package.json
- postcss.config.js
- README.md
- tailwind.config.js
- vite.config.js
```

## Features

- Responsive design using Tailwind CSS.
- Firebase Hosting for deployment.
- React component-based structure.
- Organized folder structure for easy maintenance.

## Firebase Deployment

This app has been deployed using Firebase Hosting. Follow the steps below to set up Firebase and deploy your own project:

### Prerequisites

- Ensure you have Node.js installed on your system.
- Install Firebase CLI globally:

```
npm install -g firebase-tools
```

### Steps to Deploy

1. **Login to Firebase**
   ```
   firebase login
   ```

2. **Initialize Firebase**
   ```
   firebase init
   ```
   - Select Hosting.
   - Choose your Firebase project.
   - Set `public` as the public directory.
   - Configure as a single-page app (SPA) by choosing "Yes" when prompted.

3. **Build the React App**
   ```
   npm run build
   ```
   This will create a `dist` folder with production-ready files.

4. **Deploy to Firebase**
   ```
   firebase deploy
   ```

### Public Folder for Static Assets

All images are located in the `public/images` folder and can be accessed directly using:

```
<img src="/images/Avatar.svg" alt="Avatar" />
```

## Live Demo

Check out the live app [here](https://react-portfolio-3dfdd.web.app/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/images/Avatar.svg) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

## Technologies Used

- React
- Tailwind CSS
- Firebase Hosting

## Author

**Sarah Domson**  
[GitHub](https://github.com/SarahDomson) | [LinkedIn](https://www.linkedin.com/in/sarah-domson-5749661a9/)

