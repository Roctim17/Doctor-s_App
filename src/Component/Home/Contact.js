import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from './Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className=''>
            <div className="text-center py-20">
                <h3 className='text-primary text-3xl font-bold'>Contact Us</h3>
                <h1 className='text-white text-4xl font-bold'>Stay connected with us</h1>
                <div className="my-5">
                    <div class="form-control w-1/2 m-auto">
                        <label class="">
                            <input type="text" placeholder="Email Address" class="input input-bordered w-3/4 my-3" />
                        </label>

                        <label class="">
                            <input type="text" placeholder="Subject" class="input input-bordered w-3/4 my-3" />
                        </label>

                        <label class="">
                            <textarea type="text" placeholder="Your message" class="input input-bordered w-3/4 my-3" />
                        </label>
                    </div>

                </div>
                <PrimaryButton>Contact</PrimaryButton>
            </div>

        </section>
    );
};

export default Contact;