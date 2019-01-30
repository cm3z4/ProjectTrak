import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";


import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Axios from "axios";

class TableList extends Component {
  
  state = {
    projects: []
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    Axios.get("/api/projects")
      .then(res => {this.setState({ projects: res.data });
      console.log(this.state.projects)
  });
      
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Company Projects"
                category="all projects"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
