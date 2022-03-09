import React from 'react';
import animation from '../images/MichaelsLogo.mp4';

const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <video
                src={animation}
                type='video/mp4'
                loop
                controls={false}
                muted
                autoPlay
                className='h-24 w-24'
            >
            </video>
        </div>
    )
}

export default Loading