import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h5 className='text-xl text-secondary text-center'>Available Appoinments on {format(date, 'PP')}</h5>
            <div className=""></div>
        </div>
    );
};

export default AvailableAppointments;