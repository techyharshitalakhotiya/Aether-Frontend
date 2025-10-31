import {useAuth, useClerk} from "@clerk/clerk-react";
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {placeOrder} from "../service/OrderService.js";
import {plans} from "../assets/assets.js";

const BuyCredits = () => {
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

    // Helper style for the main purchase button
    const buttonStyle = {
        backgroundColor: 'var(--accent-primary)',
        color: 'var(--bg-primary)'
    };

    return (
        <div className="py-10 md:px-20 lg:px-20 min-h-[80vh]">
            <div className="container mx-auto px-4">
                {/* Section title*/}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"
                        style={{color: 'var(--text-primary)'}}>
                        Choose your perfect package
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl" style={{color: 'var(--text-secondary)'}}>
                        Select from our carefully curated photography packages designed to meet your specific needs and
                        budget.
                    </p>
                </div>


                {/* Section body*/}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div key={plan.id}
                             className={`relative pt-6 p-6 ${plan.popular ? 'rounded-2xl' : 'rounded-xl'} border hover:transform hover:-translate-y-2 transition-all duration-300`}
                             style={{
                                 backgroundColor: 'var(--bg-secondary)',
                                 borderColor: 'var(--border-color)'
                             }}
                        >
                            {plan.popular && (
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-sm font-semibold"
                                    style={{
                                        backgroundColor: 'var(--accent-primary)',
                                        color: 'var(--bg-primary)'
                                    }}
                                >
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center p-6">
                                <h3 className="text-2xl font-bold"
                                    style={{color: 'var(--text-primary)'}}>{plan.name}</h3>
                                <div className="mt-4 text-center">
                                    <span className="text-4xl font-bold"
                                          style={{color: 'var(--accent-primary)'}}>
                                        &#8377;{plan.price}
                                    </span>
                                </div>
                            </div>
                            <div className="px-4 pb-8">
                                <ul className="mb-8 space-y-4">
                                    <li className="flex items-center" style={{color: 'var(--text-secondary)'}}>
                                        {plan.credits}
                                    </li>
                                    <li className="flext-items-center" style={{color: 'var(--text-secondary)'}}>
                                        {plan.description}
                                    </li>
                                </ul>
                                <button
                                    className="w-full py-3 px-6 text-center font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                                    style={buttonStyle}
                                    onClick={() => handleOrder(plan.id)}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                                >
                                    Choose plan
                                </button>

                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </div>
    )
}

export default BuyCredits;

