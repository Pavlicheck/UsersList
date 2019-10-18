import React, {memo} from "react";
import { Checkbox as AntCheckbox } from "antd";

const Checkbox = ({ selectUser, userId, checked }) => {
  const clickHandler = () => {
    selectUser({id: userId, selected: !checked})
  };

  return (
    <AntCheckbox
      checked={checked}
      onClick={clickHandler}
    />
  );
};

export default memo(Checkbox);
