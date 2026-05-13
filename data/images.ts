export type Category =
  | "anterior segment"
  | "posterior segment"
  | "OCT"
  | "doctor";

export type GalleryItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Category;
};

export const gallery: GalleryItem[] = [
  {
    id: 1,
    title: "Posterior Segment",
    description: "Diabetic Retinopathy",
    image: "/image-atlas/DR.webp",
    category: "posterior segment",
  },

  {
    id: 2,
    title: "Anterior Segment",
    description: "Corneal Ulcer",
    image: "/image-atlas/CU.webp",
    category: "anterior segment",
  },

  {
    id: 3,
    title: "OCT Scan",
    description: "Macular Edema",
    image: "/image-atlas/ME.webp",
    category: "OCT",
  },
  {
    id: 4,
    title: "Optive Nerve",
    description: "Glaucoma - Optic Disc Cupping",
    image: "/image-atlas/GD.webp",
    category: "posterior segment",
  },
];
