import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import API from "../../utils/API";
import Button from "components/CustomButton/CustomButton.jsx";


class createProject extends Component {
  state = {
    projectNumber:"",
    salesman: "John Smith",
    projectName: "",
    status: "Prospect",
    companyName: "",
    companyAddress: "",
    contactName: "",
    contact_number: "",
    contactEmail: "",
    estimatedStart: "",
    estimatedFinish: "",
    estimatedValue: 0,
    discription: ""
  }
  // createFormSubmit = event => {
  //   event.preventDefault();
  //   API.createProject({
  //     salesman: this.state.salesman,
  //     project_name: this.state.projectName,
  //     status: this.state.status,
  //     company_name: this.state.companyName,
  //     company_address: this.state.companyAddress,
  //     contact_name: this.state.contactName,
  //     contact_number: this.state.contactEmail,
  //     contact_email: this.state.contactEmail,
  //     estimated_start: this.state.estimatedStart,
  //     estimated_finish: this.state.estimatedFinish,
  //     estimated_value: this.state.estimatedValue,
  //     discription: this.state.discription
  //   })
  //     .then()
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    console.log(this.state);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`${this.state.salesman} 
           ${this.state.projectName}
           ${this.state.status}
           ${this.state.companyName}`);
    
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="New Project"
                content={
                  <form onSubmit={this.createFormSubmit}>
                    {/* 1ST ROW --> Project Number --> Salesman --> Status. */}
                    <Row>
                      <Col md={4}>
                        <FormGroup controlId="projectNumber">
                          <ControlLabel>Project Number</ControlLabel>
                          <FormControl name="projectName" type="text" placeholder="P-XXXX" onChange={this.handleInputChange}
                          />
                        </FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="salesman">
                          <ControlLabel>Salesman</ControlLabel>
                          <FormControl name="salesman" type="text" placeholder="John Smith" defaultValue="John Smith" disabled="true" onChange={this.handleInputChange}
                          />
                        </FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="status" type="text">
                          <ControlLabel>Status</ControlLabel>
                          <FormControl name="status" componentClass="select" onChange={this.handleInputChange}>
                            <option value="Prospect">Prospect</option>
                            <option value="Bidding">Bidding</option>
                            <option value="Pending">Pending</option>
                            <option value="Won">Won</option>
                            <option value="Lost">Lost</option>
                            <option value="Canceled">Canceled</option>
                          </FormControl></FormGroup></Col>
                    </Row>
                    {/* 2ND ROW --> Company Name --> Company Address. */}
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          name: "companyName",
                          label: "Company Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Exxon Mobil",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "companyAddress",
                          label: "Company Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "3525 Decker Dr, Baytown, TX 77520",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 3RD ROW --> Contact Name --> Contact Number --> Contact Email. */}
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          name: "contactName",
                          label: "Contact Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "John Smith",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "contactNumber",
                          label: "Contact Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "(555) 555-5555 ",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "contactEmail",
                          label: "Contact Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "contact@exxon.com",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 4TH ROW --> Estimated Start --> Estimated End --> Estimated Value. */}
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          name: "estimatedStart",
                          label: "Estimated Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "estimatedFinish",
                          label: "Estimated Finish",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "estimatedValue",
                          label: "Estimated Value",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: 0,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 5TH ROW --> Project Description. */}
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="projectDescriptionText">
                          <ControlLabel>Project Description</ControlLabel>
                          <FormControl
                            name="projectDescription"
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Add a basic description of the project."
                            defaultValue=""
                            onChange= {this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button onClick={this.handleFormSubmit} bsStyle="info" pullRight fill type="submit">
                      Create Prospect
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default createProject;
