# Bajaj Assessment - Doctor Listing Page

This is a **React-based web application** that displays a list of doctors fetched from an API. It includes features like **autocomplete search**, **filtering by consultation mode and specialties**, and **sorting by fees or experience**. The UI is modern, clean, and responsive.

---

##  Features

- **Autocomplete Search Bar**  
  Search for doctors by name with dropdown suggestions (top 3 matches).

- **Dynamic Filter Panel**  
  - Single-select for **Consultation Mode** (Video Consult / In Clinic)  
  - Multi-select for **Doctor Specialties**  

- **Sorting Options**  
  - Sort by **Fees (Ascending)**  
  - Sort by **Experience (Descending)**  

- **Doctor Cards**  
  Each card displays:
  - Doctor Name
  - Photo
  - Location
  - Specialties
  - Fees
  - Experience

- **URL Query Parameters**  
  Filters persist in the URL to support navigation and sharing.

- **Testing Support**  
  Includes `data-testid` attributes for automation testing.

---

##  Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Autocomplete.js
│   │   ├── FilterPanel.js
│   │   ├── DoctorList.js
│   │   └── SearchBar.js
│   ├── styles/
│   │   ├── App.css
│   │   └── SearchBar.css
│   ├── App.js
│   ├── index.js
│   └── other default files
├── package.json
└── README.md
```

---

##  Prerequisites

- Node.js (v14 or higher)
- npm or yarn

---

##  Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name/frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Application**

   ```bash
   npm start
   # or
   yarn start
   ```

   This will start the development server at [http://localhost:3000](http://localhost:3000).

4. **Build for Production**

   ```bash
   npm run build
   ```

   The build will be available in the `build/` folder.

5. **Serve the Build Locally**

   ```bash
   npm install -g serve
   serve -s build
   ```

---

##  Testing

- **Unit Tests**: _(If implemented, describe how to run them.)_
- **E2E Testing**: Uses `data-testid` attributes like:
  - `autocomplete-input`
  - `suggestion-item`
  - `doctor-card`

---

## Deployment

- **Netlify / Vercel**: Link your GitHub repo for automatic CI/CD.
- **Manual Hosting**: Upload the contents of the `build/` folder to your hosting provider.

---

##  API Source

Doctor data is fetched from:

```
https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json
```

---

##  Styling

- Built with pure **CSS** for modern, responsive UI.

---

## License

This project is licensed under the **MIT License**.
