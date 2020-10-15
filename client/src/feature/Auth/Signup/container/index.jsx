import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { SignupForm } from "../components/SignupForm";
import { connect } from "react-redux";
import { signupRequest } from "../actions";
import { withRouter, Link } from "react-router-dom";
import style from "./index.module.scss";
import { Row, Col, Typography, Button } from "antd";
import animate from "../../../../Assets/account-animate.svg";
import { ReactComponent as ReactLogo } from "../../../../Assets/tick.svg";
const Signup = props => {
  useEffect(() => {
    props.isAuth && props.history.push("/home");
  });

  return (
    <div className={style.signupFormWrapper}>
      {props.isSuccess ? (
        // <div className={style.authHeader}>
        //   <h1>Success</h1>
        //   <p>A password is sent to your email address.</p>
        //   <p>
        //     Go to <Link to="/">Sign in</Link>
        //   </p>
        // </div>
        <div>
          <Row>
            <Col span={24}>
              <object
                type="image/svg+xml"
                data={animate}
                className={style.animate}
                viewbox="0 0 1200 1200"
              >
                svg-animation
              </object>
            </Col>
          </Row>
          <Row style={{ marginLeft: "300px" }}>
            <Col span={2}>
              <ReactLogo style={{ width: "20px", height: "20px" }} />
            </Col>
            <Col span={22}>
              <Typography>Email sent successfully.</Typography>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", marginLeft: "200px" }}>
            <Col span={20}>
              <Typography>
                Please follow the steps as described in email for further
                registration.
              </Typography>
            </Col>
          </Row>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              props.history.push("/");
            }}
            style={{
              width: "20%",
              marginLeft: "315px",
              marginTop: "20px"
            }}
          >
            Login
          </Button>
        </div>
      ) : (
        <SignupForm
          onSubmit={props.signupRequest}
          isLoading={props.isLoading}
          isError={props.isError}
          errorMessage={props.errorMessage}
        />
      )}
    </div>
  );
};

Signup.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  signupRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.auth.signup.isLoading,
  isAuth: state.auth.signin.isAuth,
  isError: state.auth.signup.isError,
  isSuccess: state.auth.signup.isSuccess,
  errorMessage: state.auth.signup.errorMessage
});

export const SignupContainer = withRouter(
  connect(mapStateToProps, { signupRequest })(Signup)
);
