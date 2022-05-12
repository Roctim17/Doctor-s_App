import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment = { setTreatment } }) => {
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg  text-secondary">Booking For:{name}</h3>
                    <form action="" onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered input-primary w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot} >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered input-primary w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered input-primary w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit" value='submit' placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;