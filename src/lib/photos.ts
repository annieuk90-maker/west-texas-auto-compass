// Single place to swap vehicle photos. To use real dealership photos,
// upload them and replace the imports below — every page updates automatically.
import hero from "@/assets/hero.jpg";
import suv from "@/assets/suv.jpg";
import sedan from "@/assets/sedan.jpg";
import truck from "@/assets/truck.jpg";
import work from "@/assets/work.jpg";
import interior from "@/assets/interior.jpg";

export const photos = {
  hero: { src: hero, alt: "Pickup truck on a West Texas highway at sunset" },
  truck: { src: truck, alt: "Pickup truck on a Texas ranch road" },
  suv: { src: suv, alt: "Full-size SUV under showroom lighting" },
  sedan: { src: sedan, alt: "Sedan on a city street at night" },
  work: { src: work, alt: "Cargo work van at an industrial yard" },
  interior: { src: interior, alt: "Leather vehicle interior" },
};

export const gallery = [
  { ...photos.hero, label: "Trucks" },
  { ...photos.suv, label: "SUVs" },
  { ...photos.sedan, label: "Sedans" },
  { ...photos.truck, label: "Heavy Duty" },
];
