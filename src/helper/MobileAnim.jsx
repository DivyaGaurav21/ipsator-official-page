import React from "react";
import Lottie from "lottie-react";
import mobilranim from "../images/mobile.json";

const MobileAnim = () => {
    if (!mobilranim) {
        return <p>Error loading animation.</p>;
    }

    return (
        <div className="w-[85%] h-auto">
            <Lottie
                animationData={mobilranim}
                style={{ maxWidth: "100%", height: "auto" }}
            />
        </div>
    );
};

export default MobileAnim;
