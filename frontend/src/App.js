import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import DoctorList from './components/DoctorList';
import './App.css';

function App() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [sortOption, setSortOption] = useState("");

  // Fetch doctors from API
  useEffect(() => {
    fetch("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json")
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error("Error fetching doctors:", error));
  }, []);

  // Extract unique specialties
  const specialties = [...new Set(
    doctors.flatMap(d => d.specialities.map(s => s.name))
  )];

  // Filter doctors
  const filteredDoctors = doctors.filter(doctor => {
    const nameMatch = searchTerm ? doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    const consultMatch = consultationType
      ? (consultationType === "Video Consult" ? doctor.video_consult : doctor.in_clinic)
      : true;
    const specMatch = selectedSpecialties.length > 0
      ? selectedSpecialties.some(spec => doctor.specialities.map(s => s.name).includes(spec))
      : true;
    return nameMatch && consultMatch && specMatch;
  });

  // Sort doctors
  let sortedDoctors = [...filteredDoctors];
  if (sortOption === "fees") {
    sortedDoctors.sort((a, b) => 
      parseFloat(a.fees.replace('₹ ', '')) - parseFloat(b.fees.replace('₹ ', ''))
    );
  } else if (sortOption === "experience") {
    sortedDoctors.sort((a, b) => 
      parseInt(b.experience) - parseInt(a.experience)
    );
  }

  return (
    <div className="app">
      <SearchBar doctors={doctors} setSearchTerm={setSearchTerm} />
      <div className="content">
        <FilterPanel
          consultationType={consultationType}
          setConsultationType={setConsultationType}
          selectedSpecialties={selectedSpecialties}
          setSelectedSpecialties={setSelectedSpecialties}
          sortOption={sortOption}
          setSortOption={setSortOption}
          specialties={specialties}
        />
        <DoctorList doctors={sortedDoctors} />
      </div>
    </div>
  );
}

export default App;