import React from "react";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="py-4 px-4 flex items-center justify-center flex-col gap-4">
            <div className="flex flex-col items-center justify-center gap-2 max-w-sm">
            <Link href="/">
            <h1 className="text-2xl font-extrabold tracking-tighter text-orange-50 hover:text-orange-700 transition-all duration-300">
                Vimal
            </h1>
               </Link>
               <p className="text-sm text-orange-50 text-center">
                Bimal cannot be held accountable for any health issues, including
               cancer, that may arise from consumption.
               </p>
            </div>

            <p className="text-sm text-orange-100">
            &copy; {new Date().getFullYear()} Bolo Zubaan Canceri. All rights
            </p>





        </footer>
    )
}