import React from "react";
import PropTypes from "prop-types";
import { SetPasswordForm } from "../components/SetpasswordForm";
import { connect } from "react-redux";
import {
  setPasswordRequest,
  checkTokenValidity,
  renewToken,
} from "../actions";
import { withRouter } from "react-router-dom";

import { Row, Col, Typography, Button } from "antd";
import animate from "../../../../Assets/account-animate.svg";
import { ReactComponent as ReactLogo } from "../../../../Assets/tick.svg";

import style from "./index.module.scss";

class SetPassword extends React.Component {
  state = { passwordsMatched: true };

  componentDidMount() {
    const { id, token } = this.props.match.params;
    this.props.checkTokenValidity({ token: token, id: id });
  }

  handleSubmit = (values) => {
    const { id, token } = this.props.match.params;
    if (values.password != values.confirmPassword) {
      this.setState({ passwordsMatched: false });
      return;
    }

    this.setState({ passwordsMatched: true });
    if (this.props.isTokenValid) {
      this.props.setPasswordRequest({ password: values.password, token, id });
    } else {
      !this.props.isTokenValid && this.props.renewToken({ token, id });
    }
  }

  componentDidUpdate() {
    if ((!this.props.isTokenValid && this.props.tokenValidityErrorStatus !== 401)
        || this.props.isSuccess) {
      this.props.history.push("/");
    }
  }

  render() {
    return !this.props.checkingValidity && (
      <div className={style.setPasswordWrapper}>
        {this.props.newTokenSent ? (
          <>
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
                this.props.history.push("/");
              }}
              style={{
                width: "20%",
                marginLeft: "315px",
                marginTop: "20px"
              }}
            >
              Login
            </Button>
          </>
        ) : (
          <SetPasswordForm
            handleSubmit={this.handleSubmit}
            isLoading={this.props.isLoading || this.props.isSendingNewToken}
            isTokenValid={this.props.isTokenValid}
            passwordsMatched={this.state.passwordsMatched}
            passIsError={this.props.isError}
            passErrorMessage={this.props.errorMessage}
            emailIsError={this.props.newTokenSendingFailed}
            emailErrorMessage={this.props.errorMessageNewToken}
          />
        )}
      </div>
    );
  }
};

SetPassword.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  setPasswordRequest: PropTypes.func.isRequired,

  checkingValidity: PropTypes.bool.isRequired,
  isTokenValid: PropTypes.bool.isRequired,
  tokenValidityErrorStatus: PropTypes.number.isRequired,
  checkTokenValidity: PropTypes.func.isRequired,

  isSendingNewToken: PropTypes.bool.isRequired,
  newTokenSent: PropTypes.bool.isRequired,
  newTokenSendingFailed: PropTypes.bool.isRequired,
  errorMessageNewToken: PropTypes.string.isRequired,
  renewToken: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.auth.setPassword.isLoading,
  isAuth: state.auth.signin.isAuth,
  isError: state.auth.setPassword.isError,
  isSuccess: state.auth.setPassword.isSuccess,
  errorMessage: state.auth.setPassword.errorMessage,

  checkingValidity: state.auth.tokenValidity.isLoading,
  tokenValidityErrorStatus: state.auth.tokenValidity.errorStatus,
  isTokenValid: !state.auth.tokenValidity.isError,

  isSendingNewToken: state.auth.renewToken.isProcessing,
  newTokenSent: state.auth.renewToken.isSuccess,
  newTokenSendingFailed: state.auth.renewToken.isError,
  errorMessageNewToken: state.auth.renewToken.errorMessage,
});

export const SetPasswordContainer = withRouter(
  connect(
    mapStateToProps,
    {
      setPasswordRequest,
      checkTokenValidity,
      renewToken
    }
  )(SetPassword)
);
