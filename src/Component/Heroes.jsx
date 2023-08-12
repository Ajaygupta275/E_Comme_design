import React from 'react'
import amazon from '../image/amazon.png';
import flipkart from '../image/flipkart.png';
import hero from '../image/hero-image.png';

const Heroes=()=>{
    return(
        <main className='hero container'>
          <div  className='hero-content'>
             <h1>Your Feet Deserve Best</h1>
             <p> YOUR  FEET DESERVE THE BEST AND WE' RE HERE TO HELP WITH OUR
             SHOES.YOURS FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
             SHOES.
             </p>
             <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
             </div>
             <div className='brand-icons'>
                <img src={amazon} alt='amazon logo'/>
                <img src={flipkart} alt='Flipkart logo'/>
             </div>
          </div>
          <div className='hero-image'>
            <img src={hero} alt='shoesimage'/>
          </div>
        </main>
    )
}
export default Heroes