import React from "react";
import { css } from "emotion";

const Loading = (props) => {
  return (
    <div
      className={css`
        margin-top: 2rem;
        margin-left: 2rem;
        border: 8px solid #f06292;
        border-top: 8px solid transparent; /* Blue */
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 1s linear infinite;

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
    >
      Loading
    </div>
  );
};

export default Loading;
