export type AtlasCategory =
  | "conjunctiva"
  | "cornea"
  | "uvea"
  | "lens"
  | "vitreous"
  | "retina"
  | "optic nerve"
  | "ocular adnexa"
  | "strabismus";

export interface AtlasImage {
  id: number;
  image: string;
  title: string;
  description: string;
  category: AtlasCategory;
}
