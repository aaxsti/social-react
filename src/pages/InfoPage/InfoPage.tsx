import React from 'react';
import AppInfoPic from "../../assets/images/app-info-pic.jpg";

const InfoPage = () => {
    return (
        <div>
            <img alt='App info'
            src={AppInfoPic}
                 style={{width: '100%'}}/>
            <h3 style={{textAlign: 'center', paddingTop: 40}}>
                Разработанное приложение использует данные Social Network API
            </h3>
        </div>
    );
}

export default InfoPage;