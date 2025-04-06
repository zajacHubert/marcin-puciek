import { StaticImageData } from 'next/image';
import img1 from '@/public/images/portfolio/other/img1.jpg';
import img2 from '@/public/images/portfolio/other/img2.jpg';
import img3 from '@/public/images/portfolio/other/img3.jpg';
import img4 from '@/public/images/portfolio/other/img4.jpg';
import img5 from '@/public/images/portfolio/other/img5.jpg';
import img6 from '@/public/images/portfolio/other/img6.jpg';
import img7 from '@/public/images/portfolio/other/img7.jpg';
import img8 from '@/public/images/portfolio/other/img8.jpg';
import img9 from '@/public/images/portfolio/other/img9.jpg';
import img10 from '@/public/images/portfolio/other/img10.jpg';
import img11 from '@/public/images/portfolio/other/img11.jpg';

export const otherImages: { id: number; img: StaticImageData; src: string }[] =
  [
    { id: 1, img: img1, src: img1.src },
    { id: 2, img: img2, src: img2.src },
    { id: 3, img: img3, src: img3.src },
    { id: 4, img: img4, src: img4.src },
    { id: 5, img: img5, src: img5.src },
    { id: 6, img: img6, src: img6.src },
    { id: 7, img: img7, src: img7.src },
    { id: 8, img: img8, src: img8.src },
    { id: 9, img: img9, src: img9.src },
    { id: 10, img: img10, src: img10.src },
    { id: 11, img: img11, src: img11.src },
  ];
