import React from "react";
import Cards from "./Cards";

export default function Content() {
    return <section className="flex flex-col items-center justify-center py-12 px-4 bg-orange-50 shadow-md gap-12 rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-4xl font-extrabold text-orange-950 tracking-tighter">
                Cancerous Products
            </h2>
            <p className="text-xl text-orange-950 text-center max-w-lg">
            Discover an extensive selection of highly cancerous products designed
            specifically for you!
            </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
            <Cards />
            <Cards />
            <Cards />
        </div>
    </section>
}