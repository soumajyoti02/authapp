"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const [error, setError] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email, password, redirect: false
            })

            if (res.error) {
                setError("Invalid Credentials")
                return;
            }
            router.replace("dashboard")
        } catch (error) {
            console.log(error)
        }

        if (!email || !password) {
            setError("All fields are necessery.")
            return;
        }
    }

    return (
        <div className="grid place-items-center h-screen bg-gradient-to-r from-violet-200 to-pink-200">
            <div className="shadow-2xl p-5 rounded-lg border-t-4 border-blue-700">
                <h1 className="text-3xl font-bold my-4 text-center">Login</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                        className='rounded-3xl outline-none'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className='rounded-3xl outline-none'
                    />
                    <button className="bg-violet-600  cursor-pointer  
                    text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Login
                    </button>
                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <Link className="text-sm mt-3 text-right" href={"/register"}>
                        Don&apos;t have an account? <span className="underline text-red-700 font-bold">Register</span>
                    </Link>
                </form>
            </div>


        </div>
    )
}

export default LoginForm
