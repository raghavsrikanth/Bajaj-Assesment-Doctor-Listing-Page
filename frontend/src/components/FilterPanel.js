import React from 'react';

function FilterPanel({
  consultationType,
  setConsultationType,
  selectedSpecialties,
  setSelectedSpecialties,
  sortOption,
  setSortOption,
  specialties,
}) {
  const handleSpecialtyChange = (spec) => {
    setSelectedSpecialties(prev =>
      prev.includes(spec) ? prev.filter(s => s !== spec) : [...prev, spec]
    );
  };

  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      <div>
        <h4>Consultation Mode</h4>
        <label>
          <input
            type="radio"
            name="consultation"
            value="Video Consult"
            checked={consultationType === "Video Consult"}
            onChange={() => setConsultationType("Video Consult")}
          />
          Video Consult
        </label>
        <label>
          <input
            type="radio"
            name="consultation"
            value="In Clinic"
            checked={consultationType === "In Clinic"}
            onChange={() => setConsultationType("In Clinic")}
          />
          In Clinic
        </label>
      </div>
      <div>
        <h4>Specialties</h4>
        {specialties.map(spec => (
          <label key={spec}>
            <input
              type="checkbox"
              checked={selectedSpecialties.includes(spec)}
              onChange={() => handleSpecialtyChange(spec)}
            />
            {spec}
          </label>
        ))}
      </div>
      <div>
        <h4>Sort By</h4>
        <label>
          <input
            type="radio"
            name="sort"
            value="fees"
            checked={sortOption === "fees"}
            onChange={() => setSortOption("fees")}
          />
          Fees (Low to High)
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="experience"
            checked={sortOption === "experience"}
            onChange={() => setSortOption("experience")}
          />
          Experience (High to Low)
        </label>
      </div>
    </div>
  );
}

export default FilterPanel;