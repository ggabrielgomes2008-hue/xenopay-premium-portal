import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Lock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
export function CheckoutPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast.success("Payment Successful", {
        description: "Your premium access has been activated.",
      });
      navigate("/dashboard");
    }, 2000);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left: Form */}
        <div className="lg:col-span-7 space-y-12">
          <section className="space-y-6">
            <h1 className="text-3xl font-display font-bold tracking-tighter italic">FINALIZE ACCESS</h1>
            <p className="text-zinc-500">Enter your billing information to complete the portal activation.</p>
          </section>
          <form onSubmit={handlePayment} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" className="bg-zinc-900 border-white/10" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" className="bg-zinc-900 border-white/10" required />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-zinc-900 border-white/10" required />
                </div>
              </div>
            </div>
            <Separator className="bg-white/5" />
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">Payment Details</h3>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-zinc-800 rounded border border-white/10" />
                  <div className="w-8 h-5 bg-zinc-800 rounded border border-white/10" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <Label htmlFor="card-number" className="sr-only">Card Number</Label>
                  <Input id="card-number" placeholder="0000 0000 0000 0000" className="bg-zinc-900 border-white/10 pl-10" required />
                  <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-zinc-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" className="bg-zinc-900 border-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="***" className="bg-zinc-900 border-white/10" required />
                  </div>
                </div>
              </div>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full premium-button-primary"
            >
              {loading ? (
                <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                "Complete Payment & Activate"
              )}
            </button>
            <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest flex items-center justify-center gap-2">
              <Lock className="h-3 w-3" /> Secure Encrypted Transaction
            </p>
          </form>
        </div>
        {/* Right: Summary */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5"
        >
          <div className="glass-panel rounded-3xl p-8 space-y-8 sticky top-24">
            <h3 className="text-xl font-bold italic tracking-tight">ORDER SUMMARY</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">PRO ACCESS TIER</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Global Infrastructure Activation</p>
                </div>
                <span className="font-bold">$149.00</span>
              </div>
              <Separator className="bg-white/5" />
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Setup Fee</span>
                <span className="text-zinc-200">Waived</span>
              </div>
              <div className="flex justify-between text-zinc-400 text-sm">
                <span>Tax (VAT)</span>
                <span className="text-zinc-200">$0.00</span>
              </div>
              <Separator className="bg-white/5" />
              <div className="flex justify-between text-xl font-bold tracking-tighter italic">
                <span>TOTAL DUE</span>
                <span>$149.00</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex gap-3 items-center">
                <ShieldCheck className="h-5 w-5 text-white" />
                <span className="text-sm font-medium">XenoPay Security Protocol</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Your purchase is protected by 256-bit SSL encryption. All data is processed via secure 
                infrastructure according to PCI-DSS standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}