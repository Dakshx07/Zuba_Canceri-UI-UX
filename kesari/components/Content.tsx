import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-orange-950 mb-2">{title}</h3>
      <p className="text-orange-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

const mockProductData: CardProps[] = [
  {
    title: 'Product Alpha',
    description: 'Experience unparalleled quality and innovative features. A game-changer for your daily needs.',
    imageUrl: 'https://via.placeholder.com/300x200/FFB300/FFFFFF?text=Product+Alpha'
  },
  {
    title: 'Product Beta',
    description: 'Engineered for performance and reliability. This product is built to last and exceed expectations.',
    imageUrl: 'https://via.placeholder.com/300x200/FB8C00/FFFFFF?text=Product+Beta'
  },
  {
    title: 'Product Gamma',
    description: 'The ultimate solution for modern challenges. Sleek design meets powerful functionality.',
    imageUrl: 'https://via.placeholder.com/300x200/E65100/FFFFFF?text=Product+Gamma'
  }
];

export default function Content() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-6 bg-orange-50 shadow-xl gap-16 rounded-3xl">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-extrabold text-orange-950 tracking-tight leading-tight">
          Explore Our Premium Selection
        </h2>
        <p className="text-xl text-orange-800 max-w-3xl mx-auto">
          Discover a curated range of exceptional products, meticulously crafted to enhance your lifestyle and meet your unique demands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-screen-xl">
        {mockProductData.map((product, index) => (
          <Card
            key={index} // Using index as key for simplicity in mock data, ideally use a unique ID from data
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}