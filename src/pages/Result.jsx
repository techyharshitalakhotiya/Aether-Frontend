import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";

const Result = () => {
    const {image, resultImage} = useContext(AppContext);
    const navigate = useNavigate();

    // Helper style for the main download button
    const downloadButtonStyle = {
        backgroundColor: 'var(--accent-primary)',
        color: 'var(--bg-primary)'
    };

    // Helper style for the outline button
    const outlineButtonStyle = {
        color: 'var(--accent-primary)',
        borderColor: 'var(--accent-primary)',
        borderWidth: '1px'
    };

    return (
        <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
            <div
                className="rounded-lg px-8 py-6 border"
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)'
                }}
            >
                {/* image container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left side */}
                    <div className="flex flex-col">
                        <p className="font-semibold mb-2" style={{color: 'var(--text-secondary)'}}>Original</p>
                        <img src={image ? URL.createObjectURL(image) : ""} alt="Original"
                             className="rounded-md w-full object-cover"/>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col">
                        <p className="font-semibold mb-2" style={{color: 'var(--text-secondary)'}}>
                            Background Removed
                        </p>
                        <div
                            className="rounded-md border h-full bg-layer relative overflow-hidden"
                            style={{borderColor: 'var(--border-color)'}}
                        >
                            <img src={resultImage ? resultImage : ""} alt="Background removed"
                                 className="w-full object-cover"/>
                            {!resultImage && image && (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className="border-4 rounded-full h-12 w-12 border-t-transparent animate-spin"
                                        style={{
                                            borderColor: 'var(--accent-primary)',
                                            borderTopColor: 'transparent'
                                        }}
                                    >
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/*Buttons*/}
                {resultImage && (
                    <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
                        <button
                            className="font-semibold py-2 px-4 rounded-full text-lg hover:scale-105 transition-all duration-300"
                            style={outlineButtonStyle}
                            onClick={() => navigate("/")}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
                                e.currentTarget.style.color = 'var(--bg-primary)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'var(--accent-primary)';
                            }}
                        >
                            Try another image
                        </button>
                        <a
                            href={resultImage}
                            download
                            className="cursor-pointer py-3 px-6 text-center text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                            style={downloadButtonStyle}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                        >
                            Download your image
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Result;

