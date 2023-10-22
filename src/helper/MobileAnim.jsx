import React from "react";
import Lottie from "lottie-react";
import mobilranim from "../images/mobile.json"


const MobileAnim = () => {
    if (!mobilranim) {
        return <p>Error loading animation.</p>;
    }
    return (
        <Lottie animationData={mobilranim} />
    )
}

export default MobileAnim