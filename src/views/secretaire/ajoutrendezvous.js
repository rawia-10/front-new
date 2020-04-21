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
      email:"",
      tel:"",
      heure:"",
      date:""

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
    axios.post("http://127.0.0.1:8813/rdv/add ", {
      nom:this.state.nom,
      prenom:this.state.prenom,
      email:this.state.email,
      heure:this.state.heure,
      tel:this.state.tel,
      date:this.state.date

    },

  ).then(success => {
      // if status 200 OK
      if (typeof (success.data.error) != "undefined" && success.data.error !== "") {
        ToastsStore.error(success.data.error)
      } else if (typeof (success.data.message) != "undefined" && success.data.message !== "") {
        ToastsStore.success(success.data.message)
        this.props.history.push("/home/listerendezvous");
      } 
    }).catch(err => {
      ToastsStore.error("Server error")
    })

}


  reset()
  {
      this.setState({nom:"",prenom:"",email:"",date:"",tel:"",heure:""})
  }



onchange= (event) => {
    this.setState({nom: event.target.value});
    this.setState({prenom: event.target.value});
    this.setState({heure: event.target.value});
    this.setState({tel: event.target.value});
    this.setState({email: event.target.value});
    this.setState({date: event.target.value});

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
                      <Label htmlFor="email-input">email </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input   defaultValue={this.state.email}
                      onChange={evenement=>this.setState({email:evenement.target.value})}
                       type="email" id="email-input" name="email-input"  autoComplete="email"/>

                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">heure</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.heure}
                      onChange={evenement=>this.setState({heure:evenement.target.value})}
                      type="text" id="text-input" name="text-input"/>

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">date naissance </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input defaultValue={this.state.date}
                      onChange={evenement=>this.setState({date:evenement.target.value})}
                       type="date" id="date-input" name="date-input"  />
                    </Col>
                  </FormGroup>
          
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


                 
</Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.handleSubmit} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Envoyer</Button>
                <Button  onClick={this.handleSubmit} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Annuler</Button>
              </CardFooter>
            </Card>

          </Col>

        </Row>

      </div>
    );
  }








//   <div className="animated fadeIn">
//   <Row>

   
//     <Col xs="12" lg="12">
//       <Card>
//         <CardHeader>
//           <i className="fa fa-align-justify"></i>  Liste patient
//         </CardHeader>
//         <CardBody>
// {/* <SearchField 
// placeholder='Search item'
// onChange={onChange}
// /> */}

// <form action="#" class="menu_search_form">
//   <input onChange={this.handelChange}
//   type="text" class="menu_search_input" placeholder="Search" required="required"/>
//   <button class="menu_search_button"><i class="fa fa-search" aria-hidden="true"></i></button>
// </form>

//           <Table responsive striped>
//             <thead>
//             <tr>
//               <th>nom</th>
//               <th>prenom</th>
//               <th>email</th>
//               <th>adresse</th>
//               <th>Telephone</th>
//               <th>genre</th>
//               <th>date naissance</th>
//               <th>Action</th>
//             </tr>
//             </thead>
//             <tbody>{
             
//              currentTodos.filter(item =>item.nom.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((item,index)=>{
//              return(
//              <tr key={index}>
//              <td>{item.nom}</td>
//              <td>{item.prenom}</td>
//              <td>{item.email}</td>
//              <td>{item.adresse}</td>
//              <td>{item.tel}</td>
//              <td>{item.genre}</td>
//              <td>{item.date_naissance}</td>
//              <td>
//              <i class='fa fa-edit fa-lg mt-4'     onClick={evt=>this.handleClickEdit(evt,item._id)}  style={{color:"green"}} ></i>
//              <i class='fa fa-trash fa-lg mt-4'   onClick={evt=>this.handleClickDelete(evt,item._id)} style={{color:"red"}}> </i>
//              </td>
             
//              </tr>
//              );
//              })
//              }
//              </tbody>
//           </Table>
    
// <nav>

// <Pagination>

// <PaginationItem>
// { prev === 0 ? <PaginationLink disabled>First</PaginationLink> :
//   <PaginationLink onClick={this.handleFirstClick} id={prev} href={prev}>First</PaginationLink>
// }
// </PaginationItem>
// <PaginationItem>
// { prev === 0 ? <PaginationLink disabled>Prev</PaginationLink> :
//   <PaginationLink onClick={this.handleClick} id={prev} href={prev}>Prev</PaginationLink>
// }
// </PaginationItem>
// {
//   pageNumbers.map((number,i) =>
//     <Pagination key= {i}>
//       <PaginationItem active = {pageNumbers[currentPage-1] === (number) ? true : false} >
//         <PaginationLink onClick={this.handleClick} href={number} key={number} id={number}>
//           {number}
//         </PaginationLink>
//       </PaginationItem>
//     </Pagination>
//   )}

// <PaginationItem>
//   {
//     currentPage === last ? <PaginationLink disabled>Next</PaginationLink> :
//       <PaginationLink onClick={this.handleClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Next</PaginationLink>
//   }
// </PaginationItem>

// <PaginationItem>
// {
//   currentPage === last ? <PaginationLink disabled>Last</PaginationLink> :
//   <PaginationLink onClick={this.handleLastClick} id={pageNumbers[currentPage]} href={pageNumbers[currentPage]}>Last</PaginationLink>
// }
// </PaginationItem>
// </Pagination>
// </nav>


    
//         </CardBody>
//       </Card>
//     </Col>
//   </Row>

// </div>



}

export default Forms;
