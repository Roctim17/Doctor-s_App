import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;
    const handleDelete = () => {
        fetch(`https://morning-wave-60521.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`Doctor: ${deletingDoctor.name} is remove `);
                    setDeletingDoctor(null)
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-model" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete {name}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className='btn btn-xs btn-error'>Delete</button>
                        <label for="delete-confirm-model" className="btn btn-xs">cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;