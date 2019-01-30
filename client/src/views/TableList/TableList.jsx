import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";


import Card from "components/Card/Card.jsx";
import { thArray } from "variables/Variables.jsx";
import Axios from "axios";

class TableList extends Component {

  state = {
    projects: [],
    usableProperties: [
      "project_number",
      "salesman",
      "status",
      "company_name",
      "project_description",
      "estimated_start",
      "estimated_finish",
      "estimated_value"
    ]
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    Axios.get("/api/projects")
      .then(res => {
        this.setState({ projects: res.data });
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
                      {
                        this.state.projects.map((project, key) => {
                          return (
                            <tr key={key}>{
                              this.state.usableProperties.map((property) => {
                                return <td key={`${property}${key}`}>
                                  {project[property]}
                                </td>
                              })
                            }
                            </tr>
                          )
                        })
                      }
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
