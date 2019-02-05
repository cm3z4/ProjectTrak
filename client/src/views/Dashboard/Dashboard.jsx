import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import Axios from "axios";
import {
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class Dashboard extends Component {

  state = {
    projectedMh19: 0,
    projectedRev19: 0,
    projectedMh20: 0,
    projectedRev20: 0,
    dataPie: {
      labels: ["55%", "25%", "20%"], series: [55, 25, 20]
    }
  };

  // Call getProjects() after render().
  componentDidMount() {
    this.getWonProjects();
  };

  // First, grab the projectid from apiRoutes.
  getWonProjects() {
    let won = 0;
    let lost = 0;
    let pending = 0;
    let total = 0;

    Axios.get("/api/metrics")
      .then(wonProjects => {
        let won = wonProjects.data;
        //console.log(won);
        for (let i = 0; i < won.length; i++) {
          let filterDate = parseInt(won[i].estimated_start, 10);
          let filterMhs = won[i].proposed_hours;
          let filterValue = won[i].proposed_value;
          if (filterDate === 2019) {
            this.setState({
              projectedMh19: this.state.projectedMh19 + filterMhs,
              projectedRev19: this.state.projectedRev19 + filterValue,
            });
          } else if (filterDate === 2020) {
            this.setState({
              projectedMh20: this.state.projectedMh20 + filterMhs,
              projectedRev20: this.state.projectedRev20 + filterValue,
            });
          };
        }
      });

    Axios.get("/api/projects")
      .then(projects => {
        let proj = projects.data;
        console.log(proj);
        for (let i = 0; i < proj.length; i++) {
          let filterDate = parseInt(proj[i].estimated_start, 10);
          if (filterDate === 2019 || filterDate === 2020) {
            if (proj[i].status === "Won") {
              won++;
              total++;
            } else if (proj[i].status === "Lost") {
              lost++;
              total++;
            } else if (proj[i].status === "Pending") {
              pending++;
              total++;
            };
          };
        };

        let wonData = ((won / total) * 100).toFixed(0);
        let lostData = ((lost / total) * 100).toFixed(0);
        let pendingData = ((pending / total) * 100).toFixed(0);

        this.setState({
          dataPie: { labels: [`${wonData}%`, `${lostData}%`, `${pendingData}%`], series: [wonData, lostData, pendingData] }
        });
      });
  };

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-info" />}
                statsText={new Date().getFullYear() + " Projected Man-Hours"}
                statsValue={this.state.projectedMh19}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-cash text-info" />}
                statsText={new Date().getFullYear() + " Projected Revenue"}
                statsValue={"$" + this.state.projectedRev19.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-success" />}
                statsText={new Date().getFullYear() + 1 + " Projected Man-Hours"}
                statsValue={this.state.projectedMh20}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-cash text-success" />}
                statsText={new Date().getFullYear() + 1 + " Projected Revenue"}
                statsValue={"$" + this.state.projectedRev20.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Company Performance"
                category="Monthly performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Win/Loss Ratio"
                category="All Projects"
                stats="2019/2020"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={this.state.dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="John Smith"
                category="Monthly Performance"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Projects"
                category="Recent projects added/updated"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
