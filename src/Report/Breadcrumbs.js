import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Breadcrumbs = ({ name, dataSource }) => {
  const fragments = name.split(", ");
  return (
    <div className="Breadcrumbs">
      {fragments.map((fragment, index, fragments) => (
        <span key={index}>
          &nbsp;/&nbsp;
          <Link
            to={{
              pathname: "/search",
              search: `?query=${fragments
                .slice(0, index + 1)
                .join(", ")}&dataSource=${dataSource}`,
            }}
            className="Breadcrumbs-item"
          >
            {fragment}
          </Link>
        </span>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataSource: state.app.searchDataSource,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
