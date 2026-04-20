import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { SignOutButton } from "@/components/SignOutButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
type AppLayoutProps = {
  children?: React.ReactNode;
};
export function AppLayout({ children }: AppLayoutProps): JSX.Element {
  const content = children ?? <Outlet />;
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white selection:bg-white selection:text-black">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="text-black font-black text-xl italic leading-none">X</span>
                </div>
                <span className="font-display font-bold tracking-tighter text-xl">XENOPAY</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link 
                  to="/dashboard" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white",
                    location.pathname === "/dashboard" ? "text-white" : "text-zinc-500"
                  )}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/checkout" 
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white",
                    location.pathname === "/checkout" ? "text-white" : "text-zinc-500"
                  )}
                >
                  Checkout
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle className="relative top-0 right-0" />
              <SignOutButton />
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1">
        {content}
      </main>
      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">© 2024 XenoPay Premium. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}