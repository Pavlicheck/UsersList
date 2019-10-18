import React from "react";
import Row from "./Row";
import Cell from "./Cell";
import { Checkbox } from "antd";
import { Layout } from "antd";

const Header = ({ selectAll, allSelected }) => {
  const clickHandler = () => {
    selectAll(!allSelected);
  };
  return (
    <Layout.Header className="Header" theme="light">
      <Row selected={allSelected}>
        <Cell>
          <Checkbox
            onChange={clickHandler}
            checked={allSelected}
          />

        </Cell>
        <Cell>Name</Cell>
        <Cell>Last name</Cell>
        <Cell>Age</Cell>
      </Row>
    </Layout.Header>
  );
};

export default Header;
