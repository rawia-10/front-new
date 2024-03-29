import React, { Component } from 'react';

import { ToastsContainer, ToastsStore } from 'react-toasts';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import axios from 'axios';
import { DateTime } from 'react-datetime-bootstrap';
class Forms extends Component {
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
        this.props.history.push("/home/listepatient");
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
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Ajout Patient</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">nom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.nom}
                      onChange={evenement=>this.setState({nom:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">prenom</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.prenom}
                      onChange={evenement=>this.setState({prenom:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.address}
                      onChange={evenement=>this.setState({address:evenement.target.value})}
                       type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>




                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.email}
                      onChange={evenement=>this.setState({email:evenement.target.value})}
                       type="email" id="email-input" name="email-input"  autoComplete="email"/>

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.password}
                      onChange={evenement=>this.setState({password:evenement.target.value})}
                      type="password" id="password-input" name="password-input" autoComplete="new-password" />

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">date naissance </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.date_naissance}
                      onChange={evenement=>this.setState({date_naissance:evenement.target.value})}
                       type="date" id="date-input" name="date-input"  />
                    </Col>
                  </FormGroup>
                {/* <FormGroup row>
                  <Col md="3">
                  <Label htmlFor="date-input">heure</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="time"> </Input>
                  </Col>
                </FormGroup>
                 */}

              <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="tel-input">telephone</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.tel}
                      onChange={evenement=>this.setState({tel:evenement.target.value})}
                      type="number" id="tel" name="tel" autoComplete="tel" />

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label>Genre</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input   defaultValue={this.state.genre}
                      onChange={evenement=>this.setState({genre:evenement.target.value})}
                        className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="Femme" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Femme</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input defaultValue={this.state.genre}
                      onChange={evenement=>this.setState({genre:evenement.target.value})}
                         className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="Homme" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Homme</Label>
                      </FormGroup>

                    </Col>
                  </FormGroup>

</Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.handleSubmit} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Envoyer</Button>
                <Button  onClick={this.reset} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Annuler</Button>
              </CardFooter>
            </Card>

          </Col>

        </Row>

      </div>
    );
  }
}

export default Forms;
