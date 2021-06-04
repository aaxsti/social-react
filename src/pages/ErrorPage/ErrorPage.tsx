import React from 'react';
import ErrorSadPic from '../../assets/images/sad.svg'

const ErrorPage = () => {
    return (
        <div>
            <h2>
                404 NOT FOUND
            </h2>
            <img style={{width: '40px'}}
                 src={ErrorSadPic}
                 alt='404 Error picture'
            />
        </div>
    );
}

export default ErrorPage;