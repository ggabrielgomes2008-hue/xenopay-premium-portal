import React from "react";
import { Link } from "react-router-dom";
import { Check, Crown, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";
const PLANS = [
  {
    name: "STANDARD",
    price: "$49",
    period: "month",
    icon: Zap,
    features: ["Global Payments", "Standard Support", "Mobile Portal Access", "Basic Analytics"],
    popular: false,
  },
  {
    name: "PRO",
    price: "$149",
    period: "month",
    icon: Shield,
    features: ["Global Payments", "Priority Settlement", "Advanced Analytics", "Dedicated Concierge", "Multi-user Access"],
    popular: true,
  },
  {
    name: "ELITE",
    price: "$499",
    period: "month",
    icon: Crown,
    features: ["Unlimited Volume", "Instant Liquidity", "Custom White-labeling", "Personal Account Executive", "API Integration"],
    popular: false,
  },
];
export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter italic">CHOOSE YOUR ACCESS</h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Select a tier to activate your premium XenoPay infrastructure.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex flex-col rounded-3xl p-8 border ${
              plan.popular 
                ? "bg-white text-black border-white" 
                : "bg-zinc-900 border-white/10 text-white"
            } transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] font-bold tracking-[0.2em] px-4 py-1.5 rounded-full uppercase">
                MOST POPULAR
              </span>
            )}
            <div className="mb-8">
              <plan.icon className={`h-10 w-10 mb-4 ${plan.popular ? "text-black" : "text-white"}`} />
              <h3 className="text-xl font-bold tracking-widest">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-zinc-600" : "text-zinc-500"}`}>/{plan.period}</span>
              </div>
            </div>
            <ul className="flex-1 space-y-4 mb-10">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className={`h-4 w-4 shrink-0 ${plan.popular ? "text-black" : "text-white"}`} />
                  <span className={`text-sm ${plan.popular ? "text-zinc-800" : "text-zinc-400"}`}>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/checkout"
              className={`w-full premium-button ${
                plan.popular 
                  ? "bg-zinc-950 text-white hover:bg-black" 
                  : "bg-white text-black hover:bg-zinc-200"
              }`}
            >
              Select Plan
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}