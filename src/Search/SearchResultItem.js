import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { partial } from "lodash";

import { compareInsert } from "../actions";
import { css } from "emotion";
import LinkButton from "../LinkButton";

export const SearchResultItem = ({ item, compareInsert }) => {
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
      </div>
      <div className="SearchResultItem-meta">
        <span className="SearchResultItem-metaDescriptor">
          <strong>ndbno: </strong>
          {item.ndbno}
        </span>
        <span className="SearchResultItem-metaDescriptor">
          <strong>Manufacturer: </strong>
          {item.manu}
        </span>
        <span className="SearchResultItem-metaDescriptor">
          <strong>Data Source: </strong>
          {item.ds}
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  compareInsert,
};

export default connect(null, mapDispatchToProps)(SearchResultItem);
