import {steps} from "../assets/assets.js";

const BgRemovalSteps = () => {
    return (
        <div className="text-center mb-16">

            {/* --- CHANGED --- Applied theme variable */}
            <h2 
                className="text-3xl md:text-4xl font-bold mb-12"
                style={{ color: 'var(--text-primary)' }}
            >
                How to remove a background in seconds?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {steps.map((item, index) => (
                    // --- CHANGED --- Applied theme variables (bg, border)
                    <div 
                        key={index} 
                        className="p-8 rounded-2xl"
                        style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                    >

                        {/* --- CHANGED --- Applied theme variables (bg, text) */}
                        <span 
                            className="inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4"
                            style={{ backgroundColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                        >
                            {item.step}
                        </span>
                        
                        {/* --- CHANGED --- Applied theme variable */}
                        <h3 
                            className="text-xl font-bold mb-4"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {item.title}
                        </h3>
                        
                        {/* --- CHANGED --- Applied theme variable */}
                        <p 
                            className="text-base leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            {item.description}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default BgRemovalSteps;

