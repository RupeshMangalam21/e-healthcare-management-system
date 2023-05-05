import React from 'react';

function AppointmentCard(props) {
  const { appointmentId, Date, doctorName, patientName, reason } = props.appointment;

  const appointmentDate = new Date(Date.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="appointment-card">
      <h3>Appointment Details</h3>
      <p>Appointment ID: {appointmentId}</p>
      <p>Appointment Date: {appointmentDate}</p>
      <p>Doctor Name: {doctorName}</p>
      <p>Patient Name: {patientName}</p>
      <p>Reason: {reason}</p>
    </div>
  );
}

export default AppointmentCard;
