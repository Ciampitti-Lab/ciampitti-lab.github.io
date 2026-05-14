'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const IMAGES = [
  { src: '/about/lily.jpg',         alt: "Purdue's Lilly Hall" },
  { src: '/about/acres.jpg',        alt: 'ACRES Farm' },
  { src: '/about/green_houses.jpg', alt: 'Research Greenhouses' },
];

export default function FacilityCarousel() {
  const [index, setIndex] = useState(0);

  /* advance every 4 s */
  useEffect(() => {
    const id = setInterval(
      () => setIndex(i => (i + 1) % IMAGES.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border border-white/25">
      {IMAGES.map((img, i) => {
        const active = i === index;
        return (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={active}
            sizes="(max-width:768px) 100vw, 50vw"
            className={[
              'absolute inset-0 object-cover will-change-transform',
              'transition-opacity duration-700 ease-in-out',
              active ? 'opacity-100 animate-kenburns' : 'opacity-0',
            ].join(' ')}
          />
        );
      })}
    </div>
  );
}

