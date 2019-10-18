import React, { memo } from "react";
import { Col } from "antd";

function Cell({ children }) {
  return (
    <Col xxl={2} lg={4} sm={5} xs={6} className="Col">
      {children}
    </Col>
  );
}

export default memo(Cell, (prevProps, nextProps) => {
  if (!nextProps.children.props) return true;
  return nextProps.children.props.checked === prevProps.children.props.checked;
});
