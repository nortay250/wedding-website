import React, { useState, useEffect } from 'react';
import Story1 from '../assets/images/story-1.jpg';
import Story2 from '../assets/images/story-2.jpg';
import Story3 from '../assets/images/story-3.jpg';
import Story4 from '../assets/images/story-4.jpg';
function Story() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 769;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>
          </div>
        </div>
        <div className='container timeline pos-re p-0'>
          <div className='row'>
            <div
              className={`col-md-6 ${
                isMobile ? 'text-center' : 'text-md-right'
              }`}
            >
              <img className='img-fluid mr-md-3' src={Story1} alt='' />
            </div>
            <div className='col-md-6 text-center text-md-left'>
              <div className='h-100 d-flex flex-column justify-content-center p-4 ml-md-3 bg-text'>
                <h4 className='mb-2'>First Meet</h4>
                <p className='text-uppercase mb-2'>2016</p>
                <p className='m-0'>
                  Met at Trackers, a 3-mth Christian programme, where we were
                  placed in the same group. We would then go on to also be in
                  the same university hall as well as the same hall orientation
                  group.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 text-center text-md-left'>
              <div className='h-100 d-flex flex-column justify-content-center p-4 mr-md-3 bg-text'>
                <h4 className='mb-2'>First Date</h4>
                <p className='text-uppercase mb-2'>2019</p>
                <p className='m-0'>
                  Went to the Bicentennial Experience at Fort Canning Park and
                  ate Stuff'd for the first time. Unfortunately we didn't take a
                  photo so here's our next photo together - running a marathon
                  in Dec 2019!
                </p>
              </div>
            </div>
            <div
              className={`col-md-6 ${
                isMobile ? 'text-center' : 'text-md-left'
              }`}
            >
              <img className='img-fluid ml-md-3 ' src={Story2} alt='' />
            </div>
          </div>
          <div className='row'>
            <div
              className={`col-md-6 ${
                isMobile ? 'text-center' : 'text-md-right'
              }`}
            >
              <img className='img-fluid mr-md-3' src={Story3} alt='' />
            </div>
            <div className='col-md-6 text-center text-md-left'>
              <div className='h-100 d-flex flex-column justify-content-center p-4 ml-md-3 bg-text'>
                <h4 className='mb-2'>Proposal</h4>
                <p className='text-uppercase mb-2'>2022</p>
                <p className='m-0'>
                  Glendon surprises Eleanor with a 10-point powerpoint on why
                  she should marry him. (But the true proposal was already done
                  in 2021 when we got our BTO)
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 text-center text-md-left'>
              <div className='h-100 d-flex flex-column justify-content-center p-4 mr-md-3 bg-text'>
                <h4 className='mb-2'>Wedding</h4>
                <p className='text-uppercase mb-2'>2023</p>
                <p className='m-0'>
                  Our wedding day! The day we officially become a family and we
                  want you there!
                </p>
              </div>
            </div>
            <div
              className={`col-md-6 ${
                isMobile ? 'text-center' : 'text-md-left'
              }`}
            >
              <img className='img-fluid ml-md-3 ' src={Story4} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
