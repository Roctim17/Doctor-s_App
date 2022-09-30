import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
<<<<<<< HEAD
            fetch(`https://morning-wave-60521.herokuapp.com/user/${email}`, {
=======
            fetch(`https://doctor-s-app-server-tmgg.vercel.app/user/${email}`, {
>>>>>>> be586665424308962cd1fafc2f3e52761ec04eab
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                });
        }

    }, [user]);
    return [token];
}

export default useToken;