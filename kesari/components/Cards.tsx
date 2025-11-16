import React from "react";

export default function Cards(){
    return (
        <div className="group w-full h-full bg-orange-100 rounded-2xl flex flex-col md:flex-row items-center justify-center p-6 gap-12">
            <img 
            className="group-hover:translate-y-1 transition-all duration-300 object-contain"
             src="https://github.com/Bharat2044/100xDevs-Cohort3-WebDev-and-Devops/blob/main/Week%2012%20-%20Ui-Ux%20by%20Keshav/12.2%20-%20Ui-Ux%20Primitives%20by%20Keshav%20-%20Part%202/Assignment%20Solution/vimal-pan-masala/public/card-image.png?raw=true" 
             alt="Card Image"
             width={270}
             height={270}
              />

              <div className="flex flex-col gap-6">
                <div className="flex flex-col text-orange-950">
                    <h3 className="lg:text-2xl font-semibold text-xl tracking-tighter ">
                    <span className="text-orange-600">Vimal</span> Elaichi
                    </h3>
                    <p className="lg:text-lg md:w-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet enim nec orci lacinia pellentesque.
Replace the current button label with a clear and concise action, such as 'Buy Now' or 'Learn More', depending on the intended functionality.
                </div>

                <div className="flex items-center gap-2">
                    <button className="rounded-lg bg-orange-600 py-2 px-4 text-white hover:bg-orange-700 transition-all duration-300">
Replace 'Die Now' and 'Die Later' with descriptive and actionable labels that reflect the actual purpose of these buttons. For example, if they relate to a purchase, they could be 'Buy Now' and 'Add to Cart', or if they are choices in a game, 'Choose A' and 'Choose B'.<button className="rounded-lg bg-orange-600 py-2 px-4 text-white hover:bg-orange-700 transition-all duration-300">Action 1</button><button className="bg-orange-50 text-orange-950 px-4 py-2 rounded-lg hover:bg-orange-50/50 transition-all duration-300">Action 2</button>
                    </button>

                    <button className="bg-orange-50 text-orange-950 px-4 py-2 rounded-lg hover:bg-orange-50/50 transition-all duration-300">
                        Die Later
                    </button>
                </div>
              </div>
        </div>
    )
}