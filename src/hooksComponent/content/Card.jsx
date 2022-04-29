import React from "react";
import { Card } from "antd";
import { Row, Col } from "antd";
import './cardx.css';
const { Meta } = Card;


const Cardx =  (props) => {
    return (
      <div className="row">
      <Row justify="space-around" gutter={[16,16]} className="roww">

        {props.news.map((data, index) => {
        
         return (
           <Col span={8} className="gutter-row" key={index}>
              <Card   style={{ height: 400 }} cover={<img alt="example" src={data.urlToImage} />}>
                <Meta title={data.title} description={data.description} />
                <a href={data.url}>Read More</a>
              </Card>
            </Col>
          );
        })}
      </Row>
      </div>
    );
  }

export default Cardx;