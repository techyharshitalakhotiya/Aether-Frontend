import {createContext, useState} from "react";
import {useAuth, useClerk, useUser} from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ( props ) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [credit, setCredit] = useState(null); // Changed from false to null
    const {getToken} = useAuth();
    const [image, setImage] = useState(null); // Changed from false to null
    const [resultImage, setResultImage] = useState(null); // Changed from false to null
    const {isSignedIn} = useUser();
    const {openSignIn} = useClerk();
    const navigate = useNavigate();

    const loadUserCredits = async () => {
        try {
            const token = await getToken();
            const response = await axios.get(backendUrl+"/users/credits", {headers: {Authorization: `Bearer ${token}`}});
            if (response.data.success) {
                setCredit(response.data.data.credits);
            } else {
                toast.error("Error loading credits.");
            }
        }catch (error) {
            toast.error("Error loading credits.");
        }
    }

    const removeBg = async (selectedImage) => {
        try {
            if (!isSignedIn) {
                return openSignIn();
            }

            setImage(selectedImage);
            setResultImage(null); // Changed from false to null
            //navigate to the result image
            navigate("/result");

            const token = await getToken();
            const formData = new FormData();
            selectedImage && formData.append("file", selectedImage);

            const {data: base64Image} = await axios.post(backendUrl+"/images/remove-background", formData, {
                headers: {Authorization: `Bearer ${token}`},
                timeout: 60000 // Added 60 second timeout for image processing
            });
            
            if (base64Image) {
                setResultImage(`data:image/png;base64,${base64Image}`); // Removed space after comma
                setCredit(credit - 1);
            } else {
                toast.error("No image data received.");
                setResultImage(null);
            }
        }catch (error) {
            console.error("Remove BG Error:", error);
            setResultImage(null); // Set to null on error
            
            // Better error messages
            if (error.code === 'ECONNABORTED') {
                toast.error("Request timeout. Please try again.");
            } else if (error.response?.status === 413) {
                toast.error("Image file is too large. Please upload a smaller image (max 10MB).");
            } else if (error.response) {
                toast.error(error.response.data?.message || "Server error while removing background.");
            } else if (error.request) {
                toast.error("Cannot connect to server. Please check if backend is running.");
            } else {
                toast.error("Error while removing background image.");
            }
        }
    }



    const contextValue = {
        credit, setCredit,
        image, setImage,
        resultImage, setResultImage,
        backendUrl,
        loadUserCredits,
        removeBg
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;