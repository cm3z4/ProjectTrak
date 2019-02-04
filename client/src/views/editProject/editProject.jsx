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

import moment from 'moment'
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import API from "../../utils/API";
import Button from "components/CustomButton/CustomButton.jsx";
import Axios from "axios";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";


class editProject extends Component {

  state = {
    projectNumber: "",
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
    projectDescription: "",
    estimator: "",
    revisionNumber: 0,
    type: "",
    bidDue: "",
    bidSubmitted: "",
    estimatedAward: "",
    plnStart: "",
    preStart: "",
    tarStart: "",
    pstStart: "",
    proposedEnd: "",
    proposedHours: 0,
    proposedValue: 0,
    estimatorNotes: "",
    actualPlnStart: "",
    actualPreStart: "",
    actualTarStart: "",
    actualPstStart: "",
    actualEnd: "",
    actualHours: 0,
    actualValue: 0,
    deleted: false
  };

  updateFormSubmit = e => {
    e.preventDefault();
    API.updateProject({
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

    // Create Saved Changes notification.
    let _notificationSystem = this.refs.notificationSystem;
    this.setState({ _notificationSystem: this.refs.notificationSystem });

    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-check" />,
      message: (
        <div>
          Saved Changes
            </div>
      ),
      level: "success",
      position: "tc",
      autoDismiss: 3
    });
  };

  deleteProjectSubmit = e => {
    e.preventDefault();
    API.deleteProject({
      project_number: this.state.projectNumber,
    });

    // Create Project Deleted notification.
    let _notificationSystem = this.refs.notificationSystem;
    this.setState({ _notificationSystem: this.refs.notificationSystem });

    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-check" />,
      message: (
        <div>
          Project Deleted
            </div>
      ),
      level: "error",
      position: "tc",
      autoDismiss: 3
    });
    
    setTimeout(() => {
      this.setState({ deleted: true });
    }, 3250);

  };

  // Call getProjects() after render().
  componentDidMount() {
    this.getProjectData();
  };

  // First, grab the projectid from apiRoutes.
  getProjectData() {
    Axios.get("/api/projectid")
      .then(projectId => {
        //console.log("projectid " + projectId.data.projectNum);
        // Then, grab data from the database filtered with the project_number.
        Axios.get("/api/edit/" + projectId.data.projectNum)
          .then(projectInfo => {

            let estimatedStart = projectInfo.data.estimated_start === null ? "" : moment(projectInfo.data.estimated_start).format("YYYY-MM-DD");
            let estimatedFinish = projectInfo.data.estimated_finish === null ? "" : moment(projectInfo.data.estimated_finish).format("YYYY-MM-DD");
            let bidDue = projectInfo.data.bid_due === null ? "" : moment(projectInfo.data.bid_due).format("YYYY-MM-DD");
            let bidSubmitted = projectInfo.data.bid_submitted === null ? "" : moment(projectInfo.data.bid_submitted).format("YYYY-MM-DD");
            let estimatedAward = projectInfo.data.estimated_award === null ? "" : moment(projectInfo.data.estimated_award).format("YYYY-MM-DD");
            let plnStart = projectInfo.data.pln_start === null ? "" : moment(projectInfo.data.pln_start).format("YYYY-MM-DD");
            let preStart = projectInfo.data.pre_start === null ? "" : moment(projectInfo.data.pre_start).format("YYYY-MM-DD");
            let tarStart = projectInfo.data.tar_start === null ? "" : moment(projectInfo.data.tar_start).format("YYYY-MM-DD");
            let pstStart = projectInfo.data.pst_start === null ? "" : moment(projectInfo.data.pst_start).format("YYYY-MM-DD");
            let proposedEnd = projectInfo.data.proposed_end === null ? "" : moment(projectInfo.data.proposed_end).format("YYYY-MM-DD");
            let actualPlnStart = projectInfo.data.actual_pln_start === null ? "" : moment(projectInfo.data.actual_pln_start).format("YYYY-MM-DD");
            let actualPreStart = projectInfo.data.actual_pre_start === null ? "" : moment(projectInfo.data.actual_pre_start).format("YYYY-MM-DD");
            let actualTarStart = projectInfo.data.actual_tar_start === null ? "" : moment(projectInfo.data.actual_tar_start).format("YYYY-MM-DD");
            let actualPstStart = projectInfo.data.actual_pst_start === null ? "" : moment(projectInfo.data.actual_pst_start).format("YYYY-MM-DD");
            let actualEnd = projectInfo.data.actual_end === null ? "" : moment(projectInfo.data.actual_end).format("YYYY-MM-DD");

            this.setState({
              projectNumber: projectInfo.data.project_number,
              salesman: projectInfo.data.salesman,
              status: projectInfo.data.status,
              companyName: projectInfo.data.company_name,
              companyAddress: projectInfo.data.company_address,
              contactName: projectInfo.data.contact_name,
              contactNumber: projectInfo.data.contact_number,
              contactEmail: projectInfo.data.contact_email,
              estimatedStart: estimatedStart,
              estimatedFinish: estimatedFinish,
              estimatedValue: projectInfo.data.estimated_value,
              projectDescription: projectInfo.data.project_description,
              estimator: projectInfo.data.estimator,
              revisionNumber: projectInfo.data.revision_number,
              type: projectInfo.data.type,
              bidDue: bidDue,
              bidSubmitted: bidSubmitted,
              estimatedAward: estimatedAward,
              plnStart: plnStart,
              preStart: preStart,
              tarStart: tarStart,
              pstStart: pstStart,
              proposedEnd: proposedEnd,
              proposedHours: projectInfo.data.proposed_hours,
              proposedValue: projectInfo.data.proposed_value,
              estimatorNotes: projectInfo.data.estimator_notes,
              actualPlnStart: actualPlnStart,
              actualPreStart: actualPreStart,
              actualTarStart: actualTarStart,
              actualPstStart: actualPstStart,
              actualEnd: actualEnd,
              actualHours: projectInfo.data.actual_hours,
              actualValue: projectInfo.data.actual_value
            });
          });
      });
  };

  // Change an input's state accordingly.
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {

    let deleteBtn = {
      marginBottom: "24px"
    };

    if (this.state.deleted === true) {
      return <Redirect to='/projects' />
    };

    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Grid fluid>
          {/* Sales form. */}
          <Row>
            <Col md={12}><Button onClick={this.deleteProjectSubmit} bsStyle="danger" pullRight fill type="submit" style={deleteBtn}>
              Delete Project</Button></Col>
          </Row>
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
                          <FormControl name="projectNumber" type="text" value={this.state.projectNumber} disabled="true" onChange={this.handleInputChange.bind(this)}
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
                        <FormGroup controlId="status" >
                          <ControlLabel>Status</ControlLabel>
                          <FormControl name="status" type="text" value={this.state.status} componentClass="select" onChange={this.handleInputChange}>
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
                          value: this.state.companyName,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "companyAddress",
                          label: "Company Address",
                          type: "text",
                          bsClass: "form-control",
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
                          value: this.state.contactNumber,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "contactEmail",
                          label: "Contact Email",
                          type: "email",
                          bsClass: "form-control",
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
                          value: this.state.estimatedStart,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "estimatedFinish",
                          label: "Estimated Finish",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.estimatedFinish,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "estimatedValue",
                          label: "Estimated Value",
                          type: "number",
                          bsClass: "form-control",
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
                            value={this.state.projectDescription}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Col md={12}><Button onClick={this.updateFormSubmit} bsStyle="info" pullRight fill type="submit">
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
                    {/* 1ST ROW --> Estimator --> Revision Number --> Type. */}
                    <Row>
                      <Col md={4}>
                        <FormGroup controlId="estimator" type="text">
                          <ControlLabel>Estimator</ControlLabel>
                          <FormControl name="estimator" componentClass="select" value={this.state.estimator} onChange={this.handleInputChange}>
                            <option value=""></option>
                            <option value="Jerry Barnes">Jerry Barnes</option>
                            <option value="James Kimble">James Kimble</option>
                          </FormControl></FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="revisionNumber">
                          <ControlLabel>Revision Number</ControlLabel>
                          <FormControl name="revisionNumber" type="number" value={this.state.revisionNumber} onChange={this.handleInputChange}
                          />
                        </FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="type">
                          <ControlLabel>Type</ControlLabel>
                          <FormControl name="type" type="text" value={this.state.type} componentClass="select" onChange={this.handleInputChange}>
                            <option value="Time & Materials">Time & Materials</option>
                            <option value="Lump Sum">Lump Sum</option>
                            <option value="Fixed Fee">Fixed Fee</option>
                          </FormControl></FormGroup></Col>
                    </Row>
                    {/* 2ND ROW --> Bid Due --> Bid Submitted --> Estimated Award. */}
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          name: "bidDue",
                          label: "Bid Due",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.bidDue,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "bidSubmitted",
                          label: "Bid Submitted",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.bidSubmitted,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "estimatedAward",
                          label: "Estimated Award",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.estimatedAward,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 3RD ROW --> PLN Start --> PRE Start --> TAR Start --> PST Start. */}
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                      proprieties={[
                        {
                          name: "plnStart",
                          label: "PLN Start",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.plnStart,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "preStart",
                          label: "PRE Start",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.preStart,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "tarStart",
                          label: "TAR Start",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.tarStart,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "pstStart",
                          label: "PST Start",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.pstStart,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 4TH ROW --> Proposed End --> Proposed Hours --> Proposed Value. */}
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          name: "proposedEnd",
                          label: "Proposed End",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.proposedEnd,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "proposedHours",
                          label: "Proposed Hours",
                          type: "number",
                          bsClass: "form-control",
                          value: this.state.proposedHours,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "proposedValue",
                          label: "Proposed Value",
                          type: "number",
                          bsClass: "form-control",
                          value: this.state.proposedValue,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 5TH ROW --> Notes. */}
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="estimatorNotes">
                          <ControlLabel>Notes</ControlLabel>
                          <FormControl
                            name="estimatorNotes"
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            value={this.state.estimatorNotes}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Col md={12}><Button onClick={this.updateFormSubmit} bsStyle="info" pullRight fill type="submit">
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
                    {/* 1ST ROW --> Actual PLN Start --> Actual PRE Start --> Actual TAR Start --> Actual PST Start. */}
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                      proprieties={[
                        {
                          name: "actualPlnStart",
                          label: "Actual PLN Start",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.actualPlnStart,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualPreStart",
                          label: "Actual PRE Start",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.actualPreStart,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualTarStart",
                          label: "Actual TAR Start",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.actualTarStart,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualPstStart",
                          label: "Actual PST Start",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.actualPstStart,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    {/* 2ND ROW --> Actual End --> Actual Hours --> Actual Value. */}
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          name: "actualEnd",
                          label: "Actual End",
                          type: "date",
                          bsClass: "form-control",
                          value: this.state.actualEnd,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualHours",
                          label: "Actual Hours",
                          type: "number",
                          bsClass: "form-control",
                          value: this.state.actualHours,
                          onChange: this.handleInputChange
                        },
                        {
                          name: "actualValue",
                          label: "Actual Value",
                          type: "number",
                          bsClass: "form-control",
                          value: this.state.actualValue,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <Col md={12}><Button onClick={this.updateFormSubmit} bsStyle="info" pullRight fill type="submit">
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
  };
};

export default editProject;
