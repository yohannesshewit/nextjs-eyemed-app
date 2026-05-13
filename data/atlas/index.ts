import { AdnexaImages } from "./adnexa";
import { ConjunctivaImages } from "./conjuctiva";
import { CorneaImages } from "./cornea";
import { LensImages } from "./lens";
import { OpticNerveImages } from "./optic nerve";
import { RetinaImages } from "./retina";
import { StrabismusImages } from "./strabismus";
import { UveaImages } from "./uvea";
import { VitreousImages } from "./vitreous";

export const atlasImages = [
  ...ConjunctivaImages,
  ...CorneaImages,
  ...UveaImages,
  ...LensImages,
  ...VitreousImages,
  ...RetinaImages,
  ...OpticNerveImages,
  ...StrabismusImages,
  ...AdnexaImages,
];

{
  /* spread operator example =unpacking arrays into a new array
const a = [1, 2];
const b = [3, 4];

const c = [...a, ...b];

Result:[1, 2, 3, 4] 
*/
}
