'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './gallery.module.css';

interface GalleryProps {
  images: { src: string; title: string }[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [index, setIndex] = useState(-1);

  return (
    <div className={styles.grid}>
      {images.map((img, i) => (
        <div
          key={i}
          className={styles.imageWrapper}
          onClick={() => setIndex(i)}
        >
          <Image
            src={img.src}
            alt={img.title}
            fill
            sizes='(max-width: 768px) 100vw, 33vw'
            className={styles.image}
          />
          <div className={styles.overlay}>
            <span className={styles.title}>{img.title}</span>
          </div>
        </div>
      ))}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </div>
  );
};

export default Gallery;
