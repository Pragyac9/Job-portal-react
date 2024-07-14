# Job-portal-react
This project is a job listing application where users can view and search for job listings. The application fetches job data from a Firebase Firestore database and displays it with various filters such as job title, type, location, and experience level.

# Features
.Display job listings
.Search and filter job listings by title, type, location, and experience
.Responsive design
# Technologies Used
.React
.Firebase Firestore
.Vite
.Tailwind CSS
# Setup and Installation
Follow these steps to set up and run the project locally:

# Clone the repository:
git clone https://github.com/your-username/job-listing-app.git

# Install dependencies:
Using npm:
npm install
Or using yarn:
yarn install
# Add Firebase Configuration:
Create a firebase.Config.js file in the root of your project and add your Firebase configuration:
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
# Run the development server:

Using npm:
npm run dev
Or using yarn:
yarn dev
The application will be available at http://localhost:3000.
![Screenshot 2024-07-14 234942](https://github.com/user-attachments/assets/b1765f61-6ab0-450b-8b6c-77c136960f40)
![Screenshot 2024-07-14 235016](https://github.com/user-attachments/assets/4dea7e01-ac79-46ee-aeb3-c37f67584358)
![Screenshot 2024-07-14 235038](https://github.com/user-attachments/assets/7cd7aa2d-af6c-465c-894d-7f65db0f7c7a)
