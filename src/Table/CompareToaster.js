import React, { useState } from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import { Link, withRouter } from "react-router-dom";
import { map } from "lodash";

import { compareClear, compareRemove } from "../actions";

const SpaceBar = (props) => (
  <div
    className={css`
      display: flex;
      justify-content: space-between;
      padding: 0.5rem;
    `}
    {...props}
  />
);

export const CompareToaster = withRouter(
  ({ compare, compareClear, compareRemove, location }) => {
    const isVisible = compare.length > 0 && location.pathname !== "/compare";
    const [isExpanded, setIsExpanded] = useState(true);
    const ids = map(compare, "ndbno").join(",");
    return (
      <div
        className={css`
          display: ${isVisible ? "initial" : "none"};
          position: fixed;
          bottom: 0;
          right: 5rem;
          border: 1px solid black;
          border-bottom: none;
          background-color: white;
          min-width: 300px;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            background-color: #eaeaea;
            padding: 0.5rem;
          `}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3
            className={css`
              margin: 0;
            `}
          >
            Collection <small>({compare.length})</small>
          </h3>
          {isExpanded ? " 🔼" : " 🔽"}
        </div>
        <table
          className={css`
            display: ${isExpanded ? "visible" : "none"};
            margin: 0;
            margin-top: 0.5rem;
            padding: 0.5rem;
          `}
        >
          <tbody>
            {compare.map((item) => (
              <tr key={item.ndbno}>
                <td
                  className={css`
                    max-width: 200px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  `}
                  title={item.report ? item.report.desc.name : item.ndbno}
                >
                  <Link to={`/report/${item.ndbno}`}>
                    {item.report ? item.report.desc.name : item.fallbackName}
                  </Link>
                </td>
                <td>{item.amount} g</td>
                <td>
                  <button onClick={() => compareRemove(item.ndbno)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <SpaceBar
          style={{
            display: isExpanded ? "flex" : "none",
          }}
        >
          <button onClick={compareClear}>Clear Collection</button>
          <Link to={`/compare?ids=${ids}`}>Go to Collection</Link>
        </SpaceBar>
      </div>
    );
  }
);

const mapStateToProps = (state) => ({
  compare: state.app.compare.map((item) => ({
    ...item,
    report: state.app.reports[item.ndbno],
  })),
});

const mapDispatchToProps = {
  compareClear,
  compareRemove,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompareToaster);
