import {useContext, useState} from "react";
import {assets} from "../assets/assets.js";
// --- ADDED ---
// Import Sun and Moon icons for the toggle
import {Menu, X, Sun, Moon} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {SignedIn, SignedOut, useClerk, UserButton, useUser} from "@clerk/clerk-react";
import {AppContext} from "../context/AppContext.jsx";

// --- ADDED ---
// Import the useTheme hook to get the theme state
import {useTheme} from "../context/ThemeContext.jsx";

const Menubar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {openSignIn, openSignUp} = useClerk();
    const {user} = useUser();
    const {credit} = useContext(AppContext);
    const navigate = useNavigate();

    // --- ADDED ---
    // Get the current theme and the function to toggle it
    const {theme, toggleTheme} = useTheme();

    const openRegister = () => {
        setMenuOpen(false);
        openSignUp({});
    }

    const openLogin = () => {
        setMenuOpen(false);
        openSignIn({});
    }

    return (
        // --- CHANGED ---
        // Applied theme variables to the main navbar
        <nav
            className="px-8 py-4 flex justify-between items-center"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                borderBottom: `1px solid var(--border-color)`
            }}
        >
            {/* Left side: logo + text*/}
            <Link className="flex item-center space-x-2" to="/">
                <img src={assets.logo} alt="logo" className="h-8 w-8 object-contain cursor-pointer"/>
                {/* --- THIS IS THE FIX ---
                  * Removed 'text-indigo-700'
                  * Applied the accent color variable to 'aether.'
                */}
                <span
                    className="text-2xl font-semibold cursor-pointer"
                    style={{color: 'var(--accent-primary)'}}
                >
                    aether.
                    {/* Applied theme variable to 'ai' */}
                    <span style={{color: 'var(--text-secondary)'}} className="cursor-pointer">ai</span>
                </span>
            </Link>

            {/* Right side: Action button*/}
            <div className="hidden md:flex items-center space-x-4">

                {/* --- THEME TOGGLE (Desktop) --- */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full transition-colors"
                    style={{color: 'var(--text-primary)', backgroundColor: 'var(--border-color)'}}
                    // Added hover styles that use CSS variables
                    onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--accent-hover-light)'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--border-color)'}
                >
                    {theme === 'light' ? <Moon size={20}/> : <Sun size={20}/>}
                </button>
                {/* --- END THEME TOGGLE --- */}

                <SignedOut>
                    {/* --- CHANGED --- Applied theme variable */}
                    <button
                        className="font-medium"
                        style={{color: 'var(--text-primary)'}}
                        onClick={openLogin}
                    >
                        Login
                    </button>
                    {/* --- CHANGED --- Applied theme variables (to match Header.jsx button) */}
                    <button
                        className="font-medium px-4 py-2 rounded-full transition-all"
                        style={{backgroundColor: 'var(--accent-primary)', color: 'var(--bg-primary)'}}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                        onClick={openRegister}
                    >
                        Sign up
                    </button>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* --- CHANGED --- Applied theme variables (to match Header.jsx button) */}
                        <button
                            onClick={() => navigate("/pricing")}
                            className="flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer"
                            style={{backgroundColor: 'var(--accent-primary)', color: 'var(--bg-primary)'}}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                        >
                            <img src={assets.credits} alt="credits" height={24} width={24}/>
                            {/* Removed text color class so it inherits from button */}
                            <p className="text-xs sm:text-sm font-medium">
                                Credits: {credit}
                            </p>
                        </button>
                        {/* --- CHANGED --- Applied theme variable */}
                        <p className="text-gray-600 max-sm:hidden" style={{color: 'var(--text-secondary)'}}>
                            Hi, {user?.fullName}
                        </p>
                    </div>
                    <UserButton/>
                </SignedIn>
            </div>

            {/* Mobile hamburger */}
            {/* --- CHANGED --- Applied theme variable */}
            <div className="flex md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} style={{color: 'var(--text-primary)'}}>
                    {menuOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                // --- CHANGED --- Applied theme variables
                <div
                    className="absolute top-20 right-8 shadow-md rounded-md flex flex-col space-y-4 p-4 w-48"
                    style={{backgroundColor: 'var(--bg-secondary)', border: `1px solid var(--border-color)`}}
                >

                    {/* --- THEME TOGGLE (Mobile) --- */}
                    <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3 p-2 rounded-lg font-medium"
                        style={{color: 'var(--text-primary)', backgroundColor: 'var(--border-color)'}}
                    >
                        {theme === 'light' ? <Moon size={20}/> : <Sun size={20}/>}
                        <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                    </button>
                    {/* --- END THEME TOGGLE --- */}

                    <SignedOut>
                        {/* --- CHANGED --- Applied theme variable */}
                        <button className="text-left font-medium p-2" style={{color: 'var(--text-primary)'}}
                                onClick={openLogin}>
                            Login
                        </button>
                        {/* --- CHANGED --- Applied theme variables */}
                        <button
                            className="font-medium px-4 py-2 rounded-full text-center"
                            style={{backgroundColor: 'var(--accent-primary)', color: 'var(--bg-primary)'}}
                            onClick={openRegister}
                        >
                            Sign up
                        </button>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex flex-col items-start gap-3">
                            {/* --- CHANGED --- Applied theme variables */}
                            <button
                                onClick={() => {
                                    navigate("/pricing");
                                    setMenuOpen(false);
                                }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer w-full"
                                style={{backgroundColor: 'var(--accent-primary)', color: 'var(--bg-primary)'}}
                            >
                                <img src={assets.credits} alt="credits" height={24} width={24}/>
                                <p className="text-xs sm:text-sm font-medium">
                                    Credits: {credit}
                                </p>
                            </button>
                            <div className="ml-2">
                                <UserButton afterSignOutUrl="/"/>
                            </div>
                        </div>
                    </SignedIn>
                </div>
            )}
        </nav>
    )
}

export default Menubar;

