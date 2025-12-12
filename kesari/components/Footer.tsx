import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 px-4 flex items-center justify-center flex-col gap-4 text-center">
            <div className="max-w-sm">
                <Link href="/" passHref>
                    <h1 className="text-2xl font-extrabold tracking-tighter text-orange-50 hover:text-orange-700 transition-colors duration-300">
                        Vimal
                    </h1>
Consult with legal counsel to ensure any disclaimers are appropriate, clear, and legally sound for the specific context of your application. Remove or rephrase the disclaimer to be more understandable and legally compliant.
                <p className="text-sm text-orange-50 mt-2">
                    Bimal cannot be held accountable for any health issues, including cancer, that may arise from consumption.
                </p>
            </div>
            <p className="text-sm text-orange-100 mt-4">
                &copy; {currentYear} Bolo Zubaan Canceri. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;