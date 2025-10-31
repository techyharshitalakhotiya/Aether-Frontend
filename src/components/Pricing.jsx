import {plans} from "../assets/assets.js";
import {useAuth, useClerk} from "@clerk/clerk-react";
import {placeOrder} from "../service/OrderService.js";
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";


const Pricing = () => {
    const {isSignedIn, getToken} = useAuth();
    const {openSignIn} = useClerk();
    const {loadUserCredits, backendUrl} = useContext(AppContext);

    const handleOrder = (planId) => {
        if (!isSignedIn) {
            return openSignIn();
        }

        placeOrder({
            planId,
            getToken,
            onSuccess: () => {
                loadUserCredits();
            },
            backendUrl
        });
    }

    return (
        <div className="py-10 md:px-20 lg:px-20">
            <div className="container mx-auto px-4">
                {/* Section title*/}
                <div className="mb-12 text-center">
                    {/* --- CHANGED --- Applied theme variable */}
                    <h2 
                        className="text-3xl md:text-4xl font-bold mb-12 text-center"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        Choose your perfect package for use
                    </h2>
                    {/* --- CHANGED --- Applied theme variable */}
                    <p 
                        className="mx-auto mt-4 max-w-2xl"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Select from our carefully curated photography packages designed to meet your specific needs and budget.
                    </p>
                </div>


                {/* Section body*/}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => (
                        // --- CHANGED --- Applied theme variable for bg and border
                        <div 
                            key={plan.id} 
                            // Removed hard-coded bg and border colors
                            className={`relative pt-6 p-6 ${plan.popular ? 'backdrop-blur-lg rounded-2xl' : 'rounded-xl'} hover:transform hover:-translate-y-2 transition-all duration-300`}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                // Use accent border for popular plan, default border for others
                                border: `1px solid ${plan.popular ? 'var(--accent-primary)' : 'var(--border-color)'}`
                            }}
                        >
                            {plan.popular && (
                                // --- CHANGED --- Applied theme variable
                                <div 
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-sm font-semibold"
                                    style={{
                                        backgroundColor: 'var(--accent-primary)',
                                        color: 'var(--bg-primary)' // Use dark text on bright green
                                    }}
                                >
                                    Our Most Popular
                                </div>
                            )}
                            <div className="text-center p-6">
                                {/* --- CHANGED --- Applied theme variable */}
                                <h3 
                                    className="text-2xl font-bold"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {plan.name}
                                </h3>
                                <div className="mt-4 text-center">
                                    {/* --- CHANGED --- Applied theme variable */}
                                    <span 
                                        className="text-4xl font-bold"
                                        style={{ color: 'var(--accent-primary)' }}
                                    >
                                        &#8377;{plan.price}
                                    </span>
                                </div>
                            </div>
                            <div className="px-4 pb-8">
                                <ul className="mb-8 space-y-4">
                                    {/* --- CHANGED --- Applied theme variable */}
                                    <li 
                                        className="flex items-center"
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {plan.credits}
                                    </li>
                                    {/* --- CHANGED --- Applied theme variable */}
                                    <li 
                                        className="flext-items-center" // Typo from original file: flext-items-center
                                        style={{ color: 'var(--text-secondary)' }}
                                    >
                                        {plan.description}
                                    </li>
                                </ul>
                                {/* --- CHANGED --- Applied theme variable, button styles, and hover */}
                                <button 
                                    // Removed gradient classes
                                    className="w-full py-3 px-6 text-center font-semibold rounded-full
                                    transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                                    style={{
                                        backgroundColor: 'var(--accent-primary)',
                                        color: 'var(--bg-primary)', // Dark text on green button
                                    }}
                                    // Add hover effect with JS
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                                    onClick={() => handleOrder(plan.id)}
                                >
                                    Choose your plan
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing;

