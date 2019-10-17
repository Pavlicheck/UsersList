import React from "react";
import { Row } from "antd";
import { Tag, Layout } from "antd";

const Footer = ({ users }) => {
  return (
    <Layout.Footer className="Footer" theme="dark">
      <Row>
        {users.map(user => (
          <Tag key={user.id}>{user.firstName}</Tag>
        ))}
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
