import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import moment from 'moment'

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import API from "../../utils/API";
import Button from "components/CustomButton/CustomButton.jsx";
import Axios from "axios";


class editProject extends Component {

  state = {
    projectNumber: "Test",
    salesman: "",
    status: "",
    companyName: "",
    companyAddress: "",
    contactName: "",
    contactNumber: "",
    contactEmail: "",
    estimatedStart: "",
    estimatedFinish: "",
    estimatedValue: 0,
    projectDescription: ""
  };

  editFormSubmit = e => {
    e.preventDefault();
    API.editProject({
      project_number: this.state.projectNumber,
      salesman: this.state.salesman,
      status: this.state.status,
      company_name: this.state.companyName,
      company_address: this.state.companyAddress,
      contact_name: this.state.contactName,
      contact_number: this.state.contactNumber,
      contact_email: this.state.contactEmail,
      estimated_start: this.state.estimatedStart,
      estimated_finish: this.state.estimatedFinish,
      estimated_value: this.state.estimatedValue,
      project_description: this.state.projectDescription
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    this.getProjectData();
  };

  getProjectData() {
    Axios.get("/api/projectid")
      .then(a1 => {
        console.log("projectid " + a1.data.projectNum);
        Axios.get("/api/edit/" + a1.data.projectNum)
          .then(projectData => {
            console.log("/edit " + projectData.data.project_number);
            this.setState({
              projectNumber: projectData.data.project_number,
              salesman: projectData.data.salesman,
              status: projectData.data.status,
              companyName: projectData.data.company_name,
              companyAddress: projectData.data.company_address,
              contactName: projectData.data.contact_name,
              contactNumber: projectData.data.contact_number,
              contactEmail: projectData.data.contact_email,
              estimatedStart: moment(projectData.data.estimated_start).format("YYYY-MM-DD"),
              estimatedFinish: moment(projectData.data.estimated_finish).format("YYYY-MM-DD"),
              estimatedValue: projectData.data.estimated_value,
              projectDescription: projectData.data.project_description
            })
            console.log(this.state.projectNumber);
            console.log(this.state.salesman);
          });

      });
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>

          {/* Sales form. */}
          <Row>
            <Col md={12}>
              <Card
                title="Sales"
                content={
                  <form>
                    {/* 1ST ROW --> Project Number --> Salesman --> Status. */}
                    <Row>
                      <Col md={4}>
                        <FormGroup controlId="projectNumber">
                          <ControlLabel>Project Number</ControlLabel>
                          <FormControl name="projectNumber" type="text" placeholder="" value={this.state.projectNumber} disabled="true" onChange={this.handleInputChange.bind(this)}
                          />
                        </FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="salesman">
                          <ControlLabel>Salesman</ControlLabel>
                          <FormControl name="salesman" type="text" placeholder="" value={this.state.salesman} onChange={this.handleInputChange}
                          />
                        </FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="status" type="text">
                          <ControlLabel>Status</ControlLabel>
                          <FormControl name="status" value={this.state.status} componentClass="select" onChange={this.handleInputChange}>
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
                          value: this.state.companyName,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "companyAddress",
                          label: "Company Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "3525 Decker Dr, Baytown, TX 77520",
                          value: this.state.companyAddress,
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
                          value: this.state.contactName,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "contactNumber",
                          label: "Contact Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "(555) 555-5555 ",
                          value: this.state.contactNumber,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "contactEmail",
                          label: "Contact Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "contact@exxon.com",
                          value: this.state.contactEmail,
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
                          value: this.state.estimatedStart,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "estimatedFinish",
                          label: "Estimated Finish",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          value: this.state.estimatedFinish,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "estimatedValue",
                          label: "Estimated Value",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "",
                          value: this.state.estimatedValue,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 5TH ROW --> Project Description. */}
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="projectDescription">
                          <ControlLabel>Project Description</ControlLabel>
                          <FormControl
                            name="projectDescription"
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder=""
                            value={this.state.projectDescription}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Col md={12}><Button onClick={this.editFormSubmit} bsStyle="info" pullRight fill type="submit">
                      Saves Changes
                    </Button></Col>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
          {/* Estimating form. */}
          <Row>
            <Col md={12}>
              <Card
                title="Estimating"
                content={
                  <form>
                    {/* 1ST ROW --> Estimator --> Revised? --> Type. */}
                    <Row>
                      <Col md={4}>
                        <FormGroup controlId="estimator" type="text">
                          <ControlLabel>Estimator</ControlLabel>
                          <FormControl name="estimator" componentClass="select" onChange={this.handleInputChange}>
                            <option value=""></option>
                            <option value="Jerry Barnes">Jerry Barnes</option>
                            <option value="James Kimble">James Kimble</option>
                          </FormControl></FormGroup></Col>

                      <Col md={4}>
                        <FormGroup controlId="revision">
                          <ControlLabel>Revision Number</ControlLabel>
                          <FormControl name="revisionNumber" type="number" placeholder="" defaultValue="0" onChange={this.handleInputChange}
                          />
                        </FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="type" type="text">
                          <ControlLabel>Type</ControlLabel>
                          <FormControl name="type" componentClass="select" onChange={this.handleInputChange}>
                            <option value=""></option>
                            <option value="Fixed Fee">Fixed Fee</option>
                            <option value="Lump Sum">Lump Sum</option>
                            <option value="Time & Materials">Time & Materials</option>
                          </FormControl></FormGroup></Col>
                    </Row>
                    {/* 2ND ROW --> Company Name --> Company Address. */}
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          name: "bidDue",
                          label: "Bid Due",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "bidsubmitted",
                          label: "Bid Submitted",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "estimatedAward",
                          label: "Estimated Award",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 3RD ROW --> Contact Name --> Contact Number --> Contact Email. */}
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                      proprieties={[
                        {
                          name: "plnStart",
                          label: "PLN Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "preStart",
                          label: "PRE Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "tarStart",
                          label: "TAR Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "pstStart",
                          label: "PST Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
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
                          name: "proposedEnd",
                          label: "Proposed End",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "proposedHours",
                          label: "Proposed Hours",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "0",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "proposedValue",
                          label: "Proposed Value",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "0",
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 5TH ROW --> Project Description. */}
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="estimatorNotes">
                          <ControlLabel>Notes</ControlLabel>
                          <FormControl
                            name="estimatorNotes"
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Anything special about the proposal?"
                            defaultValue=""
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Col md={12}><Button onClick={this.editFormSubmit} bsStyle="info" pullRight fill type="submit">
                      Saves Changes
                    </Button></Col>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>

          {/* Operations form. */}
          <Row>
            <Col md={12}>
              <Card
                title="Operations"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                      proprieties={[
                        {
                          name: "actualPlnStart",
                          label: "Actual PLN Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualPreStart",
                          label: "Actual PRE Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualTarStart",
                          label: "Actual TAR Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualPstStart",
                          label: "Actual PST Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
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
                          name: "actualEnd",
                          label: "Actual End",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualHours",
                          label: "Actual Hours",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "0",
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualValue",
                          label: "Actual Value",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: "0",
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <Col md={12}><Button onClick={this.editFormSubmit} bsStyle="info" pullRight fill type="submit">
                      Saves Changes
                    </Button></Col>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default editProject;