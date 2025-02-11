import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  const gotoTop = ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
   <div>
  {/* FOOTER START */}
  <footer className="footer-light ftr-light-with-bg site-bg-cover" style={{backgroundImage: 'url(images/ftr-bg.jpg)'}}>
    <div className="container">
      {/* FOOTER BLOCKES START */}  
      <div className="footer-top">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="widget widget_about">
              <div className="logo-footer clearfix">
                <NavLink to='/'><img src="images/ange_gulf_logo.png" width='110px' alt="" /></NavLink>
              </div>
              <p>The Easiest Way to get your new Job in Gulf.</p>
              <ul className="ftr-list">
                <li><p><span>Address :</span>716, Master Mind 5, Near Lake View III Apt, Royal Palms, Aarey Colony, Goregaon East, Mumbai - 65 </p></li>
                <li><p><span>Email :</span><a href='mailto:info@angelgulfjobs.com'>info@angelgulfjobs.com</a></p></li>
                <li><p><span>Phone :</span><a href='tel:+91-22 40115750'>+91-22 40115750</a></p></li>
              </ul>
            </div>                            
          </div> 
          <div className="col-lg-9 col-md-12">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget widget_services ftr-list-center">
                  <h3 className="widget-title">Useful Links</h3>
                  <ul>
                    <li><NavLink to='/' onClick={gotoTop}>Home</NavLink></li>
                    <li><NavLink to='/industries' onClick={gotoTop}>Industries</NavLink></li>
                    <li><NavLink to='/articles' onClick={gotoTop}>Articles of Interest</NavLink></li>
                    <li><NavLink to='/site-map' onClick={gotoTop}>Site Map</NavLink></li>
                    <li><NavLink >Blog</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget widget_services ftr-list-center">
                  <h3 className="widget-title">Quick Links</h3>
                  <ul>
                    <li><NavLink to='/about-us' onClick={gotoTop}>About us</NavLink></li>
                    <li><NavLink>Current Openings</NavLink></li>
                    <li><NavLink>Post Your Resume</NavLink></li>
                    <li><NavLink>Careers</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget widget_services ftr-list-center">
                  <h3 className="widget-title">Helpful Links</h3>
                  <ul>
                    <li><NavLink to='/contact-us' onClick={gotoTop}>Contact us</NavLink></li>
                    <li><NavLink to="/recruitment-procedure" onClick={gotoTop}>Recruitment Procedure</NavLink></li>
                    <li><NavLink to='/terms-of-use' onClick={gotoTop}>Terms of use</NavLink></li>
                    <li><NavLink to='/latest-gulf-news' onClick={gotoTop}>Latest Gulf News</NavLink></li>
                    <li><NavLink to='/press-release' onClick={gotoTop}>Press Release</NavLink></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">  
                <div className="widget widget_services ftr-list-center">
                  <h3 className="widget-title">Our Services</h3>
                  <ul>
                    <li><NavLink to='/visa' onClick={gotoTop}>Visa Services</NavLink></li>
                    <li><NavLink to='/authentication' onClick={gotoTop}>Authentication</NavLink></li>
                    <li><NavLink to="/gamca-medical-centre" onClick={gotoTop}>Medical Centres</NavLink></li>
                    <li><NavLink to='/skill-test-centres' onClick={gotoTop}>Skill Test Centers</NavLink></li>
                    <li><NavLink to='/foreign-exchange' onClick={gotoTop}>Foreign Exchange</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>  
          </div> 
        </div>
      </div>
      {/* FOOTER COPYRIGHT */}
      <div className="footer-bottom">
        <div className="footer-bottom-info">
          <div className="footer-copy-right">
            <span className="copyrights-text">Copyright © 2023 Angel Gulf Jobs. All rights reserved - Gulf Job Consultants, Gulf Visa Consultants, Gulf Recruitment Agency.</span>
          </div>
          <ul className="social-icons">
            <li><NavLink to="https://www.facebook.com/angelgulfjobs/" className="fab fa-facebook-f"  target='_blank'/></li>
            <li><NavLink to="https://x.com/angelgulfjobs" className="fab fa-twitter" target='_blank'/></li>
            <li><NavLink to="https://www.instagram.com/angelgulfjobs/" className="fab fa-instagram" target='_blank'/></li>
            <li><NavLink to="https://www.youtube.com/channel/UC2ywUMh9xqwpimGEQ-UMgcQ?view_as=subscriber" className="fab fa-youtube" target='_blank' /></li>
           <li><NavLink to="https://www.linkedin.com/company/angel-gulf-jobs-for-you" className="fab fa-linkedin" target='_blank'></NavLink></li> 
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/* FOOTER END */}
  {/* BUTTON TOP START */}
  <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate" /></button>
  {/*Model Popup Section Start*/}
  {/*Signup popup */}
  <div className="modal fade twm-sign-up" id="sign_up_popup" aria-hidden="true" aria-labelledby="sign_up_popupLabel" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h2 className="modal-title" id="sign_up_popupLabel">Sign Up</h2>
            <p>Sign Up and get access to all the features of Jobzilla</p>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="twm-tabs-style-2">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {/*Signup Candidate*/}  
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#sign-candidate" type="button"><i className="fas fa-user-tie" />Candidate</button>
                </li>
                {/*Signup Employer*/}
                <li className="nav-item" role="presentation">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#sign-Employer" type="button"><i className="fas fa-building" />Employer</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                {/*Signup Candidate Content*/}  
                <div className="tab-pane fade show active" id="sign-candidate">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="username" type="text" required className="form-control" placeholder="Usearname*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="email" type="text" className="form-control" required placeholder="Password*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="phone" type="text" className="form-control" required placeholder="Email*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="phone" type="text" className="form-control" required placeholder="Phone*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <div className=" form-check">
                          <input type="checkbox" className="form-check-input" id="agree1" />
                          <label className="form-check-label" htmlFor="agree1">I agree to the <NavLink href="">Terms and conditions</NavLink></label>
                          <p>Already registered?
                            <button className="twm-backto-login" data-bs-target="#sign_up_popup2" data-bs-toggle="modal" data-bs-dismiss="modal">Log in here</button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="site-button">Sign Up</button>
                    </div>
                  </div>
                </div>
                {/*Signup Employer Content*/} 
                <div className="tab-pane fade" id="sign-Employer">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="username" type="text" required className="form-control" placeholder="Usearname*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="email" type="text" className="form-control" required placeholder="Password*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="phone" type="text" className="form-control" required placeholder="Email*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="phone" type="text" className="form-control" required placeholder="Phone*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <div className=" form-check">
                          <input type="checkbox" className="form-check-input" id="agree2" />
                          <label className="form-check-label" htmlFor="agree2">I agree to the <NavLink to="">Terms and conditions</NavLink></label>
                          <p>Already registered?
                            <button className="twm-backto-login" data-bs-target="#sign_up_popup2" data-bs-toggle="modal" data-bs-dismiss="modal">Log in here</button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="site-button">Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div className="modal-footer">
            <span className="modal-f-title">Login or Sign up with</span>
            <ul className="twm-modal-social">
              <li><NavLink to="https://www.facebook.com/angelgulfjobs/" className="facebook-clr"><i className="fab fa-facebook-f" /></NavLink></li>
              <li><NavLink to="jhttps://x.com/angelgulfjobs" className="twitter-clr"><i className="fab fa-twitter" /></NavLink></li>
              <li><NavLink to="https://www.instagram.com/angelgulfjobs/" className="linkedin-clr"><i className="fab fa-linkedin-in" /></NavLink></li>
              <li><NavLink to="https://www.youtube.com/channel/UC2ywUMh9xqwpimGEQ-UMgcQ?view_as=subscriber" className="google-clr"><i className="fab fa-google" /></NavLink></li>
              <li><NavLink to="https://www.linkedin.com/company/angel-gulf-jobs-for-you" className="fab fa-linkedin" target='_blank'></NavLink></li> 

            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/*Login popup */}
  <div className="modal fade twm-sign-up" id="sign_up_popup2" aria-hidden="true" aria-labelledby="sign_up_popupLabel2" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <form>
          <div className="modal-header">
            <h2 className="modal-title" id="sign_up_popupLabel2">Login</h2>
            <p>Login and get access to all the features of Jobzilla</p>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="twm-tabs-style-2">
              <ul className="nav nav-tabs" id="myTab2" role="tablist">
                {/*Login Candidate*/}  
                <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#login-candidate" type="button"><i className="fas fa-user-tie" />Candidate</button>
                </li>
                {/*Login Employer*/}
                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#login-Employer" type="button"><i className="fas fa-building" />Employer</button>
                </li>
              </ul>
              <div className="tab-content" id="myTab2Content">
                {/*Login Candidate Content*/}  
                <div className="tab-pane fade show active" id="login-candidate">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="username" type="text" required className="form-control" placeholder="Usearname*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="email" type="text" className="form-control" required placeholder="Password*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <div className=" form-check">
                          <input type="checkbox" className="form-check-input" id="Password3" />
                          <label className="form-check-label rem-forgot" htmlFor="Password3">Remember me <NavLink href="">Forgot Password</NavLink></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="site-button">Log in</button>
                      <div className="mt-3 mb-3">Don't have an account ? 
                        <button className="twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Login Employer Content*/} 
                <div className="tab-pane fade" id="login-Employer">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="username" type="text" required className="form-control" placeholder="Usearname*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <input name="email" type="text" className="form-control" required placeholder="Password*" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-3">
                        <div className=" form-check">
                          <input type="checkbox" className="form-check-input" id="Password4" />
                          <label className="form-check-label rem-forgot" htmlFor="Password4">Remember me <NavLink to="">Forgot Password</NavLink></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="site-button">Log in</button>
                      <div className="mt-3 mb-3">Don't have an account ? 
                        <button className="twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div className="modal-footer">
            <span className="modal-f-title">Login or Sign up with</span>
            <ul className="twm-modal-social">
              <li><NavLink to="https://www.facebook.com/angelgulfjobs/" className="facebook-clr" target='_blank'rel="noreferrer"><i className="fab fa-facebook-f" /></NavLink></li>
              <li><NavLink to="https://x.com/angelgulfjobs" className="twitter-clr" target='_blank'rel="noreferrer"><i className="fab fa-twitter" /></NavLink></li>
              <li><NavLink to="https://www.instagram.com/angelgulfjobs/" className="linkedin-clr" target='_blank'rel="noreferrer"><i className="fab fa-linkedin-in" /></NavLink></li>
              <li><NavLink to="https://www.youtube.com/channel/UC2ywUMh9xqwpimGEQ-UMgcQ?view_as=subscriber" className="google-clr" target='_blank'rel="noreferrer"><i className="fab fa-google" /></NavLink></li>
              <li><NavLink to="https://www.linkedin.com/company/angel-gulf-jobs-for-you" className="fab fa-linkedin" target='_blank'></NavLink></li> 

        
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/*Model Popup Section End*/}
</div>

  )
}

export default Footer
