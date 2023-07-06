import React from 'react';
import CardDestination from '../components/CardDestination';
import '../style/Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out the TOP destinations!</h1>
        <div className="cards-container">
            <div className="cards-wrapper"></div>
            <ul className="cards-items">
                <CardDestination 
                    src='../assets/imgs/image-canyon.jpg'
                    text="Discover the untamed beautify of Arizona's canyons"
                    label='Adventure'
                    path='/services'
                    alt="A breathtaking sunset illuminating a canyon from above"
                />
                <CardDestination 
                    src='../assets/imgs/image-lake.jpg'
                    text="Experience tranquility by the crystal-clear lakes of Montana"
                    label='Relax'
                    path='/services'
                    alt="A picturesque lake nestled amidst the breathtaking mountains"
                />
            </ul>
            <ul className="cards-items">
                <CardDestination 
                    src='../assets/imgs/image-hills.jpg'
                    text="Uncover hidden gems of the unbridled California forests"
                    label='Relax'
                    path='/services'
                    alt="A rocky mountain gracefully overlooking the vast expanse of the ocean"
                />
                <CardDestination 
                    src='../assets/imgs/image-sea.jpg'
                    text="Embark on a journey amidst rugged landscapes of Alaska"
                    label='Adventure'
                    path='/services'
                    alt="A calm ocean beneath mountains adorned with drifting clouds"
                />
                 <CardDestination 
                    src='../assets/imgs/image-snow.jpg'
                    text="Scale the snowy summits of Colorado's majestic mountains"
                    label='Adventure'
                    path='/services'
                    alt="A glistening lake nestled beneath the snow-capped pinnacle of a rugged mountain"
                />
            </ul>
        </div>
    </div>
  )
};

export default Cards;
