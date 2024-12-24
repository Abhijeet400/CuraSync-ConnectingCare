# CuraSync - Connecting Care

## Overview
**CuraSync** is a comprehensive web application designed to enhance healthcare management by streamlining processes such as OPD queue management, bed availability tracking, patient admissions, and inventory management. Built using modern web technologies, CuraSync aims to improve operational efficiency and patient care.

---

## Features
- **Real-Time OPD Queue Management**: Efficiently manage patient queues with a user-friendly interface.
- **Bed Availability Tracker**: Monitor hospital bed occupancy and availability in real time.
- **Patient Admission Module**: Simplify the process of patient admissions and record management.
- **Inventory Management**: Track medicines and consumables with ease.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Technologies Used
- **Frontend**: React (with Vite)
- **Styling**: TailwindCSS for modern and responsive design
- **Build Tool**: Vite for fast and efficient development
- **Linting**: ESLint for maintaining code quality

---

## Repository Structure
```
CuraSync-ConnectingCare/
├── public/              # Static assets (images, icons, etc.)
│   └── assets/images/   # Project-specific images
├── src/                 # Source code
├── .gitignore           # Ignored files and directories
├── README.md            # Project documentation
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package-lock.json    # Dependency lock file
├── package.json         # Project metadata and dependencies
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # TailwindCSS configuration
└── vite.config.js       # Vite configuration
```

---

## Installation and Setup
### Prerequisites
- Node.js (v16+)
- npm (v7+)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Abhijeet400/CuraSync-ConnectingCare.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CuraSync-ConnectingCare
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

---

## Customization
### TailwindCSS
- Modify the `tailwind.config.js` file to customize the design system according to your requirements.

### ESLint
- Update the `eslint.config.js` file to enforce additional linting rules as needed.

---

## Deployment
1. Build the production-ready app:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting provider, such as Netlify or Vercel.

---

## Future Enhancements
- Add real-time notifications for patient and staff alerts.
- Enhance reporting and analytics modules for hospital management.
- Integrate multilingual support for wider accessibility.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
- Team efforts and collaboration in developing innovative healthcare solutions.
- Healthcare professionals for their valuable insights and feedback.
