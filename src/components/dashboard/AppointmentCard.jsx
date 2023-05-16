import React from 'react';

function AppointmentCard(props) {
  const { AppointmentId, doctorName, patientName, reason } = props.appointment;

  const appointmentDate = new Date(props.appointment.date.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="appointment-card">
      <h4>Details</h4>
      <p>Appointment ID: {AppointmentId}</p>
      <p>Appointment Date: {appointmentDate}</p>
      <p>Physician Name: {doctorName}</p>
      <p>Patient Name: {patientName}</p>
      <p>Reason: {reason}</p>
    </div>
  );
}

export default AppointmentCard;
