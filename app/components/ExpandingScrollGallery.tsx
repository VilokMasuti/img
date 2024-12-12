'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// An array of images with properties: 'src' (image path), 'alt' (alternative text), and 'text' (title)
const images = [
  {
    src: '/kr.jpg',
    alt: 'Video thumbnail',
    text: 'Hare',
  },
  {
    src: '/3c7537cdfd64b9bdeaac3cd3b32d154d.jpg',
    alt: 'Image thumbnail',
    text: 'Krishna',
  },
  {
    src: '/e017dd5ca7ad126991ba1f38e229d5bb.jpg',
    alt: 'Article thumbnail',
    text: 'Hare',
  },
]

export default function ExpandingGallery() {
  // State to track which image is currently hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    // Outer container to hold all the images in a flex layout
    <div className="flex w-full h-[400px] rounded-[40px] overflow-hidden">
      {/* Loop through the images array to render each image */}
      {images.map((image, index) => (
        <div
          key={index} // Unique key for each image (required by React)
          className="relative transition-all duration-1000 ease-in-out"
          style={{
            // Dynamically adjust width based on hover state
            width:
              hoveredIndex === index
                ? '60%' // Enlarge the hovered image
                : hoveredIndex === null
                ? '33.33%' // Default width when no image is hovered
                : '35%', // Shrink other images when one is hovered
          }}
          // Set the hoveredIndex to the current index on hover
          onMouseEnter={() => setHoveredIndex(index)}
          // Reset the hoveredIndex when the mouse leaves
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Image component from Next.js for optimized image loading */}
          <Image
            src={image.src} // Image source path
            alt={image.alt} // Alternative text for accessibility
            fill // Makes the image fill the parent container
            className="w-full h-full object-fill" // Ensures the image stretches proportionally to fit
          />

          {/* Overlay div that dims non-hovered images */}
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
              hoveredIndex === index ? 'opacity-0' : 'opacity-100' // Hide overlay on hovered image
            }`}
          ></div>

          {/* Text overlay on top of the image */}
          <div className="absolute top-1 left-0 right-0 p-4">
            <h2 className="text-white text-xl font-bold">{image.text}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}
