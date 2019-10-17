import React, { memo } from "react";
import { Col } from "antd";

function Cell({ children }) {
  return (
    <Col span={2} className="Col">
      {children}
    </Col>
  );
}

export default memo(Cell, (prevProps, nextProps) => {
  if (!nextProps.children.props) return true;
  return nextProps.children.props.checked === prevProps.children.props.checked;
});
