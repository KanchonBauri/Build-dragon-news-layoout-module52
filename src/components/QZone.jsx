import React from 'react';
import qzoon_swimming from '../assets/swimming.png'
import qzoon_class from '../assets/class.png'
import qzoon_playground from '../assets/playground.png'
import qzoon_bg from '../assets/bg.png'

const QZone = () => {
    return (
        <div>
              <h2 className='font-semibold mt-5  '>Q-Zone</h2>
              <div>
                <img src={qzoon_swimming} alt="" />
                <img src={qzoon_class} alt="" />
                <img src={qzoon_playground} alt="" />
                <img src={qzoon_bg} alt="" />
              </div>
        </div>
    );
};

export default QZone;