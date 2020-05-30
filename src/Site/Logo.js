import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link, withStyles } from "@material-ui/core";

export const Logo = ({ variant }) => {
  const AdaptedTypography = withStyles({
    root: {
      color: { white: "white", primary: undefined }[variant],
    },
  })(Typography);

  return (
    <Link component={RouterLink} to="/search">
      <AdaptedTypography variant="h5">USDA Frontend</AdaptedTypography>
    </Link>
  );
};

export default Logo;
