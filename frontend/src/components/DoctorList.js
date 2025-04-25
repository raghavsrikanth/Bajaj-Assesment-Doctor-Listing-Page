import React from 'react';

function DoctorList({ doctors }) {
  if (doctors.length === 0) {
    return <p>No doctors found.</p>;
  }

  const handleBookAppointment = (doctorName) => {
    alert(`Appointment booked with Dr. ${doctorName}`);
  };

  return (
    <div className="doctor-list">
      {doctors.map(doctor => (
        <div key={doctor.id} className="doctor-card">
          <img
            src={doctor.photo || 'https://via.placeholder.com/150'}
            alt={doctor.name}
            className="doctor-photo"
          />
          <h4>{doctor.name}</h4>
          <p>{doctor.clinic.address.city}</p>
          <p>{doctor.specialities.map(s => s.name).join(', ')}</p>
          <p>{doctor.fees}</p>
          <p>{doctor.experience}</p>
          <button
            onClick={() => handleBookAppointment(doctor.name)}
            className="book-appointment-btn"
          >
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
}

export default DoctorList;