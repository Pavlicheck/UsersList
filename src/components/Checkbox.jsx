import React from "react";
import { Checkbox as AntCheckbox } from "antd";

const Checkbox = ({ clickHandler, checked }) => {
  return (
    <AntCheckbox
      checked={checked}
      onClick={clickHandler.bind(null, !checked)}
    />
  );
};

export default Checkbox;
