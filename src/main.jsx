import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ClerkProvider} from "@clerk/clerk-react";
import AppContextProvider from "./context/AppContext.jsx";

// --- ADDED ---
// Import the ThemeProvider you created
import {ThemeProvider} from "./context/ThemeContext.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable key');
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            {/* --- WRAPPER ADDED ---
             * This provides the theme (light/dark) to your entire app.
             * Your AppContext provider stays inside it.
            */}
            <ThemeProvider>
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </ThemeProvider>
        </ClerkProvider>
    </BrowserRouter>
)

