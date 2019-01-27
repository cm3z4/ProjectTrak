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
import Button from "components/CustomButton/CustomButton.jsx";


class createProject extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="New Project"
                content={
                  <form>
                    {/* 1ST ROW --> Project Number --> Salesman --> Status. */}
                    <Row>
                      <Col md={4}>
                        <FormGroup controlId="projectNumberText">
                          <ControlLabel>Project Number</ControlLabel>
                          <FormControl type="text" placeholder="P-XXXX"
                          />
                        </FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="salesmanText">
                          <ControlLabel>Salesman</ControlLabel>
                          <FormControl type="text" placeholder="John Smith" defaultValue="" disabled="true"
                          />
                        </FormGroup></Col>
                      <Col md={4}>
                        <FormGroup controlId="statusText" type="text">
                          <ControlLabel>Status</ControlLabel>
                          <FormControl componentClass="select">
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
                          label: "Company Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Exxon Mobil",
                          defaultValue: ""
                        },
                        {
                          label: "Company Address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "3525 Decker Dr, Baytown, TX 77520",
                          defaultValue: ""
                        }
                      ]}
                    />
                    {/* 3RD ROW --> Contact Name --> Contact Number --> Contact Email. */}
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Contact Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "John Smith",
                          defaultValue: ""
                        },
                        {
                          label: "Contact Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "(555) 555-5555 ",
                          defaultValue: ""
                        },
                        {
                          label: "Contact Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "contact@exxon.com",
                          defaultValue: ""
                        }
                      ]}
                    />
                    {/* 4TH ROW --> Estimated Start --> Estimated End --> Estimated Value. */}
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      proprieties={[
                        {
                          label: "Estimated Start",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: ""
                        },
                        {
                          label: "Estimated Finish",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: ""
                        },
                        {
                          label: "Estimated Value",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "",
                          defaultValue: 0
                        }
                      ]}
                    />
                    {/* 5TH ROW --> Project Description. */}
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="projectDescriptionText">
                          <ControlLabel>Project Description</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Add a basic description of the project."
                            defaultValue=""
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
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
