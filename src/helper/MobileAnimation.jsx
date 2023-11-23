import React from "react";
import Lottie from "lottie-react";
import mobileanim from "../images/mobile.json";

const MobileAnimation = () => {
    if (!mobileanim) {
        return <p>Error loading animation.</p>;
    }

    return (
        <div className="w-[85%] h-auto">
            <Lottie
                animationData={mobileanim}
                style={{ maxWidth: "100%", height: "auto" }}
            />
        </div>
    );
};

export default MobileAnimation;
