import React from "react";
import { Layout } from "antd";
import { Input } from "antd";
const { Search } = Input;
const { Header } = Layout;
const style = {
  width: 300,
  marginTop: 15,
  marginLeft: 85,
};
export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <Header>
            <Search
              placeholder="input search text"
              style={style}
              onChange={this.props.onChangeSearch}
            />
          </Header>
        </Layout>
      </>
    );
  }
}
