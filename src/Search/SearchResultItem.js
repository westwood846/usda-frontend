import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { partial } from "lodash";
import { css } from "emotion";

import Skeleton from "@material-ui/lab/Skeleton";

import { compareInsert } from "../actions";
import LinkButton from "../LinkButton";
import { withStyles } from "@material-ui/core";

const InlineSkeleton = withStyles({
  root: {
    display: "inline-block",
    marginRight: "1rem",
  },
})(Skeleton);

const MetaDescriptor = ({ isLoaded, label, value }) => (
  <span className="SearchResultItem-metaDescriptor">
    {isLoaded ? (
      <Fragment>
        <strong>{label}: </strong>
        {value}
      </Fragment>
    ) : (
      <InlineSkeleton variant="text" width={100} />
    )}
  </span>
);

export const SearchResultItem = ({ item, compareInsert }) => {
  // const isLoaded = Math.random() > 0.5 && !item.loading;
  const isLoaded = !item.loading;

  return (
    <div className="SearchResultItem">
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: baseline;

          button {
            visibility: hidden;
          }
          :hover {
            button {
              visibility: visible;
            }
          }
        `}
      >
        {isLoaded ? (
          <Fragment>
            <Link to={`/report/${item.ndbno}`}>
              <h3
                className={css`
                  margin-right: 1rem;
                `}
              >
                {item.name}
              </h3>
            </Link>
            <LinkButton
              onClick={partial(compareInsert, item.ndbno, 100, item.name)}
            >
              Compare
            </LinkButton>
          </Fragment>
        ) : (
          <Skeleton variant="text" width={350} />
        )}
      </div>
      <div className="SearchResultItem-meta">
        <MetaDescriptor label="ndbno" value={item.ndbno} isLoaded={isLoaded} />
        <MetaDescriptor
          label="Manufacturer"
          value={item.manu}
          isLoaded={isLoaded}
        />
        <MetaDescriptor
          label="Data Soruce"
          value={item.ds}
          isLoaded={isLoaded}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  compareInsert,
};

export default connect(null, mapDispatchToProps)(SearchResultItem);
