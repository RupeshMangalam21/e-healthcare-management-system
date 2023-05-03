import React from 'react';

function HistoryCard(props) {
  const { patientName, diagnosis, doctorName, prescription, remark } = props.item;

  const HistoryDate =new Date(props.item.Date.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="history-card">
      <h3>{HistoryDate}</h3>
      <p>Patient Name: {patientName}</p>
      <p>Diagnosis: {diagnosis}</p>
      <p>Doctor Name: {doctorName}</p>
      <p>Prescription: {prescription}</p>
      <p>Remark: {remark}</p>
      </div>
  );
}

export default HistoryCard;
