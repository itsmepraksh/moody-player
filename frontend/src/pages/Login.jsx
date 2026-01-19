

const Login = () => {
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
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(157,37,244,0.5)]">
                            <span className="material-symbols-outlined text-white text-2xl">graphic_eq</span>
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tighter uppercase">SonicFlow</h2>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Manifesto</a>
                        <a className="text-white/70 hover:text-white text-sm font-medium transition-colors" href="#">Community</a>
                        <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 px-6 border border-white/20 hover:bg-white/10 text-white text-sm font-medium transition-all">
                            Explore
                        </button>
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
                        <form className="w-full space-y-6">
                            {/* <!-- Email Field --> */}
                            <div className="flex flex-col gap-2">
                                <label className="text-white/70 text-xs font-bold uppercase tracking-widest pl-1">Aural Identity</label>
                                <div className="flex items-center rounded-xl bg-black/30 border border-white/10 transition-all neon-border focus-within:ring-1 focus-within:ring-primary">
                                    <div className="pl-4 text-white/40">
                                        <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                                    </div>
                                    <input className="bg-transparent border-none focus:ring-0 text-white w-full h-14 px-4 placeholder:text-white/20 font-light" placeholder="email@example.com" type="email" />
                                </div>
                            </div>
                            {/* <!-- Password Field --> */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-white/70 text-xs font-bold uppercase tracking-widest">Access Key</label>
                                    <a className="text-accent-cyan text-[11px] font-bold uppercase tracking-wider hover:underline" href="#">Forgot?</a>
                                </div>
                                <div className="flex items-center rounded-xl bg-black/30 border border-white/10 transition-all neon-border focus-within:ring-1 focus-within:ring-primary">
                                    <div className="pl-4 text-white/40">
                                        <span className="material-symbols-outlined text-[20px]">lock_open</span>
                                    </div>
                                    <input className="bg-transparent border-none focus:ring-0 text-white w-full h-14 px-4 placeholder:text-white/20 font-light" placeholder="••••••••" type="password" />
                                    <button className="pr-4 text-white/40 hover:text-white transition-colors" type="button">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
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
                                <a className="text-accent-cyan font-bold hover:text-white transition-colors ml-1" href="#">Create an Account</a>
                            </p>
                        </div>
                    </div>
                </main>
                {/* <!-- Subtle Background Artwork --> */}
               

                
            </div>
        </div>
    )
}

export default Login


//  <div className="fixed bottom-0 left-0 w-full h-1/3 pointer-events-none overflow-hidden opacity-30">
//                     <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-background-dark to-transparent"></div>
//                     <!-- This div represents an abstract wave visualization -->
//                     <div className="flex items-end justify-center gap-1 h-full px-10 pb-5">
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 20%"></div>
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 40%"></div>
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 30%"></div>
//                         <div className="bg-accent-cyan/40 w-1 rounded-t-full" style="height: 60%"></div>
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 45%"></div>
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 80%"></div>
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 55%"></div>
//                         <div className="bg-accent-cyan/40 w-1 rounded-t-full" style="height: 90%"></div>
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 40%"></div>
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 20%"></div>
//                         <!-- Repeat for visual rhythm -->
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 30%"></div>
//                         <div className="bg-accent-cyan/40 w-1 rounded-t-full" style="height: 70%"></div>
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 50%"></div>
//                         <div className="bg-primary/40 w-1 rounded-t-full" style="height: 35%"></div>
//                     </div>
//                 </div>