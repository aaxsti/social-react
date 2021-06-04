import React from "react";
import preloader from "../../../assets/images/preloader.svg";

const Preloader  = () => {
    return <div style={{position: 'absolute', margin: '0 auto'}}>
        <img src={preloader} alt="Preloader picture"/>
    </div>
}

export default Preloader;