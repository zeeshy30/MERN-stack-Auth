import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import style from "./index.module.scss";
import animate from "../../../../../Assets/account-animate.svg";
const setPasswordFormComponent = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();

    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        props.handleSubmit(values);
      }
    });
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <object
            type="image/svg+xml"
            data={animate}
            className={style.animate}
            viewbox="0 0 120 120"
          >
            svg-animation
          </object>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form onSubmit={handleSubmit}>
            <h2 className={style.authHeader}>
              {props.isTokenValid ? "Set Password" : "Your Token has expired "}
            </h2>
            {!props.isTokenValid && (
              <h3 className={style.authHeader}>
                Click the button to generate a new token
              </h3>
            )}
            {props.isTokenValid && (
              <>
                <Form.Item
                  {...(props.passIsError && {
                    help: props.passErrorMessage,
                    validateStatus: "error"
                  })}
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your Password!" }
                  ]}
                  style={{
                    width: "60%",
                    marginLeft: "150px"
                  }}
                >
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your password!" }
                    ]
                  })(<Input type="password" placeholder="Password" />)}
                </Form.Item>
                <Form.Item
                  {...(!props.passwordsMatched && {
                    help: "Password do not match",
                    validateStatus: "error"
                  })}
                  name="confirmPassword"
                  rules={[
                    { required: true, message: "Please enter your Password again!" }
                  ]}
                  style={{
                    width: "60%",
                    marginLeft: "150px"
                  }}
                >
                  {getFieldDecorator("confirmPassword", {
                    rules: [
                      { required: true, message: "Please input your password again!" }
                    ]
                  })(<Input type="password" placeholder="Confirm Password" />)}
                </Form.Item>
              </>
            )}
            <Form.Item>
              <Button
                loading={props.isLoading}
                type="primary"
                style={{
                  width: "50%",
                  marginLeft: "190px"
                }}
                htmlType="submit"
              >
                {props.isTokenValid ? "Submit" : "Resend"}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export const SetPasswordForm = Form.create({ name: "setPasswordForm" })(
  setPasswordFormComponent
);
