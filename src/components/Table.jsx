import React, { Component } from "react";
import { List as AntList, Layout } from "antd";

import Cell from "./Cell";
import Row from "./Row";
import Checkbox from "./Checkbox";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

class Table extends Component {
  components = {
    body: {
      row: Row,
      cell: Cell
    }
  };

  selectHandler = id => selected => this.props.selectUser({ id: id, selected });

  render() {
    return (
      <Layout>
        <Header />
        <Layout.Content className="Content">
          <AntList>
            {this.props.data.map(user => {
              return (
                <AntList.Item
                  key={user.id}
                  className={user.selected && "Selected"}
                >
                  <Row selected={user.selected}>
                    <Cell>
                      <Checkbox
                        checked={user.selected}
                        clickHandler={this.selectHandler(user.id)}
                      />
                    </Cell>
                    <Cell>{user.firstName}</Cell>
                    <Cell>{user.lastName}</Cell>
                    <Cell>{user.age}</Cell>
                  </Row>
                </AntList.Item>
              );
            })}
          </AntList>
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}

export default Table;
