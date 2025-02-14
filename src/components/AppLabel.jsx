import React from "react";

export const AppLabel = ({labelText,labelPlaceholder,errorText,labelId}) => {
    return (
        <label className="input-wrapper" htmlFor={labelId}>
              {labelText}
              <input
                required
                type="text"
                name={labelId}
                id={labelId}
                placeholder={labelPlaceholder}
              />
              <span id="error-message">
                {errorText}
              </span>
            </label>
    );
};