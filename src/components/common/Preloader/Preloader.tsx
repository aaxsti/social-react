import React from "react";
import preloader from "../../../assets/images/preloader.svg";

let Preloader  = () => {
    return <div style={{backgroundColor: '#e7f0ff', position: "absolute"}}>
        <img src={preloader} alt="Preloader picture"/>
    </div>
}

export default Preloader;