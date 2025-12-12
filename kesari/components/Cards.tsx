import React from "react";

interface CardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export default function Cards({
  imageUrl,
  imageAlt,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: CardProps) {
  return (
    <div className="group w-full h-full bg-orange-100 rounded-2xl flex flex-col md:flex-row items-center justify-center p-6 gap-12">
      <img
        className="group-hover:translate-y-1 transition-all duration-300 object-contain"
        src={imageUrl}
        alt={imageAlt}
        width={270}
        height={270}
      />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col text-orange-950">
          <h3 className="lg:text-2xl font-semibold text-xl tracking-tighter">
            <span className="text-orange-600">Vimal</span> {title}
          </h3>
          <p className="lg:text-lg md:w-xl">
            {description}
          </p>

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg bg-orange-600 py-2 px-4 text-white hover:bg-orange-700 transition-all duration-300"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </button>
            <button
              className="bg-orange-50 text-orange-950 px-4 py-2 rounded-lg hover:bg-orange-50/50 transition-all duration-300"
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}