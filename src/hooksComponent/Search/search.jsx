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
 const Searchx = (props) => {
    return (
      <>
        <Layout>
          <Header>
            <Search
              placeholder="input search text"
              style={style}
              onChange={props.onChangeSearch}
            />
          </Header>
        </Layout>
      </>
    );
  }

export default Searchx;