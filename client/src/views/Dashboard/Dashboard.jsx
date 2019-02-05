import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import Axios from "axios";
import {
  legendPie,
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
    },
    dataBar: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      series: [
        [1, 2, 0, 0, 3, 2, 6, 3, 1, 2, 1, 3]
      ]
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

        let jan = 0;
        let feb = 0;
        let mar = 0;
        let apr = 0;
        let may = 0;
        let jun = 0;
        let jul = 0;
        let aug = 0;
        let sep = 0;
        let oct = 0;
        let nov = 0;
        let dec = 0;

        for (let i = 0; i < proj.length; i++) {
          let filterProj = proj[i].bid_submitted;


          if (filterProj !== null) {
            let filterDate = filterProj.charAt(5) + filterProj.charAt(6);

            if (filterDate === "01") {
              jan++;
            } else if (filterDate === "02") {
              feb++;
            } else if (filterDate === "03") {
              mar++;
            } else if (filterDate === "04") {
              apr++;
            } else if (filterDate === "05") {
              may++;
            } else if (filterDate === "06") {
              jun++;
            } else if (filterDate === "07") {
              jul++;
            } else if (filterDate === "08") {
              aug++;
            } else if (filterDate === "09") {
              sep++;
            } else if (filterDate === "10") {
              oct++;
            } else if (filterDate === "11") {
              nov++;
            } else if (filterDate === "12") {
              dec++;
            };
          };
        };
        console.log(jan);
        console.log(feb);
        console.log(mar);
        console.log(apr);
        console.log(may);
        console.log(jun);
        console.log(jul);
        console.log(aug);
        console.log(sep);
        console.log(oct);
        console.log(nov);
        console.log(dec);

        this.setState({
          dataBar: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            series: [
              [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
            ]
          }

        })


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
            <Row>
              <Col md={8}>
                <Card
                  id="chartActivity"
                  title="Bidding Activity"
                  category="All Projects"
                  stats="2019/2020"
                  statsIcon="pe-7s-date"
                  content={
                    <div className="ct-chart">
                      <ChartistGraph
                        data={this.state.dataBar}
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
              <Col md={4}>
                <Card
                  statsIcon="pe-7s-date"
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

            <Col md={12}>
              <Card
                title="To-do List"
                stats="Updated now"
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
