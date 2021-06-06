import React from "react";
import preloader from "../../../assets/images/preloader.svg";
import styled from "styled-components";

export const PreloaderWrapper = styled.div`
  position: absolute;
  margin: 0 auto;
`

const Preloader  = () => {
    return <PreloaderWrapper>
        <img src={preloader} alt="Preloader picture"/>
    </PreloaderWrapper>
}

export default Preloader;