import React from "react";

export default function Hero() {
    return <section className="mx-w-7xl mx-auto pt-12 px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center pt-8">
            <h1 className="text-5xl text-orange-950 font-extrabold tracking-tighter">Bolo Zubaan <span className="text-orange-50">Canceri</span></h1>
            <p className="text-lg text-orange-950">More you eats, sooner you dies</p>
        </div>
        <img className="w-[35%] h-full object-contain sticky top-0 right-0" 
        src="https://github.com/Bharat2044/100xDevs-Cohort3-WebDev-and-Devops/blob/main/Week%2012%20-%20Ui-Ux%20by%20Keshav/12.2%20-%20Ui-Ux%20Primitives%20by%20Keshav%20-%20Part%202/Assignment%20Solution/vimal-pan-masala/public/hero-image.png?raw=true" alt="Bolo Zuba Canceri"
        width={500}
height={500}
        } />
    </section>
}