// DEMONSTRATION DATA ONLY — not real stock. Replace with verified inventory
// supplied by the dealership. Prices are intentionally not set.
import { photos } from "./photos";

export type Category = "Cars" | "SUVs" | "Pickup Trucks" | "Work Vehicles";

export type Vehicle = {
  slug: string;
  title: string;
  make: string;
  model: string;
  category: Category;
  images: { src: string; alt: string }[];
  mileage: string;
  condition: string;
  price: string;
  drivetrain: string;
  engine: string;
  transmission: string;
  features: string[];
  summary: string;
};

const PLACEHOLDER = "Demo — not set";

export const vehicles: Vehicle[] = [
  {
    slug: "demo-crew-cab-pickup",
    title: "Demo Crew Cab Pickup",
    make: "Demo Make A",
    model: "Crew Cab",
    category: "Pickup Trucks",
    images: [photos.hero, photos.truck, photos.interior],
    mileage: PLACEHOLDER,
    condition: PLACEHOLDER,
    price: PLACEHOLDER,
    drivetrain: "Example: 4x4",
    engine: "Example: V8",
    transmission: "Example: Automatic",
    features: ["Example: towing package", "Example: bed liner", "Example: backup camera"],
    summary: "Sample listing showing how a pickup truck will appear once real inventory is added.",
  },
  {
    slug: "demo-heavy-duty-truck",
    title: "Demo Heavy Duty Truck",
    make: "Demo Make A",
    model: "Heavy Duty",
    category: "Pickup Trucks",
    images: [photos.truck, photos.hero, photos.interior],
    mileage: PLACEHOLDER,
    condition: PLACEHOLDER,
    price: PLACEHOLDER,
    drivetrain: "Example: 4x4",
    engine: "Example: Diesel",
    transmission: "Example: Automatic",
    features: ["Example: gooseneck prep", "Example: trailer brake controller"],
    summary: "Sample heavy-duty truck listing for layout demonstration.",
  },
  {
    slug: "demo-full-size-suv",
    title: "Demo Full-Size SUV",
    make: "Demo Make B",
    model: "Full-Size",
    category: "SUVs",
    images: [photos.suv, photos.interior],
    mileage: PLACEHOLDER,
    condition: PLACEHOLDER,
    price: PLACEHOLDER,
    drivetrain: "Example: AWD",
    engine: "Example: V6",
    transmission: "Example: Automatic",
    features: ["Example: third-row seating", "Example: leather interior", "Example: navigation"],
    summary: "Sample SUV listing for layout demonstration.",
  },
  {
    slug: "demo-sedan",
    title: "Demo Executive Sedan",
    make: "Demo Make C",
    model: "Sedan",
    category: "Cars",
    images: [photos.sedan, photos.interior],
    mileage: PLACEHOLDER,
    condition: PLACEHOLDER,
    price: PLACEHOLDER,
    drivetrain: "Example: RWD",
    engine: "Example: Turbo I4",
    transmission: "Example: Automatic",
    features: ["Example: heated seats", "Example: adaptive cruise"],
    summary: "Sample car listing for layout demonstration.",
  },
  {
    slug: "demo-cargo-van",
    title: "Demo Cargo Van",
    make: "Demo Make A",
    model: "Cargo Van",
    category: "Work Vehicles",
    images: [photos.work, photos.interior],
    mileage: PLACEHOLDER,
    condition: PLACEHOLDER,
    price: PLACEHOLDER,
    drivetrain: "Example: RWD",
    engine: "Example: V6",
    transmission: "Example: Automatic",
    features: ["Example: shelving", "Example: partition"],
    summary: "Sample work vehicle listing for layout demonstration.",
  },
];

export const categories: Category[] = ["Cars", "SUVs", "Pickup Trucks", "Work Vehicles"];
export const makes = Array.from(new Set(vehicles.map((v) => v.make)));

export function filterVehicles(list: Vehicle[], q: string, category: string, make: string) {
  const term = q.trim().toLowerCase();
  return list.filter(
    (v) =>
      (!category || v.category === category) &&
      (!make || v.make === make) &&
      (!term || `${v.title} ${v.make} ${v.model} ${v.category}`.toLowerCase().includes(term)),
  );
}
