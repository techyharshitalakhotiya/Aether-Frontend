import {assets} from "../assets/assets.js";
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";

const Header = () => {
    const {removeBg} = useContext(AppContext);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/*Left side: video banner */}
            <div className="order-2 md:order-1 flex justify-center">

                {/* --- Applied the theme's border color to the video frame. --- */}
                <div
                    className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden"
                    style={{border: `1px solid var(--border-color)`}}
                >
                    <video src={assets.video_banner} autoPlay loop muted
                           className="w-full max-w-[400px] h-auto object-cover"/>
                </div>

            </div>

            {/*Right side: Text content*/}
            <div className="order-1 md:order-2">

                {/* --- Applied the primary text color variable. --- */}
                <h1
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                    style={{color: 'var(--text-primary)'}}
                >
                    The fastest <span
                    className=""
                    /* --- THIS IS THE FIX ---
                     * Removed 'text-indigo-700' and applied the accent color variable
                     * to match your new "futuristic green" theme.
                     */
                    style={{color: 'var(--accent-primary)'}}
                >background eraser.</span>
                </h1>

                {/* --- Applied the secondary text color variable. --- */}
                <p
                    className="mb-8 text-lg leading-relaxed"
                    style={{color: 'var(--text-secondary)'}}
                >
                    Transform your photos with our background remover app! Highlight your
                    subject and create a transparent background, so you can place it in a
                    variety of new designs and destinations. Try it now and immerse your
                    subject in a completely different environment!
                </p>

                <div>
                    <input type="file" accept="image/*" id="upload1" hidden
                           onChange={(e) => removeBg(e.target.files[0])}/>

                    {/* --- Applied the accent and background variables --- */}
                    <label
                        htmlFor="upload1"
                        className="font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hover:scale-105 text-lg cursor-pointer"
                        style={{
                            backgroundColor: 'var(--accent-primary)',
                            color: 'var(--bg-primary)' // This flips the text color for perfect contrast
                        }}
                        // Added hover styles that also use the theme variables
                        onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                    >
                        Upload the image
                    </label>
                </div>

            </div>


        </div>
    )
}

export default Header;

