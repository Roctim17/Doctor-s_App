import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
<<<<<<< HEAD
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://morning-wave-60521.herokuapp.com/user', {
=======
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://doctor-s-app-server-tmgg.vercel.app/user', {
>>>>>>> be586665424308962cd1fafc2f3e52761ec04eab
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;