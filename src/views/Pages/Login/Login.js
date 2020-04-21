import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import image from './images/logo.png'
import image1 from "./images/info_1.jpg"
import image2 from "./images/info_2.jpg"
import image3 from "./images/info_2.jpg"
import image4 from "./images/icon_2.svg"
import image5 from "./images/icon_3.svg"
import image6 from "./images/icon_4.svg"
import image7 from "./images/icon_5.svg"
import image8 from "./images/icon_6.svg"
import image9 from "./images/dept_1.jpg"
import image10 from "./images/dept_2.jpg"
import image11 from "./images/dept_3.jpg"
import image12 from "./images/dept_4.jpg"
import image13 from "./images/latest_1.jpg"
import image14 from "./images/latest_2.jpg"
import image15 from "./images/latest_3.jpg"
import image16 from "./images/doc_5.jpg"


class Login extends Component {
  render() {
    return (
     <div>
  


      <div class="home">
      <div class="background_image bck" ></div>



      <header class="header" id="header">
        <div>
          <div class="header_top">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="header_top_content d-flex flex-row align-items-center justify-content-start">
                    <div class="logo">
                    <img  src={image} alt=""/>
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
                            <li><a href="index.html"  id="ind">Accueil</a></li>
                            <li><a href="about.html">A Propos</a></li>
                            <li><a href="services.html">Services</a></li>
                            {/* <li><a href="news.html">News</a></li> */}
                            <li><a href="#contacter">Contact</a></li>
                            {/* <Link to="contact" class="wht"><li>Contact</li></Link> */}
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
     
      <div class="home_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content">
               
<section className="home-section section-hero overlay bg-image" style={{backgroundImage: 'url("img/banner/banner.png")'}} id="home-section">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-12">
                      <div className="mb-5 textform-contro-center">
                        {/* fou9 search */}
                      </div>
                     
                      <form method="post" className="search-jobs-form">
                        <div className="row mb-5">
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <input type="text" className="form-control form-control-lg" placeholder="Nom de votre médecin " />
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <select className="form-control form-control-lg" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" placeholder="--Gouvernorat--">
                            <option>--Gouvernorat--</option>
                              <option>Tunis</option>
                              <option>Sousse</option>
                              <option>sfax</option>
                              <option>Nabeul</option>
                              <option>Kairouan</option>
                              <option>Ariana</option>
                              <option>Ben Arous</option>
                              <option>Manouba</option>
                              <option>Gafsa</option>
                              <option>Bizert</option>
                              <option>Beja</option>
                              <option>Gabes</option>
                              <option>Tozeur</option>
                              <option>Jandouba</option>
                              <option>Kasserine</option>
                              <option>Le Kef</option>
                              <option>Monastir</option>
                              <option>Sidi Bouzid</option>
                              <option>Siliana</option>
                              <option>Kébili</option>
                              <option>Mahdia</option>
                              <option>Zaghoun</option>
                              <option>Médnine</option>
                              <option>Tataouine</option>
                            </select>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <select className="form-control form-control-lg" data-style="btn-white btn-lg" data-width="100%" data-live-search="true" title="--Spécialité--">
                            <option>--Spécialité--</option>
                              <option>généraliste</option>
                              <option>chirurgie</option>
                              <option>dermatologie</option>
                              <option>gynécologie</option>
                              <option>psychiatrie</option>
                              <option>radiologie</option>
                              <option>Médecine d'urgence</option>
                            </select>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <button type="submit" href="rendez-vous.html" className="btn btn-primary btn-lg btn-block text-white btn-search"><span className="icon-search icon mr-2" />Rechercher</button>
                          </div>
                        </div>
                        <div className="row">
                          {/* ta7t search */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
       
                 </div>
            </div>
          </div>
        </div>
      </div>
   
   
    </div>
  
  
  
  
  	<div class="info">
		<div class="container">
			<div class="row row-eq-height">


				<div class="col-lg-4 info_box_col">
					<div class="info_box">
						<div class="info_image"><img  src={image1}  alt=""/></div>
						<div class="info_content">
							<div class="info_title">Vous êtes un professionnel de santé</div>
							<div> <span>  Informez vos patients durant l'épidémie
Adaptez l'organisation de vos consultations </span> </div>
						</div>
					</div>
				</div>


				<div class="col-lg-4 info_box_col">
					<div class="info_box">
						<div class="info_image"><img  src={image2}  alt=""/></div>
						<div class="info_content">
							<div class="info_title">Vous êtes une secrétaire</div>
							<div><span>prenez rendez-vous en ligne pour une consultation vidéo ou au cabinet.
Ne renoncez pas à vous soigner.</span></div>
						</div>
					</div>
				</div>


        <div class="col-lg-4 info_box_col">
					<div class="info_box">
						<div class="info_image"><img  src={image1}  alt=""/></div>
						<div class="info_content">
							<div class="info_title">Vous êtes un patient</div>
							<div><span>prenez rendez-vous en ligne pour une consultation vidéo ou au cabinet.
Ne renoncez pas à vous soigner.</span></div>
						</div>
					</div>
				</div>

{/* d */}
      </div>
		</div>
	</div>














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
              <a href="" target="_blank">Rawia Ajili</a>
            </div>
          </div>
        </div>
        <div   id="contacter" className="col-lg-5 footer_col">
          <div className="footer_contact">
            <div className="footer_contact_title">Contact</div>
            <div className="footer_contact_form_container">
           
              <form  action="#" className="footer_contact_form" id="footer_contact_form">
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
            <ul className="hours_list" >
            <li className="active"><a href="#ind">Accueil</a></li>
                <li><a href="about.html">A Propos</a></li>
                <li><a href="services.html">Services</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="footer_bar">
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
  </div> */}

</footer>


  </div>
  
    );
  }
}

export default Login;
