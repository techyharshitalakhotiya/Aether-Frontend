import {useState} from "react";
import {assets, categories} from "../assets/assets.js";

const BgSlider = () => {

    const [sliderPosition, setSliderPosition] = useState(50);
    const [activeCategory, setActiveCategory] = useState("People");

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    }

    return (
        <div className="mb-16 relative">
            {/* Section title */}
            {/* --- CHANGED --- Applied theme variable */}
            <h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
                style={{ color: 'var(--text-primary)' }}
            >
                Stunning quality.
            </h2>

            {/* Category selector */}
            <div className="flex justify-center mb-10 flex-wrap">
                
                {/* --- CHANGED --- Applied theme variable */}
                <div 
                    className="inline-flex gap-4 p-2 rounded-full flex-wrap justify-center"
                    style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                >
                    {categories.map((category) => (
                        <button key={category}
                            // --- CHANGED --- Removed all color/bg classes, added transition
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-200`}
                            // --- CHANGED --- Applied theme variables conditionally
                            style={
                                activeCategory === category ? 
                                { backgroundColor: 'var(--accent-primary)', color: 'var(--bg-primary)' } : // Active style
                                { backgroundColor: 'transparent', color: 'var(--text-secondary)' } // Inactive style
                            }
                            onClick={() => setActiveCategory(category)}
                            // --- CHANGED --- Added JS-based hover for inactive buttons
                            onMouseOver={(e) => {
                                if (activeCategory !== category) {
                                    e.currentTarget.style.backgroundColor = 'var(--border-color)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (activeCategory !== category) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* image comparision slider */}
            {/* --- CHANGED --- Removed shadow, added border */}
            <div 
                className="relative w-full max-w-4xl overflow-hidden m-auto rounded-xl"
                style={{ border: '1px solid var(--border-color)' }}
            >
                <img src={assets.people_org}
                     alt="original image"
                     style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }} />

                <img src={assets.people}
                     alt="removed background image"
                     style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                     className="absolute top-0 left-0 w-full h-full" />

                <input type="range"
                       className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
                       min={0}
                       max={100}
                       onChange={handleSliderChange}
                       value={sliderPosition}
                />
            </div>
        </div>
    )
}

export default BgSlider;

