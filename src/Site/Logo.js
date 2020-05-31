import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link, withStyles } from "@material-ui/core";

export const Logo = ({ color, variant }) => {
  const AdaptedTypography = withStyles({
    root: {
      color: { white: "white", primary: undefined }[color],
    },
  })(Typography);

  return (
    <Link component={RouterLink} to="/search">
      <AdaptedTypography variant={variant || "h5"}>
        USDA Search
      </AdaptedTypography>
    </Link>
  );
};

export default Logo;
