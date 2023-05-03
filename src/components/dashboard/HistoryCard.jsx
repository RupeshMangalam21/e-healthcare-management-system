import React from 'react';

function HistoryCard(props) {
  const { date, patientName, diagnosis, doctorName, prescription, remark } = props.item;

  const formattedDate = new Date(date).toLocaleString();

  return (
    <div className="history-card">
      <h3>{formattedDate}</h3>
      <p>Patient Name: {patientName}</p>
      <p>Diagnosis: {diagnosis}</p>
      <p>Doctor Name: {doctorName}</p>
      <p>Prescription: {prescription}</p>
      <p>Remark: {remark}</p>
      </div>
  );
}

export default HistoryCard;
