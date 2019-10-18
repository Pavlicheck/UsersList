import React, {useEffect} from 'react';
import {Layout, List as AntList, Spin, Empty} from "antd";
import Row from "./Row";
import Cell from "./Cell";
import Checkbox from "../containers/Checkbox";

const Content = ({users, loading, getUsers}) => {
  useEffect(() => {
    !users.length && getUsers();
  });

  if (loading) return  <Spin size="large" className="Loader"/>;
  if (!users.length) return  <Empty className="Empty"/>;

  return (
    <Layout.Content className="Content">
      <AntList
        dataSource={users}
        renderItem={user => {
          return (
            <AntList.Item
              key={user.id}
              className={user.selected && "Selected"}
            >
              <Row selected={user.selected}>
                <Cell>
                  <Checkbox
                    userId={user.id}
                    checked={user.selected}
                  />
                </Cell>
                <Cell>{user.firstName}</Cell>
                <Cell>{user.lastName}</Cell>
                <Cell>{user.age}</Cell>
              </Row>
            </AntList.Item>
          );
        }}/>
    </Layout.Content>
  );
};

export default Content;
