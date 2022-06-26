import React from 'react'
import './Footer.css'
import{AiFillFacebook,AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="footer">
      <div className="name">
      <img className="icon2" src={require("../ins.png")} alt="img" />
      <div className="text">
      <p className='text-muted'> <b>Inshorts Pte. Ltd.</b></p>
      <span>
      <p className='text-muted'>  ©COPYRIGHT 2022</p>
      </span>
      </div>                         
      </div>
      <div className="name-2">
      <h3>Contact us</h3>
          <div className='text-2'>
          <p className='text-muted'> <b>Terms & conditions </b></p>
      <span>
      <p className='text-muted'>  Privacy Policies</p>
      </span>
          </div>
          <div className="social">
              <div className="facebook">
              <a href= "https://www.facebook.com/inshortsapp/"><AiFillFacebook /></a>
              </div>
              <div className="twitter">
              <a href= "https://twitter.com/inshorts?lang=en"><AiOutlineTwitter /></a>
              </div>
              <div className="linkedin">
              <a href= "https://www.linkedin.com/company/inshorts-group/?originalSubdomain=in"><AiFillLinkedin /></a>
              </div>
          </div>
      </div>
     
      
    </div>
  )
}

export default Footer
