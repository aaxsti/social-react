import React from "react";
import preloader from "../../../assets/images/preloader.svg";

const Preloader  = () => {
    return <div style={{backgroundColor: '#f0f2f5', position: "absolute"}}>
        <img src={preloader} alt="Preloader picture"/>
    </div>
}

export default Preloader;