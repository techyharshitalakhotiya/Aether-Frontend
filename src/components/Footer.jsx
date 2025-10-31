import {assets, FOOTER_CONSTANTS} from "../assets/assets.js";

const Footer = () => {
    return (
        // --- CHANGED --- Applied theme variables (bg, border)
        <footer 
            className="flex item-center justify-between gap-4 px-4 lg:px-44 py-3"
            style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                borderTop: '1px solid var(--border-color)' 
            }}
        >
            <img src={assets.logo} alt="logo" width={32}/>
            
            {/* --- CHANGED --- Applied theme variables (border, text) */}
            <p 
                className="flex-1 border-l max-sm:hidden pl-4" // Added pl-4 for spacing
                style={{ 
                    borderColor: 'var(--border-color)', 
                    color: 'var(--text-secondary)' 
                }}
            >
                &copy; {new Date().getFullYear()} @techyharshitalakhotiya| All rights reserved.
            </p>
            
            <div className="flex gap-3">
                {FOOTER_CONSTANTS.map((item, index) => (
                    <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
                        <img src={item.logo} alt="logo" width={32}/>
                    </a>
                ))}
            </div>
            
            {/* --- CHANGED --- Applied theme variable */}
            {/* This <p> tag was empty, I've left it as is but applied the theme color */}
            <p 
                className="text-center font-medium"
                style={{ color: 'var(--text-secondary)' }}
            ></p>
        </footer>
    )
}

export default Footer;

