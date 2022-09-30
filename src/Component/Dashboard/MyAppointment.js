import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
<<<<<<< HEAD
            fetch(`https://morning-wave-60521.herokuapp.com/booking?patient=${user.email}`, {
=======
            fetch(`https://doctor-s-app-server-tmgg.vercel.app/booking?patient=${user.email}`, {
>>>>>>> be586665424308962cd1fafc2f3e52761ec04eab
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data)
                });
        }
    }, [])
    return (
        <div>
            <h1>My Appointments :{appointments.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-xs btn-success'>pay</button>  </Link>}
                                    {(a.price && a.paid) && <span className='text-success'>paid</span>}</td>
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;