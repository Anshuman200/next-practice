import Image from 'next/image';
import React from 'react';

interface ImagesProps {
    src: string;
    alt: string;
    height?: number; // Optional with default value
    width?: number;  // Optional with default value
}

const Images = ({
    src,
    alt,
    height = 300, // Default height
    width = 200,  // Default width
}: ImagesProps) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            // sizes='100vw'
            style={{ width: '100%', height: 'auto', borderRadius:'1rem' }}
        />
    );
};

export default Images;
