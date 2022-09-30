import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';
// import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
<<<<<<< HEAD
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://morning-wave-60521.herokuapp.com/doctor', {
=======
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://doctor-s-app-server-tmgg.vercel.app/doctor', {
>>>>>>> be586665424308962cd1fafc2f3e52761ec04eab
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl'>Manage Doctors : {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }


                    </tbody>

                </table>
            </div>
            {
                deletingDoctor && <DeleteConfirmModal
                    deletingDoctor={deletingDoctor}
                    setDeletingDoctor={setDeletingDoctor}
                    refetch={refetch}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;