import {testimonials} from "../assets/assets.js";

const Testimonials = () => {
    return (
        <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
            {/* Title section */}
            {/* --- CHANGED --- Applied theme variable */}
            <h2 
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
                style={{ color: 'var(--text-primary)' }}
            >
                They love us. You will too.
            </h2>

            {/* Body section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    // --- CHANGED --- Applied theme variable for bg, border, and removed shadow
                    <div 
                        key={testimonial.id} 
                        className="flex flex-col max-w-md mx-auto md:mx-0 justify-between rounded-xl transition-shadow"
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
                            {/* --- CHANGED --- Applied theme variable */}
                            <svg
                                width="24"
                                height="18"
                                viewBox="0 0 24 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                // Replaced text-gray-A400 dark:text-gray-600 fill-current
                                className="fill-current" 
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                <path
                                    d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                                    fill="current"
                                ></path>
                            </svg>
                            {/* --- CHANGED --- Applied theme variable */}
                            <p 
                                className="m-0" 
                                style={{hyphens: "auto", color: 'var(--text-secondary)'}}
                            >
                                {testimonial.quote}
                            </p>
                        </div>
                        {/* --- CHANGED --- Applied theme variable */}
                        <div 
                            className="flex space-x-2 px-6 pt-6 pb-5 rounded-b-xl"
                            style={{ backgroundColor: 'var(--bg-primary)' }}
                        >
                            <div className="flex flex-col justify-center">
                                {/* --- CHANGED --- Applied theme variable */}
                                <p 
                                    className="font-semibold m-0"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {testimonial.author}
                                </p>
                                {/* --- CHANGED --- Applied theme variable */}
                                <p 
                                    className="text-sm m-0 mt-1"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    {testimonial.handle}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;

