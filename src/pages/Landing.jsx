import React from 'react';
import mountains from '../assets/imgs/mountain.png';

import { AbsoluteCenter } from '@chakra-ui/react';

const Landing = () => {
  return (
    <div className="landing-page">
    <AbsoluteCenter axis='both'>
        <img 
            alt='Three mountains with snow on the top of the mountain in the center'
            src={mountains}
            style={{filter:`invert(33%) sepia(18%) saturate(1779%) hue-rotate(82deg) brightness(96%) contrast(89%)`}}
        />
      </ AbsoluteCenter>
    </div>
  )
}

export default Landing;
