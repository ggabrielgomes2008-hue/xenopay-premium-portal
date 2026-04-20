import React from "react";
import { Link } from "react-router-dom";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { SignInForm } from "../components/SignInForm";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
export function HomePage() {
  const user = useQuery(api.auth.loggedInUser);
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden py-12 md:py-24">
      {/* Visual background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-zinc-800 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <Authenticated>
          <div className="text-center space-y-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest text-zinc-400 uppercase bg-white/5 border border-white/10 rounded-full mb-4">
                Exclusive Access
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-none italic">
                WELCOME BACK, <br />
                <span className="text-white/40">{user?.name ?? user?.email?.split('@')[0] ?? "USER"}</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Your premium portal is ready. Access your global payments and elite dashboard with one click.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                to="/dashboard" 
                className="premium-button-primary group w-full sm:w-auto"
              >
                Enter Portal
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/about" 
                className="premium-button-outline w-full sm:w-auto"
              >
                System Status
              </Link>
            </motion.div>
          </div>
        </Authenticated>
        <Unauthenticated>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8 text-left"
            >
              <div className="space-y-4">
                <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter italic">XENOPAY</h2>
                <p className="text-xl text-zinc-400 max-w-md">
                  The dark infrastructure for premium global payments. Secure, fast, and relentlessly elegant.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Vault-Grade Security", desc: "Military grade encryption for your assets." },
                  { icon: Zap, title: "Instant Settlement", desc: "Transactions confirmed in milliseconds." },
                  { icon: Globe, title: "Global Borderless", desc: "Support for 180+ countries and counting." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl p-8 md:p-12"
            >
              <div className="mb-8 space-y-2">
                <h3 className="text-2xl font-bold italic tracking-tight">PORTAL GATEWAY</h3>
                <p className="text-zinc-400 text-sm">Identity verification required for entry.</p>
              </div>
              <SignInForm />
            </motion.div>
          </div>
        </Unauthenticated>
      </div>
    </div>
  );
}