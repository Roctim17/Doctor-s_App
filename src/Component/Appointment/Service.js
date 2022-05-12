import React from 'react';
// import PrimaryButton from '../Home/Shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="card-title text-secondary m-auto">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'> No slot Available</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">

                    <label for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary text-white uppercase">book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;