import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)

    useEffect(()=>{
        const sendDetails = ()=>{
            axios.post('/login',{
                email: email,
                password: password
            })
        }
        sendDetails()
    },[login])
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <div className="mb-4">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        onInput={email}
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        onInput={password}
                        type="password"
                        placeholder="Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    onClick={() => setLogin(true)}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
                <p className="text-gray-600 text-sm mt-4">Don't have an account?/</p>
                <button onClick={null}>Sign Up now</button>
            </form>
        </div>
    )
}

export default Login