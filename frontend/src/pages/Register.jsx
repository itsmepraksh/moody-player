import React from 'react'

const Register = () => {
    return (

        <div class="bg-background-dark text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <div class="grain-overlay"></div>
            {/* <!-- Navigation Header --> */}
            <header class="fixed top-0 left-0 w-full z-40 px-10 py-6">
                <div class="max-w-[1440px] mx-auto flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="size-8 flex items-center justify-center bg-primary rounded-lg text-background-dark">
                            <span class="material-symbols-outlined font-bold">graphic_eq</span>
                        </div>
                        <h1 class="text-xl font-bold tracking-widest uppercase">Symphony</h1>
                    </div>
                    <div class="flex items-center gap-8">
                        <nav class="hidden md:flex items-center gap-8">
                            <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Discover</a>
                            <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Artist Portal</a>
                            <a class="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
                        </nav>
                        <button class="px-6 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
                            Sign In
                        </button>
                    </div>
                </div>
            </header>
            {/* <!-- Main Content --> */}
            <main class="relative z-10 w-full max-w-[1200px] grid lg:grid-cols-2 gap-12 items-center px-6">
                {/* <!-- Left Side: Branding/Emotion --> */}
                <div class="hidden lg:block space-y-8">
                    <div class="space-y-4">
                        <span class="text-primary text-xs font-bold tracking-[0.4em] uppercase">The Sonic Future</span>
                        <h2 class="text-6xl font-bold leading-tight">Your music,<br />reimagined.</h2>
                        <p class="text-white/60 text-lg max-w-md leading-relaxed">
                            Join an elite community of audiophiles. Experience the first emotion-driven music intelligence engine.
                        </p>
                    </div>
                    <div class="flex gap-4">
                        <div class="glass-panel p-4 rounded-xl flex items-center gap-4">
                            <div class="size-12 rounded-lg overflow-hidden">
                                <img class="w-full h-full object-cover" data-alt="Abstract vibrant sound waves visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxFKeMUAWEjj5lnYM-dl8ALjCe3ir6z9DUZca1mWPnX18n-_2oQ_B8yWfPyZk97Gsq3JBZvMYcow3qAAwfOGdNuGtExpLaioAef8wTkS8Om0qVz7r9J7MYkpMq1KN53QUTPPbepERAtEGiuPUv8mtVB5SuMZBrsTzz6uGf41_JQBYojL_38o3ZaZ7NHVmZsXv-aQnGTGdIAl_qtytbYimyGUs1fbYBjkQYT7t7fNGPqTzPVDmXeO-xIJ3Fp5NUj5yrCYFpeuClDNb5" />
                            </div>
                            <div>
                                <p class="text-xs text-white/40 uppercase tracking-tighter">Now Playing</p>
                                <p class="text-sm font-medium">Neural Drift — Vol. 4</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Right Side: Registration Card --> */}
                <div class="w-full flex justify-center lg:justify-end">
                    <div class="glass-panel w-full max-w-[480px] p-8 md:p-12 rounded-2xl flex flex-col">
                        <div class="mb-8">
                            <h3 class="text-3xl font-bold mb-2">Create Account</h3>
                            <p class="text-white/50 text-sm">Step into the symphony. No strings attached.</p>
                        </div>
                        <form class="space-y-5">
                            <div class="space-y-2">
                                <label class="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Full Name</label>
                                <div class="relative">
                                    <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl">person</span>
                                    <input class="input-glass w-full h-14 pl-12 pr-4 rounded-xl focus:outline-none text-white placeholder:text-white/20" placeholder="John Doe" type="text" />
                                </div>
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Email Address</label>
                                <div class="relative">
                                    <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-xl">alternate_email</span>
                                    <input class="input-glass w-full h-14 pl-12 pr-4 rounded-xl focus:outline-none text-white placeholder:text-white/20" placeholder="name@voyage.com" type="email" />
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label class="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Password</label>
                                    <input class="input-glass w-full h-14 px-4 rounded-xl focus:outline-none text-white placeholder:text-white/20" placeholder="••••••••" type="password" />
                                </div>
                                <div class="space-y-2">
                                    <label class="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Confirm</label>
                                    <input class="input-glass w-full h-14 px-4 rounded-xl focus:outline-none text-white placeholder:text-white/20" placeholder="••••••••" type="password" />
                                </div>
                            </div>
                            <div class="pt-4">
                                <button class="glow-button w-full h-14 bg-primary text-background-dark font-bold text-base rounded-xl flex items-center justify-center gap-2 group" type="submit">
                                    <span>Initialize Identity</span>
                                    <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                            <div class="pt-4 text-center">
                                <p class="text-sm text-white/40">
                                    Already a member?
                                    <a class="text-primary font-medium hover:underline ml-1" href="#">Login to Symphony</a>
                                </p>
                            </div>
                        </form>
                        <div class="mt-8 flex items-center gap-4">
                            <div class="h-[1px] flex-1 bg-white/10"></div>
                            <span class="text-[10px] uppercase tracking-[0.3em] text-white/20">Secure Encryption</span>
                            <div class="h-[1px] flex-1 bg-white/10"></div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <!-- Footer Visual Elements --> */}
            <div class="fixed bottom-10 left-10 hidden xl:flex flex-col gap-2">
                <div class="flex items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-white/20">
                    <span class="size-1 rounded-full bg-primary animate-pulse"></span>
                    System Status: Optimal
                </div>
                <div class="flex items-center gap-2 text-[10px] uppercase tracking-[0.5em] text-white/20">
                    <span class="size-1 rounded-full bg-white/20"></span>
                    Latency: 14ms
                </div>
            </div>
            <div class="fixed bottom-10 right-10 flex gap-6">
                <a class="size-10 flex items-center justify-center rounded-full glass-panel hover:text-primary transition-colors" href="#">
                    <svg class="size-5" fill="currentColor" viewbox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a>
                <a class="size-10 flex items-center justify-center rounded-full glass-panel hover:text-primary transition-colors" href="#">
                    <svg class="size-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </a>
            </div>
        </div>

    )
}

export default Register