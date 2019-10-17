import React, { memo } from "react";
import { Row as AntdRow } from "antd";

function Row(props) {
  let { children } = props;
  const style = {
    ...props.style,
    width: "100%"
  };
  return (
    <AntdRow style={style} type="flex" justify="center">
      {children}
    </AntdRow>
  );
}

export default memo(Row, (prevProps, nextProps) => {
  return prevProps.selected === nextProps.selected;
});
