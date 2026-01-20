import { faArrowRight, faChartSimple, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registerApi } from '../api/auth-api'

const Register = () => {

    const {handleSubmit , register,reset ,formState:{errors} } = useForm()

    const navigate = useNavigate()

    const registerHandler = async ({fullName , email , password , confirmPassword})=>{

        fullName = fullName.trim()
        email = email.trim()
        password = password.trim()
        confirmPassword = confirmPassword.trim()

        if(password !== confirmPassword) return toast.error("password not matched")

        const response = await registerApi(fullName ,email , confirmPassword )

        if(response.status !==201) return toast.error( response?.data?.message || "Failed to register")

        toast.success(response?.data?.message ||  "register successfully")
        
        navigate('/login')
    }
    return (

        <div className="bg-zinc-900 text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <div className="grain-overlay"></div>
            {/* <!-- Navigation Header --> */}
            <header className=" md:fixed top-0 left-0 w-full z-40 px-10 py-6">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 ">
                        <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-background-dark">
                            <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                        <h1 className="text-xl font-bold tracking-widest uppercase">Sonicflow</h1>
                    </div>
                    <div className="flex items-center gap-8">
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Discover</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Artist Portal</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
                        </nav>
                        <Link to={"/login"} className="px-6 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
                            Sign In
                        </Link>
                    </div>
                </div>
            </header>
            {/* <!-- Main Content --> */}
            <main className="relative z-10 w-full max-w-[1200px] grid lg:grid-cols-2 gap-12 items-center px-6 my-5 md:my-20">
                {/* <!-- Left Side: Branding/Emotion --> */}
                <div className="hidden lg:block space-y-8">
                    <div className="space-y-4">
                        <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">The Sonic Future</span>
                        <h2 className="text-6xl font-bold leading-tight">Your music,<br />reimagined.</h2>
                        <p className="text-white/60 text-lg max-w-md leading-relaxed">
                            Join an elite community of audiophiles. Experience the first emotion-driven music intelligence engine.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                            <div className="size-12 rounded-lg overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="Abstract vibrant sound waves visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxFKeMUAWEjj5lnYM-dl8ALjCe3ir6z9DUZca1mWPnX18n-_2oQ_B8yWfPyZk97Gsq3JBZvMYcow3qAAwfOGdNuGtExpLaioAef8wTkS8Om0qVz7r9J7MYkpMq1KN53QUTPPbepERAtEGiuPUv8mtVB5SuMZBrsTzz6uGf41_JQBYojL_38o3ZaZ7NHVmZsXv-aQnGTGdIAl_qtytbYimyGUs1fbYBjkQYT7t7fNGPqTzPVDmXeO-xIJ3Fp5NUj5yrCYFpeuClDNb5" />
                            </div>
                            <div>
                                <p className="text-xs text-white/40 uppercase tracking-tighter">Now Playing</p>
                                <p className="text-sm font-medium">Neural Drift — Vol. 4</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Right Side: Registration Card --> */}
                <div className="w-full flex justify-center lg:justify-end">
                    <div className="glass-panel w-full max-w-[480px] p-8 md:p-12 rounded-2xl flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold mb-2">Create Account</h3>
                            <p className="text-white/50 text-sm">Step into the sonic flow. No strings attached.</p>
                        </div>
                        <form onSubmit={handleSubmit(registerHandler)} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Full Name</label>
                                <div className="relative">
                                    <FontAwesomeIcon className=' absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl' icon={faUser} />
                                    <input {...register('fullName',{required:true})} className="input-glass w-full h-14 pl-12 pr-4 rounded-xl focus:outline-none text-white placeholder:text-white/20" placeholder="John Doe" type="text" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Email Address</label>
                                <div className="relative">
                                    <FontAwesomeIcon className=' absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl' icon={faEnvelope} />
                                    <input {...register('email')} className="input-glass w-full h-14 pl-12 pr-4 rounded-xl focus:outline-none text-white placeholder:text-white/20" placeholder="name@voyage.com" type="email" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Password</label>
                                    <input {...register('password',{required:true})} className="input-glass w-full h-14 px-4 rounded-xl focus:outline-none text-white placeholder:text-white/20" placeholder="••••••••" type="password" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Confirm</label>
                                    <input {...register('confirmPassword',{required:true})} className="input-glass w-full h-14 px-4 rounded-xl focus:outline-none text-white placeholder:text-white/20" placeholder="••••••••" type="password" />
                                </div>
                            </div>
                            <div className="pt-4">
                                <button className="glow-button w-full h-14 bg-purple-800/80 text-background-dark font-bold text-base rounded-xl flex items-center justify-center gap-2 group" type="submit">
                                    <span>Initialize Identity</span>
                                    <FontAwesomeIcon className=' group-hover:translate-x-1 transition-transform' icon={faArrowRight} />
                                </button>
                            </div>
                            <div className="pt-4 text-center">
                                <p className="text-sm text-white/40">
                                    Already a member?
                                    <Link to={"/login"} className="text-primary font-medium hover:underline ml-1">Login to SonicFlow</Link>
                                </p>
                            </div>
                        </form>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Secure Encryption</span>
                            <div className="h-[1px] flex-1 bg-white/10"></div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <!-- Footer Visual Elements --> */}
            <div className="fixed bottom-10 left-10 hidden xl:flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-white/20">
                    <span className="size-1 rounded-full bg-primary animate-pulse"></span>
                    System Status: Optimal
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-white/20">
                    <span className="size-1 rounded-full bg-white/20"></span>
                    Latency: 14ms
                </div>
            </div>
             
        </div>

    )
}

export default Register