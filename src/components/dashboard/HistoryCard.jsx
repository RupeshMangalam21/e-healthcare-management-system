import React from 'react';
function HistoryCard(props) {
  const { Date, PatientName, diagnosis, doctorName, prescription, remark } = props.item;
  return (
    <div className="history-card">
      <h3>{Date}</h3>
      <p>Patient Name: {PatientName}</p>
      <p>Diagnosis: {diagnosis}</p>
      <p>Physician: {doctorName}</p>
      <p>Prescription: {prescription}</p>
      <p>Remarks: {remark}</p>
      </div>
  );
}

export default HistoryCard;
