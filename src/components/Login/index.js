import React, { useContext, useState } from 'react';
import { UserAuthContext } from '../../contexts/UserAuthContext';
const initialValue = { username: '', password: '' }
function Login() {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(initialValue);

    const { login, errorMessage, setErrorMessage } = useContext(UserAuthContext);

    const onValChange = (key, val) => {
        setErrorMessage();
        setError(prev => { return { ...prev, [key]: "" } });
        setValue(prev => { return { ...prev, [key]: val } });
    }

    const loginFlow = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        let isError = false;
        // form validations
        Object.keys(value).map(val => {
            if (value[val].length < 3) {
                setError(prev => {
                    return { ...prev, [val]: `${val} is invalid` }
                })
                isError = true;
            }
            if (value[val] === "") {
                setError(prev => {
                    return { ...prev, [val]: `${val} is required` }
                })
                isError = true;
            }
        })

        if (isError) return;
        login(value);
    }

    return (
        <div className="bg-gray-100 overflow-hidden h-max flex flex-col items-center justify-center md:h-screen lg:py-0">
            <div className="w-full bg-white border-gray-100 rounded-2xl shadow md:mt-0 sm:max-w-md xl:p-">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="mb-5 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <div className='text-center'>
                        <span>userName: kminchelle</span>
                        <span className='pl-5'>{' '}password: 0lelplR</span>
                    </div>

                    <div className={`text-red-600 mt-1 text-xs ${errorMessage ? "opacity-100" : "opacity-0"}`}>{errorMessage || "null"}</div>
                    <form className="space-y-4 md:space-y-2" onSubmit={loginFlow}>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input onChange={(e) => { onValChange("username", e.target.value) }} name="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="email@gmail.com" required="" />
                            <span className={`text-red-600 pt-4 text-xs pl-2 ${error.username ? "opacity-100" : "opacity-0"}`}>{error.username}</span>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input onChange={(e) => { onValChange("password", e.target.value) }} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            <span className={`text-red-600 pt-4 text-xs pl-2 ${error.password ? "opacity-100" : "opacity-0"}`}>{error.password}</span>
                        </div>

                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Login