import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
<<<<<<< HEAD
            fetch(`https://morning-wave-60521.herokuapp.com/admin/${email}`, {
=======
            fetch(`https://doctor-s-app-server-tmgg.vercel.app/admin/${email}`, {
>>>>>>> be586665424308962cd1fafc2f3e52761ec04eab
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false)
                });
        }
    }, [user])
    return [admin, adminLoading]
}
export default useAdmin;