import React, { Component } from 'react';
import { Button, Card,FormGroup, CardBody, CardFooter, Label,Col,radio, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import image from './img/logo.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
class RegisterM extends Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
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
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }


  handleSubmit = () => {
    

    let token = localStorage.getItem("token");
    if (!token) {
        token = "";
    }
    axios.post("http://127.0.0.1:8813/medecin/register", {
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
        this.props.history.push('loginmedecin');
      }
    }).catch(err => {
      ToastsStore.error("Server error")
    })

}


  // reset()
  // {
  //     this.setState({nom:"",prenom:"",email:"",address:"",genre:"",date_naissance:"",password:"",tel:""})
  // }



onchange= (event) => {
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
   
      
      <div >
        

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
              <Link to="">
               <button type="button" class="btn btn-danger patient">

               <span>Patient</span>
               </button></Link>
               <Link to="loginmedecin">
               <button type="button" class="btn btn-danger med">Medecin
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
                    <input defaultValue={this.state.password} 
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
                <Link to="loginsecretaire" className="signup-image-link">Je suis déjà membre</Link>
              </div>
            </div>
          </div>
        </section>
      


      </div>

    

    );
  }
}

export default RegisterM;
