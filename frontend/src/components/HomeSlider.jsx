import { Link } from "react-router-dom";
import { useState } from "react";
import beratung from '../assets/beratung.jpeg';
import bildung from '../assets/bildung.jpeg';
import betreuung from '../assets/gesundheit.jpeg';
import finance from '../assets/finance.jpeg';
import technologie from '../assets/technologie.jpeg';
import reparatur from '../assets/reparatur.jpeg';
import transport from '../assets/transport.jpeg';
import reinigung from '../assets/reinigung.jpeg';
import bau from '../assets/bau.jpeg';
import freizeit from '../assets/freizeit.jpeg';
import essen from '../assets/essen und trinken.jpeg';
import sport from '../assets/sport.jpeg';
const categories = [
  { name: "Beratung", image: beratung, link: "/categorie/Beratung" },
  { name: "Bildung und Schulung", image: bildung, link: "/categorie/Bildung und Schulung" },
  { name: "Betreuung und Gesundheit", image: betreuung, link: "/categorie/Betreuung und Gesundheit" },
  { name: "Finanzen und Versicherungen", image: finance, link: "/categorie/Finanzen und Versicherungen" },
  { name: "Technologie und IT", image: technologie, link: "/categorie/Technologie und IT" },
  { name: "Reparatur und Wartung", image: reparatur, link: "/categorie/Reparatur und Wartung" },
  { name: "Transport und Logistik", image: transport, link: "/categorie/Transport und Logistik" },
  { name: "Reinigung und Pflege", image: reinigung, link: "/categorie/Reinigung und Pflege" },
  { name: "Bau- und Renovierungsdienste", image: bau, link: "/categorie/Bau- und Renovierungsdienste" },
  { name: "Freizeit und Unterhaltung", image: freizeit, link: "/categorie/Freizeit und Unterhaltung" },
  { name: "Essen und Trinken", image: essen, link: "/categorie/Essen und Trinken" },
  { name: "Sport und Lifestyle", image: sport, link: "/categorie/Sport und Lifestyle" },
];
export function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < categories.length ? prevIndex + itemsPerPage : 0
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage >= 0 ? prevIndex - itemsPerPage : categories.length - itemsPerPage
    );
  };
  const visibleCategories = categories.slice(currentIndex, currentIndex + itemsPerPage);
  return (
    <div className="slider-container relative w-full mb-10">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-teal-600 text-white rounded-full shadow-md hover:bg-teal-500 transition"
      >
        &lt;
      </button>
      <div className="flex gap-4 justify-center items-center overflow-hidden">
        {visibleCategories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="flex flex-col items-center gap-2 bg-teal-600 bg-opacity-40 text-white p-4 rounded-lg shadow-lg hover:bg-teal-500 transition-all duration-300 hover:scale-105"
          >
            <span className="text-lg font-semibold">{category.name}</span>
            <img
              src={category.image}
              alt={category.name}
              className="rounded-lg h-48 w-96 object-cover"
            />
          </Link>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-teal-600 text-white rounded-full shadow-md hover:bg-teal-500 transition"
      >
        &gt;
      </button>
    </div>
  );
}