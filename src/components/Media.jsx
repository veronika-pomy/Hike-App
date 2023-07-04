import React from 'react';
import Button from './Button';

const Media = () => {
  return (
    <div className='video-container'>
        <video src='./assets/videos/video-1.mp4'autoPlay loop muted />
        <h1>ADVENTURE CALLS</h1>
        <p>Embrace the Journey</p>
        <div className="video-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
        </div>
    </div>
  )
}

export default Media;
