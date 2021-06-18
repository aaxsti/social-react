import React from 'react';
import AppInfoPic from "../../assets/images/app-info-pic.jpg";

const InfoPage = () => {
    return (
        <div>
            <img alt='App info'
            src={AppInfoPic}
                 style={{width: '100%'}}/>
            <p style={{textAlign: 'center'}}>
                Разработанное приложение использует данные Social Network API.
            </p>
        </div>
    );
}

export default InfoPage;