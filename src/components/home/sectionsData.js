import SearchIcon from "../../assets/icons/searchicon.svg";
import BriefCase from "../../assets/icons/briefcase.svg";
import OurTeam from "../../assets/icons/ourteam.svg";

import Oman from "../../assets/images/locations/oman.webp";
import Dubai from "../../assets/images/locations/dubai.webp";
import Kuwait from "../../assets/images/locations/kuwait.webp";
import Saudi from "../../assets/images/locations/saudi.webp";
import Behrain from "../../assets/images/locations/bahrain.webp";
import Quatar from "../../assets/images/locations/qatar.webp";

export const highlightCards = [
  {
    id: "search",
    title: "Our Search Methods",
    description:
      "Our methods of handling the search for a candidate are tailored to specific circumstances. Keeping in mind the considerations like industry-specific skills and the location of such talent, we shortlist the candidates. The geographic scope of the search is agreed upon with our client, based on their work values.",
    icon: SearchIcon,
  },
  {
    id: "process",
    title: "Our Work Process",
    description:
      "We proactively tap the market for excellent candidates. Once the candidates have been identified, we conduct in-depth interviews with each individual, and obtain detailed information (on topics such as educational background, experience, job history, career goals, personality traits, compensation etc).",
    icon: BriefCase,
  },
  {
    id: "team",
    title: "Our Team",
    description:
      "We are equipped with powerful integrated recruitment technologies and have a team of seasoned expert recruiters. We have all the latest facilities in the area of communication, frequent transport etc, leading to expedition of the entire process.",
    icon: OurTeam,
  },
];

export const locations = [
  { id: "dubai", label: "Jobs in Dubai", image: Dubai },
  { id: "saudi", label: "Jobs in Saudi", image: Saudi },
  { id: "oman", label: "Jobs in Oman", image: Oman },
  { id: "qatar", label: "Jobs in Qatar", image: Quatar },
  { id: "kuwait", label: "Jobs in Kuwait", image: Kuwait },
  { id: "bahrain", label: "Jobs in Bahrain", image: Behrain },
];

export const industryCategories = [
  {
    id: "oilgas",
    title: "Oil & Gas",
    openings: "100+",
    icon: "fa-solid fa-oil-well",
  },
  {
    id: "construction",
    title: "Constructions",
    openings: "19",
    icon: "flaticon-project-management",
  },
  {
    id: "fmcg",
    title: "FMCG",
    openings: "4",
    icon: "fa-solid fa-shop",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    openings: "50+",
    icon: "flaticon-customer-support",
  },
  { id: "it", title: "IT", openings: "10+", icon: "flaticon-bars" },
  {
    id: "catering",
    title: "Catering",
    openings: "67+",
    icon: "fa-solid fa-utensils",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    openings: "21",
    icon: "fa-solid fa-suitcase-medical",
  },
  {
    id: "engineering",
    title: "Engineering",
    openings: "92+",
    icon: "fas fa-tools",
  },
  {
    id: "logistics",
    title: "Logistics",
    openings: "70+",
    icon: "fa-solid fa-truck-fast",
  },
  {
    id: "pharma",
    title: "Pharma",
    openings: "32",
    icon: "fa-solid fa-prescription-bottle-medical",
  },
];

export const serviceCards = [
  {
    id: "consultancy",
    title: "Recruitment Consultancy Services",
    description:
      "We provide entire gamut of recruitment consultancy services to clients across different industry verticals.",
    image: "images/home-6/blog/latest/bg3.jpg",
  },
  {
    id: "counselling",
    title: "Overseas Job Counselling",
    description:
      "We provide free counselling to candidates as regards job opportunities in Gulf, recruitment process.",
    image: "images/home-6/blog/latest/bg4.jpg",
  },
  {
    id: "immigration",
    title: "Immigration and Clearance Services",
    description:
      "We take care of Visa & all other procedures required for successful immigration of candidates.",
    image: "images/home-6/blog/latest/bg5.jpg",
  },
];

