import React from 'react';
import "../../style/dashboard/MedicalHistory.css"

function HistoryCard(props) {
  const {bloodGroup, age,gender,patientName, diagnosis, doctorName, prescription, remark } = props.item;

  const HistoryDate =new Date(props.item.Date.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="history-card">
      <h4>{HistoryDate}</h4>
      <p>Patient Name: {patientName}</p>
      <p>patient Gender:{gender}</p>
      <p>patient age:{age}</p>
      <p>patient Blood-Group:{bloodGroup}</p>
      <p>physician: {doctorName}</p>
      <p>Diagnosis: {diagnosis}</p>
      <p>prescription: {prescription}</p>
      <p>Remarks: {remark}</p>
      </div>
  );
}

export default HistoryCard;
