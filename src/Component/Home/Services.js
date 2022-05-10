import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth whitening',
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='my-28 px-12'>
            <div className="text-center">
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h1 className='text-4xl font-bold'>Services We Provied</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-5">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;