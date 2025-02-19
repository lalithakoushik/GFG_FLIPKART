import { useState, useEffect } from "react";

const slideshowImages = [
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f454b1f18e9ea9d3.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/766ea612e03ff01d.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/ba7f29f7ecb4c88b.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/f8dae5ce006b7d54.jpg?q=20",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slideshowImages.length) % slideshowImages.length
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 1000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative">
      <div className="w-full overflow-hidden">
        <img
          src={slideshowImages[currentIndex]}
          alt="Slideshow"
          className="w-full h-60 object-cover transition-all duration-500"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100"
      >
        &#62;
      </button>
    </div>
  );
};

export default Slideshow;
