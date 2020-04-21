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


  
  handleSubmit = () => {
    

    let token = localStorage.getItem("token");
    if (!token) {
        token = "";
    }
    axios.post("http://127.0.0.1:8813/patient/register", {
      nom:this.state.nom,
      prenom:this.state.prenom,
      genre:this.state.genre,
      address:this.state.address,
      email:this.state.email,
      password:this.state.password,
      tel:this.state.tel,
      date_naissance:this.state.date_naissance

    },

  ).then(success => {
      // if status 200 OK
      if (typeof (success.data.error) != "undefined" && success.data.error !== "") {
        ToastsStore.error(success.data.error)
      } else if (typeof (success.data.message) != "undefined" && success.data.message !== "") {
        ToastsStore.success(success.data.message)
        this.props.history.push("loginpatient");
      }
    }).catch(err => {
      ToastsStore.error("Server error")
    })

}

onchange= (event) => {
  this.setState({email: event.target.value});
  this.setState({password: event.target.value});
  this.setState({nom: event.target.value});
  this.setState({prenom: event.target.value});
  this.setState({address: event.target.value});
  this.setState({genre: event.target.value});
  this.setState({tel: event.target.value});
  this.setState({email: event.target.value});
  this.setState({date_naissance: event.target.value});
  this.setState({password: event.target.value});
}

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




 {/* Sign up form */}
 <section className="signup">
          <div className="containere">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form method="" className="register-form" id="register-form">

                  <div className="form-group">
                    <label htmlFor="nom"><i className="zmdi zmdi-account material-icons-name" /></label>
                    <input defaultValue={this.state.nom} required
                      onChange={evenement=>this.setState({nom:evenement.target.value})} type="text" name="nom" id="nom" placeholder="nom" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="prenom"><i className="zmdi zmdi-account material-icons-name" /></label>
                    <input defaultValue={this.state.prenom} required
                      onChange={evenement=>this.setState({prenom:evenement.target.value})} type="text" name="prenom" id="prenom" placeholder="prenom" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                    <input defaultValue={this.state.email} required
                      onChange={evenement=>this.setState({email:evenement.target.value})} type="email" name="email" id="email" placeholder=" Email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                    <input defaultValue={this.state.password} required
                      onChange={evenement=>this.setState({password:evenement.target.value})} type="password" name="pass" id="pass" placeholder="Password" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                    <input defaultValue={this.state.password} required
                      onChange={evenement=>this.setState({password:evenement.target.value})} type="password" name="re_pass" id="re_pass" placeholder="Confirmer password" />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                    <input defaultValue={this.state.tel} required
                      onChange={evenement=>this.setState({tel:evenement.target.value})} type="Number" name="re_pass" id="re_pass" placeholder="Telephone" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                    <input   defaultValue={this.state.address} required
                      onChange={evenement=>this.setState({address:evenement.target.value})} type="text" name="re_pass" id="re_pass" placeholder="Adresse" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                    <input defaultValue={this.state.date_naissance} required
                      onChange={evenement=>this.setState({date_naissance:evenement.target.value})} type="Date" name="re_pass" id="re_pass" placeholder="date" />
                  </div>
                

                   <div className="form-group">
  <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
      <select className="select-css" name="select" id="select" required placeholder="Genre"  defaultValue={this.state.genre}
        onChange={evenement=>this.setState({genre:evenement.target.value})}>
        <option value={"0"}> Choisir votre genre </option>
        <option value="Femme"> Femme</option>
        <option value="Homme">  Homme </option>        
      </select> 
</div>    



                  <div className="form-group">
                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term"  required/>
                    <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                  </div>

                  <div className="form-group form-button">
                    <input onClick={this.handleSubmit} type="submit" name="signup" id="signup" className="form-submit" defaultValue="Register" />
                  </div>

                </form>
              </div>
              <div className="signup-image">
                <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                <a href="#" className="signup-image-link">I am already member</a>
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