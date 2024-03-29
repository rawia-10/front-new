import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { Badge, Card,Form, CardBody,Button, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table }
from 'reactstrap';
import { connect } from 'react-redux'
import axios from 'axios'
import ItemRDV from './itemRDV'
import './List.css'
let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;


class Tables extends Component {

    constructor(){
        super()
        this.state={



        keyword:""

    };
    this.handleClick = this.handleClick.bind(this);

    this.handleLastClick = this.handleLastClick.bind(this);

    this.handleFirstClick = this.handleFirstClick.bind(this);
    }

    handleClick(event) {

        event.preventDefault();

       this.setState({
             currentPage: Number(event.target.id)
           });
         }

 handleLastClick(event) {

        event.preventDefault();

         this.setState({
             currentPage:last
           });
         }
handleFirstClick(event) {

        event.preventDefault();

        this.setState({
             currentPage:1
           });
         }


         componentDidMount = () => {
          let token = localStorage.getItem("token");
          if (!token) {
              token = "";
          }
          axios.get("http://127.0.0.1:8887/rdv/list",

              {
                  headers: {
                      Authorization: 'Bearer ' + token
                  }
              }).then((res) => {
                  this.props.updatRDVReducer(res.data.data.data);
              }).catch(e => {
                  if (e.status === 401) {
                      this.props.history.push("login");
                    } else {
                        // show error
                    }
              });
        }


handleClickDelete(e,id){
            e.preventDefault();
            console.log("id",id);
            this.remove(id);
                     }






            // onchange= (event) => {
            //     this.setState({nom: event.target.value});
            //     this.setState({prenom: event.target.value});
            //   }

            handlechange=(e)=>{
              this.setState({keyword:e.target.value})

                        }
  render() {
    let {rdvs, currentPage, todosPerPage} = this.props;


    return (



      <section>
      {/* <div className='contact-list-container'>

          <div className="animated fadeIn">
              <Row>
                  <Col xs="12" sm="12" md="12">
                      <Card>
                          <CardBody>
                              <h1 className="h1 text-center text-success font-weight-bold">List RDV</h1>
                              <hr></hr>
                              <div class="wrap">
                  <div class="search">
                      <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange={this.handlechange}/>
                      <button type="submit" class="searchButton">
                          <i class="fa fa-search"></i>
                      </button>
                  </div>
                  </div>
                              <div className="table-responsive py-3">
                                  <table className="table">
                                      <thead>
                                          <tr className="bg-blue">
                                          <th>nom</th>
                                           <th>prenom</th>
                                          <th>adresse</th>
                                          <th>Telephone</th>
                                          <th>genre</th>
                                          <th>date naissance</th>
                                          <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                      {rdvs.filter(el => el.nom.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, index) => <ItemRDV key={index} item={el} />)}

                                      </tbody>
                                  </table>

                              </div>
                          </CardBody>
                      </Card>
                  </Col>
              </Row>
          </div>
      </div> */}
<Row>
 <Col>
   <Card>
     <CardHeader>
       <i className="icon-list"></i> Liste des patients
     </CardHeader>
     <CardBody>
     <div class="search">
                      <input type="text" class="searchTerm" placeholder="Que cherchez-vous?" onChange={this.handlechange}/>
                      <button type="submit" class="searchButton">
                          <i class="fa fa-search"></i>
                      </button>
                  </div>
       <Table hover bordered striped responsive size="xl">
         <thead>
         <tr>
         <th>nom</th>
             <th>prenom</th>
            <th>email</th>
             <th>Telephone</th>
            <th>date </th>
            <th>heure</th>
            <th>Action</th>
         </tr>
         </thead>
       
         <tbody>
         {rdvs.filter(el => el.nom.toUpperCase().includes(this.state.keyword.toUpperCase().trim())).map((el, index) => <ItemRDV key={index} item={el} />)}
         </tbody>
       </Table>
    
     </CardBody>
   </Card>
 </Col>
</Row>
  
  </section>




      );
  }
}

const mapStateToProps = (state) => {
  return {
      rdvs: state.rdvReducer
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      updatRDVReducer: rdvs => {
          dispatch({
              type: 'UPDATE_RVD',
              rdvs
          })
      }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Tables);

