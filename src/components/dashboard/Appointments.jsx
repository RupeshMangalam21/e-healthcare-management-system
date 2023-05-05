import React, { useEffect, useState } from 'react';
import { firestore, auth } from '../../lib/init-firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import AppointmentCard from './AppointmentCard';
import '../../style/dashboard/Appointments.css';

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    const userId = auth.currentUser.uid;
    const appointmentsRef = collection(firestore, 'appointment');
    const q = query(appointmentsRef, where('patientId', '==', userId));

    getDocs(q).then((querySnapshot) => {
      const appts = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        appts.push(data);
      });
      console.log(appts);
      setAppointments(appts);
    });
  }, []);

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCloseAppointment = () => {
    setSelectedAppointment(null);
  };

  return (
    <div className="appointments-container">
      <h2>Appointments</h2>
      {selectedAppointment ? (
        <div>
          <AppointmentCard appointment={selectedAppointment} />
          <button
            className="appointment-card-button"
            onClick={() => handleCloseAppointment()}
          >
            close
          </button>
        </div>
      ) : (
        <div className="appointment-list">
          {appointments.length > 0 ? (
            <ul>
              {appointments.map((appointment) => (
                <li key={appointment.appointmentId}>
                  <button
                    onClick={() => handleSelectAppointment(appointment)}
                    style={{ width: '769px' }}
                  >
                    <div className="appointment-item">
                      <div className="appointment-item-info">
                        <p>
                          {new Date(
                            appointment.Date.seconds * 1000
                          ).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}{' '}
                          -- Doctor: {appointment.doctorName}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No appointments found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Appointments;
