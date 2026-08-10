import newcapitalimg from "../assets/imgs/neighborhoods/newcapital.png";
import northcoastimg from "../assets/imgs/neighborhoods/northcoast.png";
import newalameinimg from "../assets/imgs/neighborhoods/newalamein.png";
import newmansouraimg from "../assets/imgs/neighborhoods/newmansoura.png";
import building1 from "../assets/imgs/residential/building1.png";
import building2 from "../assets/imgs/residential/building2.png";
import building3 from "../assets/imgs/residential/building3.png";
import building4 from "../assets/imgs/residential/building4.png";
import logo from "../assets/imgs/agentlogos/logo.png";

export const breadcrumbItems = [
  { label: "Byota", href: "#" },
  { label: "Resale Properties", href: "#" },
  { label: "Properties In New Cairo", href: "#" },
  { label: "Unit Name" },
];

export const tabs = [
  {
    label: "Unit Details",
    icon: "fa-solid fa-circle-info",
    href: "#details",
  },
  { label: "Description", icon: "fa-solid fa-bars", href: "#description" },
  { label: "Facilities", icon: "fa-regular fa-star", href: "#facilities" },
  { label: "Location", icon: "fa-solid fa-location-dot", href: "#location" },
  {
    label: "Available Units",
    icon: "fa-solid fa-house",
    href: "#available-units",
  },
];

export const facilities = [
  { name: "Covered Parking", icon: "fa-solid fa-square-parking" },
  { name: "Private Garden", icon: "fa-solid fa-tree" },
  { name: "Balcony", icon: "fa-solid fa-door-open" },
  { name: "Security", icon: "fa-solid fa-shield-halved" },
  { name: "Barbecue Area", icon: "fa-solid fa-fire-burner" },
  { name: "Swimming Pool", icon: "fa-solid fa-person-swimming" },
  { name: "Kids Play Area", icon: "fa-solid fa-child-reaching" },
];

export const neighborhoods = [
  {
    id: 1,
    image: newcapitalimg,
    name: "New Capital",
    units: 145,
  },
  {
    id: 2,
    image: northcoastimg,
    name: "North Coast",
    units: 145,
  },
  {
    id: 3,
    image: newalameinimg,
    name: "New Alamein",
    units: 220,
  },
  {
    id: 4,
    image: newmansouraimg,
    name: "New Mansoura",
    units: 80,
  },
];

export const properties = [
  {
    id: 1,
    image: building1,
    category: "Residential",
    type: "Apartment",
    price: "3,150,000",
    currency: "EGP",
    title: "Unit Name Exclusive Mandate | Exceptional Fully Upgraded..",
    bedrooms: 3,
    bathrooms: 3,
    area: 120,
    location: "Cairo, Mostakbal City - Future..",
  },

  {
    id: 2,
    image: building2,
    category: "Residential",
    type: "Apartment",
    price: "3,150,000",
    currency: "EGP",
    title: "Unit Name Exclusive Mandate | Exceptional Fully Upgraded..",
    bedrooms: 3,
    bathrooms: 3,
    area: 120,
    location: "Cairo, Mostakbal City - Future..",
  },

  {
    id: 3,
    image: building3,
    category: "Residential",
    type: "Apartment",
    price: "3,150,000",
    currency: "EGP",
    title: "Unit Name Exclusive Mandate | Exceptional Fully Upgraded..",
    bedrooms: 3,
    bathrooms: 3,
    area: 120,
    location: "Cairo, Mostakbal City - Future..",
  },

  {
    id: 4,
    image: building4,
    category: "Residential",
    type: "Apartment",
    price: "3,150,000",
    currency: "EGP",
    title: "Unit Name Exclusive Mandate | Exceptional Fully Upgraded..",
    bedrooms: 3,
    bathrooms: 3,
    area: 120,
    location: "Cairo, Mostakbal City - Future..",
  },
];

export const projects = [
  {
    id: 1,
    image: building2,
    location: "Cairo, Mostakbal City",
    title: "Unit Name Exclusive Mandate | Fully Exceptional Fully ..",
    price: "3,150,000",
    developerLogo: logo,
  },
  {
    id: 2,
    image: building1,
    location: "Cairo, Mostakbal City",
    title: "Unit Name Exclusive Mandate | Fully Exceptional Fully ..",
    price: "3,150,000",
    developerLogo: logo,
  },
  {
    id: 3,
    image: building4,
    location: "Cairo, Mostakbal City",
    title: "Unit Name Exclusive Mandate | Fully Exceptional Fully ..",
    price: "3,150,000",
    developerLogo: logo,
  },
  {
    id: 4,
    image: building3,
    location: "Cairo, Mostakbal City",
    title: "Unit Name Exclusive Mandate | Fully Exceptional Fully ..",
    price: "3,150,000",
    developerLogo: logo,
  },
];

export const property = {
  latitude: 30.037870196468372,
  longitude: 31.42376432515174,

  location: "Cairo, Mostakbal City - Future.. Mostakbal City - Future..",
};
