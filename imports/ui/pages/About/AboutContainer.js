import React from "react";
import About from "./About";

import { withRouter } from "react-router-dom";

const AboutContainer = ({ classes }) => <About classes={classes} />;

export default withRouter(AboutContainer);
