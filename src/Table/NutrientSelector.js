import React, { useState, useEffect } from "react";
import { css } from "emotion";

import { groupBy, map, mapValues, set, partial } from "lodash";

import LinkButton from "../LinkButton";

const getInitialNutrientState = (nutrients) =>
  nutrients.reduce(
    (acc, n) => ({
      ...acc,
      [n.name]: { selected: ["Proximates"].includes(n.group), ...n },
    }),
    {}
  );

const NutrientSelector = ({ nutrients, setNutrients, className, ...props }) => {
  const [selectedNutrients, setSelectedNutrients] = useState(
    getInitialNutrientState(nutrients)
  );

  const groups = groupBy(Object.values(selectedNutrients), "group");

  useEffect(() => {
    setSelectedNutrients((selectedNutrients) => ({
      ...getInitialNutrientState(nutrients),
      ...selectedNutrients,
    }));
  }, [nutrients]);

  useEffect(() => {
    setNutrients(Object.values(selectedNutrients));
  }, [selectedNutrients, setNutrients]);

  const setAllInGroup = (group, checked) => {
    setSelectedNutrients(
      mapValues(selectedNutrients, (nutrient) =>
        nutrient.group === group ? set(nutrient, "selected", checked) : nutrient
      )
    );
  };

  const toggleNutrient = (name) =>
    setSelectedNutrients((selectedNutrients) => ({
      ...selectedNutrients,
      [name]: {
        ...selectedNutrients[name],
        selected: !selectedNutrients[name].selected,
      },
    }));

  return (
    <div
      className={
        css`
          display: flex;
          flex-direction: row;
        ` + ` ${className}`
      }
      {...props}
    >
      {map(groups, (groupNutrients, group) => (
        <div
          key={group}
          className={css`
            display: flex;
            flex-direction: column;
            margin-right: 1rem;
            min-width: 200px;
          `}
        >
          <h4>{group}</h4>
          <hr />
          {map(groupNutrients, ({ name }) => (
            <label key={name}>
              <input
                type="checkbox"
                name={name}
                checked={
                  selectedNutrients[name] && selectedNutrients[name].selected
                }
                onChange={partial(toggleNutrient, name)}
              />
              {name}
            </label>
          ))}
          {groupNutrients.length > 1 && (
            <div
              className={css`
                margin-top: 1rem;
              `}
            >
              <LinkButton onClick={partial(setAllInGroup, group, true)}>
                Select All
              </LinkButton>{" "}
              &middot;{" "}
              <LinkButton onClick={partial(setAllInGroup, group, false)}>
                Select None
              </LinkButton>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NutrientSelector;
