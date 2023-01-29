import React from 'react';

function Organization() {
  return (
    <div id='organization' className='organization section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Wedding</span>
            <h2 className='oliven-title'>When & Where</h2>
          </div>
        </div>
        <div
          className='row bord-box bg-img'
          data-background='images/organisation.jpg'
        >
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>CHURCH CEREMONY</h6>
            <p>10am at Barker Road Methodist Church</p>
            <p>48 Barker Rd, Singapore 309917</p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>LUNCH BUFFET</h6>
            <p>Lunch reception would be provided after the church wedding.</p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>PRE DINNER</h6>
            <p>
              Pre-dinner drinks would start at 6.30pm at Marriot Tang Hotel.
            </p>
            <p>320 Orchard Rd, Singapore 238865</p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>WEDDING DINNER</h6>
            <p>Dinner would start at 7pm at Marriot Tang Hotel.</p>
            <p>320 Orchard Rd, Singapore 238865</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
