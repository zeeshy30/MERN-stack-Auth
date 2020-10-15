import React from "react";
import { Row, Col, Typography } from "antd";
import style from "./index.module.scss";
import animate from "../../../../Assets/smiley-face-animate.svg";
export const HomeContainer = () => {
  const { Title } = Typography;
  return (
    <div className={style.container}>
      <div className={style.box}>
        <Row>
          <Col span={12}>
            <Title level={3} style={{ color: "#1890ff" }}>
              Welcome Back!
            </Title>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Typography>
              Lets get started with what you are looking for...
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col span={40} style={{marginTop:80}}>
            <div className={style.animate}>
              <object type="image/svg+xml" data={animate} viewbox="0 0 1200 1200">
                svg-animation
              </object>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
