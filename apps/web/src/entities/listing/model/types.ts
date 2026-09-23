import vistaTaftImage from "@/web/assets/mock-listings/837990050e96f55b0158ba7a6d5943278f8beb92.png";
import taftHavenImage from "@/web/assets/mock-listings/3020b7d7d1182f128c088bfd3736614a5cf5033f.png";
import twinRTowersImage from "@/web/assets/mock-listings/0a62dcc5ef262df0a866c686512abda4baa38731.png";
import lResidencesImage from "@/web/assets/mock-listings/ef78706ed362d856355f2b193884690fa556a56d.png";
import manilaAstralImage from "@/web/assets/mock-listings/f4466d3c-87b4-47ba-8901-f13e129b9c51.jpg";

export type MockListing = {
  id: number; 
  name: string;
  monthlyPrice: number;
  distance: number;
  walkDuration: number;
  type: "studio" | "loft type" | "1 bedroom" | "2 bedroom";
  isVerified: boolean;
  imageLink: string;
};

export const MOCKLISTINGS: MockListing[] = [
  { id: 1, name: "Vista Taft", monthlyPrice: 10000, distance: 0.2, walkDuration: 3, type: "1 bedroom", isVerified: true, imageLink: vistaTaftImage },
  { id: 2, name: "Taft Haven Studio", monthlyPrice: 8000, distance: 0.4, walkDuration: 4, type: "studio", isVerified: true, imageLink: taftHavenImage },
  { id: 3, name: "R Squared Towers Malate Manila", monthlyPrice: 15000, distance: 0.6, walkDuration: 8, type: "1 bedroom", isVerified: false, imageLink: twinRTowersImage },
  { id: 4, name: "L-Residences", monthlyPrice: 10000, distance: 0.8, walkDuration: 10, type: "studio", isVerified: true, imageLink: lResidencesImage },
  { id: 5, name: "Manila Astral Tower", monthlyPrice: 30000, distance: 2, walkDuration: 20, type: "2 bedroom", isVerified: false, imageLink: manilaAstralImage },
];