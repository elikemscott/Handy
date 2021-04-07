import React from 'react'
import { MDBContainer, MDBRow, MDBCol,  } from "mdbreact";
import image1 from '../images/kiefer.jpg';
import image2 from '../images/pexels.jpg';

 function Parallax() {
    return (
        <div>
           <div id="parallax-world-of-ugg">
  
  
  
  
  
  
  
  
  
  
  
  
   <section>
      <div class="parallax-four">
        <h2>Track all financial Transactions and have more control over your money</h2>
      </div>
  </section>
    <section>
    <div class="block-info">
      <div><img src={image1} className='image1'/></div>

      <div>
        <h1>BLUE COLLAR FINANCE</h1>
        <p>get more tips on how to transact cashless. We are redefining our financial 
          management systems to make every bluecollar worker eligible for financial inclusion.
        </p>
        <a class="btn">LEARN MORE</a>
      </div>
  
    </div>

    <div className="block-info2">
      <div className='block-text'>
      <h1>BLUE COLLAR FINANCE</h1>
      <p>get more tips on how to transact cashless. We are redefining our financial 
          management systems to make every bluecollar worker eligible for financial inclusion.
        </p>
      </div>
      <div> <img src={image2} className='image2'/> </div>
    </div>
  </section>
   <section>
      <div class="parallax-five">
        <h2>Select the best financial products for your profile and moments of life</h2>
      </div>
  </section>
  
    
  </div>
  </div>
        
        
    )
}



export default Parallax;
