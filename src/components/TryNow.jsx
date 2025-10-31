import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";

const TryNow = () => {
    const {removeBg} = useContext(AppContext);
    return (
        // --- CHANGED --- Applied theme variable
        <div 
            className="flex flex-col items-center justify-center px-4 py-16" // Added py-16 for spacing
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >

            {/* --- CHANGED --- Applied theme variable */}
            <h2 
                className="text-3xl md:text-4xl font-bold mb-7 text-center"
                style={{ color: 'var(--text-primary)' }}
            >
                Remove Image Background.
            </h2>
            {/* --- CHANGED --- Applied theme variable */}
            <p 
                className="mb-8 text-center"
                style={{ color: 'var(--text-secondary)' }}
            >
                Get a transparent background for any image.
            </p>
            {/* --- CHANGED --- Applied theme variable, removed shadow, added border */}
            <div 
                className="rounded-2xl p-10 flex flex-col items-center space-y-4"
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)'
                }}
            >
                <input type="file" id="upload2" hidden accept="image/*" onChange={(e) => removeBg(e.target.files[0]) } />
                {/* --- CHANGED --- Applied theme variables and hover effect */}
                <label 
                    htmlFor="upload2"
                    // Removed bg/text/hover classes
                    className="font-semibold py-3 px-6 rounded-full text-lg cursor-pointer transition-all duration-300"
                    style={{
                        backgroundColor: 'var(--accent-primary)',
                        color: 'var(--bg-primary)' // Dark text on green button
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                >
                    Upload Image
                </label>
                {/* --- CHANGED --- Applied theme variables */}
                <p 
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    or drop a file, paste image or <a 
                        href="#" 
                        className="underline"
                        style={{ color: 'var(--accent-primary)' }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-hover)'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                    >
                        URL
                    </a>
                </p>
            </div>
        </div>
    )
}

export default TryNow;

