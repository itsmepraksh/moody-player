import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAt, faChartSimple, faEye, faLock} from "@fortawesome/free-solid-svg-icons"
import {Link, useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import { loginApi } from "../api/auth-api"
import {toast} from "react-toastify"


const Login = () => {

    const { handleSubmit ,register,formState:{errors} } = useForm()

    const navigate = useNavigate()


    const LoginHandler = async ({email , password})=>{
        email = email.trim()
        password = password.trim()

        const response = await loginApi(email,password)

        if(response.status !== 200) return toast.error(response?.data?.message || "Failed to login, try again") ;

        toast.success(response.data.message ||"login successfully")

        navigate('/')
    }
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-white overflow-hidden">
            <div className="fixed inset-0 bg-mesh z-0">
                <div className="blob top-[-10%] left-[-10%]"></div>
                <div className="blob bottom-[-10%] right-[-10%] bg-accent-cyan/30"></div>
            </div>
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* <!-- Top Navigation --> */}
                <header className="flex items-center justify-between px-10 py-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(157,37,244,0.5)]">
                            <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tighter uppercase">SonicFlow</h2>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Manifesto</a>
                        <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Community</a>
                        <Link to={"/"} className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 px-6 border border-white/20 hover:bg-white/10 text-white text-sm font-medium transition-all">
                            Explore
                        </Link>
                    </div>
                </header>
                {/* <!-- Main Login Content --> */}
                <main className="flex-1 flex items-center justify-center px-4 pb-12">
                    <div className="glass-panel w-full max-w-[480px] rounded-xl p-10 flex flex-col items-center">
                        {/* <!-- Header Section --> */}
                        <div className="mb-10 text-center">
                            <h1 className="text-white text-4xl font-bold tracking-tight mb-3">Welcome Back</h1>
                            <p className="text-white/50 text-base font-light">Sync your frequency with the soundscape</p>
                        </div>
                        {/* <!-- Form --> */}
                        <form onSubmit={handleSubmit(LoginHandler)} className="w-full space-y-6">
                            {/* <!-- Email Field --> */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white/70 text-xs font-bold uppercase tracking-widest pl-1">Aural Identity</label>
                                <div className="flex items-center rounded-xl bg-black/30 border border-white/10 transition-all neon-border focus-within:ring-1 focus-within:ring-primary">
                                    <div className="pl-4 text-white/40">
                                        <FontAwesomeIcon icon={faAt} />
                                    </div>
                                    <input {...register("email",{required:true})} className="bg-transparent outline-none border-none focus:ring-0 text-white w-full h-14 px-4 placeholder:text-white/20 font-light" placeholder="email@example.com" type="email" />
                                </div>
                                {errors.email && <small className="text-red-400 text-xs font-medium">This is required</small>}
                            </div>
                            {/* <!-- Password Field --> */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-white/70 text-xs font-bold uppercase tracking-widest">Access Key</label>
                                    <Link to={""} className="text-accent-cyan text-[11px] font-bold uppercase tracking-wider hover:underline">Forgot?</Link>
                                </div>
                                <div className="flex items-center rounded-xl bg-black/30 border border-white/10 transition-all neon-border focus-within:ring-1 focus-within:ring-primary">
                                    <div className="pl-4 text-white/40">

                                        <FontAwesomeIcon icon={faLock} />
                                    </div>
                                    <input {...register("password",{required:true})} className="bg-transparent outline-none border-none focus:ring-0 text-white w-full h-14 px-4 placeholder:text-white/20 font-light" placeholder="••••••••" type="password" />
                                    <button className="pr-4 text-white/40 hover:text-white transition-colors" type="button">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                </div>

                                {errors.password && <small className="text-red-400 text-xs font-medium">This is required</small>}
                            </div>
                            {/* <!-- Login Button --> */}
                            <div className="pt-4">
                                <button className="w-full h-14 bg-gradient-to-r from-primary via-[#b353ff] to-primary bg-[length:200%_auto] rounded-xl text-white font-bold text-lg tracking-wide shadow-[0_10px_30px_rgba(157,37,244,0.4)] hover:shadow-[0_15px_40px_rgba(157,37,244,0.6)] transition-all transform hover:-translate-y-1 active:scale-[0.98]">
                                    Enter the Soundscape
                                </button>
                            </div>
                        </form>
                        {/* <!-- Footer CTA --> */}
                        <div className="mt-10 text-center">
                            <p className="text-white/40 text-sm">
                                New to SonicFlow?
                                <Link to={"/register"} className="text-accent-cyan font-bold hover:text-white transition-colors ml-1">Create an Account</Link>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Login
