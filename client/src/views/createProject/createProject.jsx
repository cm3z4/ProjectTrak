import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
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
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";


class createProject extends Component {

  state = {
    projectNumber: "",
    salesman: "",
    status: "Prospect",
    companyName: "",
    companyAddress: "",
    contactName: "",
    contactNumber: "",
    contactEmail: "",
    estimatedStart: null,
    estimatedFinish: null,
    estimatedValue: 0,
    projectDescription: "",
    estimator: "",
    revisionNumber: 0,
    type: "Time & Materials",
    bidDue: null,
    bidSubmitted: null,
    estimatedAward: null,
    plnStart: null,
    preStart: null,
    tarStart: null,
    pstStart: null,
    proposedEnd: null,
    proposedHours: 0,
    proposedValue: 0,
    estimatorNotes: "",
    actualPlnStart: null,
    actualPreStart: null,
    actualTarStart: null,
    actualPstStart: null,
    actualEnd: null,
    actualHours: 0,
    actualValue: 0,
    created: false
  };

  createFormSubmit = e => {
    e.preventDefault();
    API.createProject({
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
      project_description: this.state.projectDescription,
      estimator: this.state.estimator,
      revision_number: this.state.revisionNumber,
      type: this.state.type,
      bid_due: this.state.bidDue,
      bid_submitted: this.state.bidSubmitted,
      estimated_award: this.state.estimatedAward,
      pln_start: this.state.plnStart,
      pre_start: this.state.preStart,
      tar_start: this.state.tarStart,
      pst_start: this.state.pstStart,
      proposed_end: this.state.proposedEnd,
      proposed_hours: this.state.proposedHours,
      proposed_value: this.state.proposedValue,
      estimator_notes: this.state.estimatorNotes,
      actual_pln_start: this.state.actualPlnStart,
      actual_pre_start: this.state.actualPreStart,
      actual_tar_start: this.state.actualTarStart,
      actual_pst_start: this.state.actualPstStart,
      actual_end: this.state.actualEnd,
      actual_hours: this.state.actualHours,
      actual_value: this.state.actualValue
    });

    // Create Project Created notification.
    let _notificationSystem = this.refs.notificationSystem;
    this.setState({ _notificationSystem: this.refs.notificationSystem });

    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-check" />,
      message: (
        <div>
          Project Created
          </div>
      ),
      level: "success",
      position: "tc",
      autoDismiss: 3
    });

    setTimeout(() => {
      this.setState({ created: true });
    }, 3250);
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {

    if (this.state.created === true) {
      return <Redirect to='/projects' />
    };

    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
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
                          <FormControl name="projectNumber" type="text" placeholder="P-XXXX" onChange={this.handleInputChange}
                          />
                        </FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="salesman" type="text">
                          <ControlLabel>Salesman</ControlLabel>
                          <FormControl name="salesman" componentClass="select" value={this.state.salesman} onChange={this.handleInputChange}>
                            <option value=""></option>
                            <option value="Mark Ledbetter">Mark Ledbetter</option>
                            <option value="Tim Cunningham">Tim Cunningham</option>
                            <option value="Thomas Mason">Thomas Mason</option>
                          </FormControl></FormGroup></Col>
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
                        <FormGroup controlId="projectDescription">
                          <ControlLabel>Project Description</ControlLabel>
                          <FormControl
                            name="projectDescription"
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Add a basic description of the project."
                            defaultValue=""
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button onClick={this.createFormSubmit} bsStyle="info" pullRight fill type="submit">
                      Create Prospect
                    </Button>
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

export default createProject;