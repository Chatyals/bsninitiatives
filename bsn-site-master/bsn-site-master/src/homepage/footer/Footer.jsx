import React from 'react';
import './footer.scss';
// import footer from '../../assets/footer.JPG'
const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={footer} alt="" className='bg-img'/> */}
      <div>
        <div className="col">
          <div className="line3"></div>
          <h3 className="heading2">NEWSLETTER SIGN-UP</h3>

          <form>
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Email Adress" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Organization" />
            <p className="sign">
              By signing to our newsletters you agree with our privacy policy
            </p>
            <button type="submit">SUBSCRIBE</button>
          </form>

          <div></div>
        </div>

        {/* <div className="row align-items-start">
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
