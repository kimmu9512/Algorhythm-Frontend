# Algorhythm-Frontend

This repository is a frontend repository for full-stack applicatoin Algorhythm.

## Algorhythm

Algorhythm is a full-stack application designed to enhance the coding practice experience by providing users with a platform to solve LeetCode-like questions, track their progress, and receive personalized question recommendations. Users benefit from tailored suggestions that reinforce memory retention rather than rote learning. Repetition intervals are carefully selected to prevent users from memorizing specific algorithms, focusing instead on overarching techniques and skills required to approach and solve problems. By solving all the 'Explore' questions daily, users can effectively hone their problem-solving abilities.

## Table of Contents

1. [Front-end features](#features)
2. [Technology Stack](#technology-stack)
3. [Getting Started](#getting-started)
4. [Project Structure / Component Overview](#project-structure--component-overview)

## Features

- **User Authentication:** Implemented secure user authentication through Firebase Authentication, supporting both email and third-party providers.
- **Question Interaction:** Allows users to view, attempt, and execute code for LeetCode-like questions seamlessly.
- **Progress Tracking:** Enables users to track their progress and access detailed histories of their attempts for continuous improvement.
- **Admin Panel:** Provides administrators with a user-friendly interface to add new questions for users to solve.
- **Elegant UI:** Features an elegant and responsive user interface designed to enhance the overall user experience.

## Technology Stack

- **Framework:** React
- **State Management:** Context API
- **Styling:** CSS Modules
- **Build Tool:** Vite

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (version 6.x or later)

### Installation

#### 1. Clone the repository

```sh
git clone https://github.com/kimmu9512/Algorhythm-Frontend.git
```

#### 2. Install dependencies

```sh
npm install
```

#### 3. Set up the environment variables

To get started with the project, you need to set up the following environment variables. These variables are essential for connecting to Firebase services and your backend server.

Copy `env.example` to `.env` or copy the following:

```dotenv
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BACKEND_URL=your_backend_url
```

If you are running the project on your local machine, you should use `.env.local`:

```sh
cp .env .env.local
```

Then, make any necessary adjustments specific to your local environment in the `.env.local` file.

<details>
<summary>Where to find these values</summary>

#### Firebase Configuration

1. Go to the Firebase Console: [Firebase Console](https://console.firebase.google.com/).
2. Select your project.
3. Navigate to Project Settings by clicking the gear icon next to Project Overview.
4. In the General tab, under the "Your apps" section, select your web app (or add a new one if you haven't already).
5. The Firebase configuration values will be listed in the Firebase SDK snippet section.

#### Backend URL

Enter your backend server's domain in the `VITE_BACKEND_URL` variable.

### Example `.env` file

```dotenv
VITE_FIREBASE_API_KEY=AIzaSyA...
VITE_FIREBASE_AUTH_DOMAIN=myapp.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=myapp
VITE_FIREBASE_STORAGE_BUCKET=myapp.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdefg
VITE_BACKEND_URL=https://mybackend.com
```

Make sure to replace the placeholder values with your actual Firebase and backend configurations.

</details>

### Running the Project

After setting up the environment variables, you can run the project using the following command:

```sh
npm run dev
```

This will start the development server with the configured environment variables.

## Project Structure / Component Overview

The project is organized into several key directories and files, each serving a specific purpose. Below is a detailed overview of the project structure.

### Root Directory

- `index.html`: The main HTML file for the application.
- `package.json`: Contains metadata about the project and lists dependencies, scripts, and other configurations.
- `package-lock.json`: Automatically generated file that locks the versions of the project's dependencies.
- `.env`: Environment variables configuration file (not included in the repository for security reasons).
- `.env.example`: Example environment variables file to help new developers set up their environment.
- `.gitignore`: Specifies which files and directories should be ignored by Git.
- `README.md`: Provides an overview of the project, including installation instructions, usage, and other relevant information.
- `vite.config.js`: Configuration file for Vite, the build tool used in this project.

### `public` Directory

Usually contains static assets such as images, fonts, etc that are publicly accessible.
_(Note: This directory is currently empty but is included for future use.)_

### `src` Directory

Contains the source code for the application.

- `App.css`: CSS for the App component.
- `App.jsx`: Main App component for the application.
- `firebaseConfig.js`: Configuration file for Firebase services.
- `index.css`: Global CSS for the application.
- `main.jsx`: Main entry point for the React application.
- `routes.jsx`: Configuration for the application's routes.

**Note:**

While it might seem logical to place all files within the `components` directory, certain files are kept at the root of the `src` directory for the following reasons:

- **Global Scope**: Files like `App.jsx`, `main.jsx`, and `index.css` are foundational to the entire application. They serve a global purpose and are not specific to any single component. Keeping them at the root level makes it clear that they are core to the application’s structure and not just another component.
- **Configuration and Initialization**: Files such as `firebaseConfig.js` and `routes.jsx` are configuration and setup files. These files are essential for initializing services and defining the routing structure of the application. Their placement at the root level of `src` highlights their role in the initial setup and configuration, separate from the UI components.

#### `src/assets` Directory

Usually contains static asset files such as images, fonts, etc that are imported and used within the source code. These files are processed by the build tool (e.g., Vite), which means they can benefit from optimizations like minification, hashing for cache busting, and inlining
_(Note: This directory is currently empty but is included for future use.)_

#### `src/components` Directory

Contains the React components used in the application.

- **common** - contains shared components used throughout the application.

  - `Layout.jsx`: Component for the overall layout of the application.
  - `NavigationBar.jsx`: Component for the navigation bar.
  - `NotFound.jsx`: Component to display a 404 Not Found page.
  - `PrivateRoute.jsx`: Component to handle private/authenticated protected routes.

- **createquestion** contains components related to create question page and the create question page itself

  - `CreateQuestionDescription.jsx`: Component for creating a question description.
  - `CreateQuestionHeader.jsx`: Component for creating a question header.
  - `CreateQuestionInteraction.jsx`: Component for creating question interactions related to code editor.
  - `CreateQuestionTestCases.jsx`: Component for creating and saving test cases for questions.
  - `QuestionCreationPage.jsx`: Page component for creating a question.
  - `TestCaseCard.jsx`: Component for displaying a single test case as a card.

- **question** - contains components related to displaying and interacting with the question.

  - `CodeEditor.jsx`: Component for the code editor.
  - `InputField.jsx`: Component for input fields.
  - `OutputGroup.jsx`: Component for output display when the user-code or solution-code executes.
  - `QuestionDescription.jsx`: Component for displaying the question description such as title, difficulty, category and the question description itself.
  - `QuestionDetailPage.jsx`: Page component for question.
  - `QuestionHeader.jsx`: Component for the question page header.
  - `QuestionInteraction.jsx`: Component for question interactions.
  - `TestCases.jsx`: Component for displaying and interacting with test cases for the question.
  - `Timer.jsx`: Component for the timer.
  - `VideoModal.jsx`: Component for displaying solution video.

- **user** - contains components related to user authentication and managing the authenticated user's homepage/dashboard.
  - **UserDashboard**
    - `AllQuestions.jsx`: Component for displaying all questions with user history.
    - `ExploreQuestions.jsx`: Component for exploring questions.
    - `ReviewQuestions.jsx`: Component for reviewing questions.
    - `UserDashboard.jsx`: Component for the user dashboard page.
  - `SignInForm.jsx`: Component for the sign-in form.
  - `SignInPage.jsx`: Page component for signing in.
  - `SignUpPage.jsx`: Page component for signing up.
  - `SocialSignInButtons.jsx`: Component for social sign-in buttons.
  - `WelcomeMessage.jsx`: Component for the welcome message
- `TitlePage.jsx`: Component for the title page.

#### `src/hooks` Directory

Contains custom hooks used in the application.

- `useAuth.js`: Custom hook for authentication.
- `useBackend.js`: Custom hook for interacting with the backend.
- `useJudge.js`: Custom hook for interacting with the judge API.
- `useQuestionData.js`: Custom hook for fetching question data and managing the related state.

#### `src/styles` Directory

Contains CSS files for styling the application. The structure mirrors the `components` directory, with each CSS file corresponding to a component's stylesheet.
