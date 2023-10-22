import React from "react";
import Lottie from "lottie-react";
import parrot from "../images/hero.json"


const HeroAnim = () => {
    if (!parrot) {
        return <p>Error loading animation.</p>;
    }
    return (
        <Lottie animationData={parrot} />
    )
}

export default HeroAnim