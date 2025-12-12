import React from 'react';
import Cards from './Cards';

const SECTION_CLASS = 'flex flex-col items-center justify-center py-12 px-4 bg-orange-50 shadow-md gap-12 rounded-2xl';
const HEADING_CLASS = 'text-4xl font-extrabold text-orange-950 tracking-tighter';
const SUBHEADING_CLASS = 'text-xl text-orange-950 text-center max-w-lg';
const CARD_CONTAINER_CLASS = 'flex flex-col items-center justify-center gap-5';

const TITLE_TEXT = 'Cancerous Products';
const SUBTITLE_TEXT = 'Discover an extensive selection of highly cancerous products designed specifically for you!';

interface Product {
  id: number;
  // Add other relevant product properties here
}

// In a real application, this data would likely come from an API or a state management solution.
const dummyProducts: Product[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  // Add more dummy products as needed
];

export default function Content() {
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
        {dummyProducts.map((product) => (
          <Cards key={product.id} />
        ))}
      </div>
    </section>
  );
}