import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from "../Home/Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from '../../Hooks/useToken';
import { toast } from 'react-toastify';
const Login = () => {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [sendPasswordResetEmail, sending, forgotError] = useSendPasswordResetEmail(
        auth
    );
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || googleUser)

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (googleLoading || loading) {
        return <Loading></Loading>
    }

    if (error || googleError) {
        signInError = <p className="text-red-500">{error?.message || googleError?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    // Forgot Password

    const SendPasswordReset = () => {
        const email = getValues('email')
        // sendPasswordResetEmail(email)
        sendPasswordResetEmail(email)

    }
    if (forgotError) {
        toast.error(forgotError.message)
    }
    // if (forgotError === (email === '')) {
    //     setEmail({ value: '', error: 'Email is required' })
    //     return (
    //         <div>
    //             <p>Error: {forgotError.message}</p>
    //         </div>
    //     );
    // }

    else if (sending) {
        toast.success('send link')
        //     return (
        //         <div>
        //             <p>Sending ..... </p>
        //         </div>
        //     );
    }


    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'example@email.com'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="Password" placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}Email is pattern</span>}
                            </label>
                        </div>
                        {signInError}
                        <p className='mb-3'><small>Forgot PassWord? <Link
                            className="text-primary" to="#" onClick={SendPasswordReset} >Reset Password</Link> </small></p>
                        <input className="btn w-full mas-w-xs text-white" type="submit" value='Login' />
                    </form>
                    <p><small>New to Dental Care <Link className="text-primary" to="/signup" >Create New Account </Link> </small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>

    );
};

export default Login;