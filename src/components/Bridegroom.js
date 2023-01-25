import React from 'react';
import Bride from '../assets/images/bride.jpg';
import Groom from '../assets/images/groom.jpg';
function Bridegroom() {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Eleanor Tay <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Bride</span>
                  <p>
                    The epitome of a Netflix addict. Kdramas, sitcoms, movies -
                    I've probably watched it all. On the rare occasion I leave
                    my house, I ~attempt~ to keep fit by running and boxing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Glendon Chong <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Groom</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis convallis sit amet tortor at hendrerit. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
