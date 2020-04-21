import dotenv from  'dotenv'
import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter,CardGroup, col, Container, Form, input, inputGroup, inputGroupAddon, inputGroupText, Row,option,select } from 'reactstrap';
import { Link } from 'react-router-dom';
// import image from './img/logo.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import axios from 'axios';
import JwtDecode from 'jwt-decode';

class LoginP extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      nom:"",
      prenom:"",
      address:"",
      genre:"",
      date_naissance:"",
      email:"",
      tel:"",
      password:""
    };

    dotenv.config()

  }

  validate = () => {

    let isError = false;

    const errors = {

      passwordERR:'' ,
      emailERR:'',


    };

    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // const  regpassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    if ((this.state.email==="")||!regEmail.test(this.state.email))  {

      isError = true;
      errors.emailERR = "Email must be a valid address, e.g myname@mydomaine.com";
  }

  //   if ((this.state.password==="")||!regpassword.test(this.state.password)) {

  //     isError = true;
  //     errors.passwordERR = "Password should contain at least 8 characters,where at least one number, one lower case and one upper case characters";
  // }

    if (isError) {
        this.setState({
            ...this.state,
            ...errors
        })
    }

    console.log("errrr ", isError);

    this.setState({
        erreur:isError
    });

    return isError;
};

  handleChange = (e) => {

    if (e.target.name === 'email') {
      this.setState({ email: e.target.value });
    }

    if (e.target.name === 'password') {
      this.setState({ password: e.target.value });
    }
  };

  login = () => {
    let erre=this.validate();
    if(!erre){
    // if (this.state.email === '' || this.state.password === '') {
    //  ToastsStore.error('Enter password and email');
    // }
    //  else {
      axios
        .post('http://127.0.0.1:8813/patient/login', {
          email: this.state.email,
          Password: this.state.password,
        })
        .then(success => {
          console.log(success)
          if (success.data.error === '') {
            localStorage.setItem('token', success.data.data.data);
            var payload = JwtDecode(success.data.data.data);
            if (payload.role) {
              if (payload.role === 'PATIENT') {
                this.props.history.push('RegisterP');
              }
            } else {
              localStorage.removeItem('token');
            }
          } else {
            ToastsStore.error(success.data.error);
          }
        })
        .catch(error => {
          console.log(error)
        ToastsStore.error(error.data.error);
        });

  }
  };
  




  render() { 
    return (  


      <div>
             <ToastsContainer store={ToastsStore} />

             <header class="header" id="header">
        <div>
          <div class="header_top">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="header_top_content d-flex flex-row align-items-center justify-content-start">
                    <div class="logo">
                    {/* <img  src={image} alt=""/> */}
                    </div>
                    <div class="header_top_extra d-flex flex-row align-items-center justify-content-start ml-auto">
                

<div className="p-3 d-flex bout">
<Link to="loginpatient">
               <button type="button" class="btn btn-danger patient">
             <span>Patient</span>
               </button></Link>

               <Link to="loginmedecin">
               <button type="button" class="btn btn-danger med">
                 <span>Medecin</span>
               </button></Link>

               <Link to="loginsecretaire">
               <button type="button" class="btn btn-danger secreatire">
               <span>Secretaire</span>
               </button></Link>

              </div>
                    </div>
                    <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header_nav" id="header_nav_pin">
            <div class="header_nav_inner">
              <div class="header_nav_container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="header_nav_content d-flex flex-row align-items-center justify-content-start">
                        <nav class="main_nav">
                          <ul class="d-flex flex-row align-items-center justify-content-start">
                            <li><a href="index.html">Accueil</a></li>
                            <li><a href="about.html">A Propos</a></li>
                            <li><a href="services.html">Services</a></li>
                            {/* <li><a href="news.html">News</a></li> */}
                            <Link to="contact" class="wht"><li>Contact</li></Link>
                          </ul>
                        </nav>
                        <div class="search_content d-flex flex-row align-items-center justify-content-end ml-auto">
                          <form action="#" id="search_container_form" class="search_container_form">
                            <input type="text" class="search_container_input" placeholder="Search" required="required"/>
                            <button class="search_container_button"><i class="fa fa-search" aria-hidden="true"></i></button>
                          </form>
                        </div>

                        
   

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="menu trans_500"></div>
      <div class="homee"></div>



 



        {/* Sing in  Form */}
        <section className="sign-in">
          <div className="containere">
            <div className="signin-content">
              <div className="signin-image">
                <figure><img src="images/signin-image.jpg" alt="sing up image" /></figure>
                <a href="#" className="signup-image-link">Create an account</a>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Sign up</h2>
                <form method="" className="register-form" id="login-form">

                  <div className="form-group">
                    <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                    <input  defaultValue={this.state.email}
                      onChange={evenement=>this.setState({email:evenement.target.value})}
                     type="email" name="your_name" id="your_name" placeholder="email" />
                  </div>
                  
              {
 
              this.state.erreur===false ?

             <p >{this.state.emailERR}</p>:null

              }
               {

                this.state.erreur===true ?

                  <p style ={{color:"red", fontSize:'13px'}}>{this.state.emailERR}</p>:null

                 }

                  <div className="form-group">
                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                    <input  defaultValue={this.state.password}
                      onChange={evenement=>this.setState({password:evenement.target.value})}
                     type="password" name="your_pass" id="your_pass" placeholder="Password" />
                  </div>




                  {/* <div className="form-group">
                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                    <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
                  </div> */}

                  <div className="form-group form-button">
                    <input onClick={this.login} type="submit" name="signin" id="signin" className="form-submit" value="Login" defaultValue="Log in" />
                  </div> 


               

                  <Link to="registerP" className="fr">
                  <span className="d-flex align-item-center justify-content-center p-2 notreg "> Not registered ?</span>

                  </Link>
 


                </form>
              
              </div>
            </div>
          </div>
        </section>





            
<footer className="footer">
  <div className="parallax_background parallax-window k" data-parallax="scroll" data-speed="0.8" />
  <div className="footer_content">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 footer_col">
          <div className="footer_about">
            <div className="logo">
              <a href="#">Medium<span /></a>
            </div>
            <div className="footer_about_text">Lorem ipsum dolor sit amet, lorem maximus consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</div>
            <div className="footer_social">
              <ul className="d-flex flex-row align-items-center justify-content-start">
                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <div className="copyright">
              Copyright © All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true" /> by
              <a href="https://colorlib.com" target="_blank">Rawia Agili</a>
            </div>
          </div>
        </div>
        <div className="col-lg-5 footer_col">
          <div className="footer_contact">
            <div className="footer_contact_title">Quick Contact</div>
            <div className="footer_contact_form_container">
              <form action="#" className="footer_contact_form" id="footer_contact_form">
                <div className="d-flex flex-xl-row flex-column align-items-center justify-content-between">
                  <input type="text" className="footer_contact_input" placeholder="Name" required="required" />
                  <input type="email" className="footer_contact_input" placeholder="E-mail" required="required" />
                </div>
                <textarea className="footer_contact_input footer_contact_textarea" placeholder="Message" required="required" defaultValue={""} />
                <button className="footer_contact_button">send message</button>
              </form>
            </div>
          </div>
        </div>
      
        <div className="col-lg-4 footer_col">
          <div className="footer_hours">
            <div className="footer_hours_title">Opening Hours</div>
            <ul className="hours_list">
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Monday – Thursday</div>
                <div className="ml-auto">8.00 – 19.00</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Friday</div>
                <div className="ml-auto">8.00 - 18.30</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Saturday</div>
                <div className="ml-auto">9.30 – 17.00</div>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <div>Sunday</div>
                <div className="ml-auto">9.30 – 15.00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer_bar">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="footer_bar_content d-flex flex-sm-row flex-column align-items-lg-center align-items-start justify-content-start">
            <nav className="footer_nav">
              <ul className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
            <div className="footer_links">
              <ul className="d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                <li><a href="#">Help Desk</a></li>
                <li><a href="#">Emergency Services</a></li>
                <li><a href="#">Appointment</a></li>
              </ul>
            </div>
            <div className="footer_phone ml-lg-auto">
              <i className="fa fa-phone" aria-hidden="true" />
              <span>+34 586 778 8892</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>


      </div>
    );
  }
}
 
export default LoginP;