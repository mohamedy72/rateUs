import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import ThankYou from "./components/ThankYou/ThankYou";

const rates = [1, 2, 3, 4, 5];

function App() {
  const [stars, setStars] = useState(rates.length);
  const [selectedRate, setSelectedRate] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isActive]);

  const handleRating = (e) => {
    setSelectedRate(e.target.textContent);
    setIsSelected(true);
  };
  const handleSubmit = () => {
    if (selectedRate) {
      setIsActive(true);
    }
  };
  return (
    <div className="app">
      <Rating
        selectedRate={selectedRate}
        isSelected={isSelected}
        handleRating={handleRating}
        rates={rates}
        handleSubmit={handleSubmit}
        className={null}
      />
      <ThankYou
        stars={stars}
        selectedRate={selectedRate}
        className={`${isActive ? "activeCard" : "nextCard"}`}
      />
    </div>
  );
}

export default App;
