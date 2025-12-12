import React from 'react';
import Cards from './Cards';

// Define constants for repeatable strings to improve maintainability and reduce typos.
const SECTION_CLASS = 'flex flex-col items-center justify-center py-12 px-4 bg-orange-50 shadow-md gap-12 rounded-2xl';
const HEADING_CLASS = 'text-4xl font-extrabold text-orange-950 tracking-tighter';
const SUBHEADING_CLASS = 'text-xl text-orange-950 text-center max-w-lg';
const CARD_CONTAINER_CLASS = 'flex flex-col items-center justify-center gap-5';

const TITLE_TEXT = 'Cancerous Products';
const SUBTITLE_TEXT = 'Discover an extensive selection of highly cancerous products designed specifically for you!';

export default function Content() {
    // Use an array to map over to render multiple Cards components. This makes the code
    // more dynamic and easier to manage if the number of cards needs to change.
    const numberOfCards = 3;

    return (
        <section className={SECTION_CLASS}>
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className={HEADING_CLASS}>
                    {TITLE_TEXT}
                </h2>
                <p className={SUBHEADING_CLASS}>
                    {SUBTITLE_TEXT}
                </p>
            </div>

            <div className={CARD_CONTAINER_CLASS}>
                {Array.from({ length: numberOfCards }).map((_, index) => (
                    <Cards key={index} />
                ))}
            </div>
        </section>
    );
}