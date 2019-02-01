import React, { Component } from "react";
import { Grid } from "react-bootstrap";


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="https://github.com/cm3z4/ProjectTrak">GitHub</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {"2019"}{" "}
            <a href="https://www.pinmart.com/assets/1/6/DimRegular/363_1k.jpg?13881">ProjectTrak</a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
