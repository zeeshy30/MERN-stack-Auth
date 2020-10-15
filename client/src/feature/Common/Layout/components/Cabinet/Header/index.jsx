import React from "react";
import PropTypes from "prop-types";
import { Menu, Icon } from "antd";

import style from "./index.module.scss";

const { SubMenu } = Menu;

const HeaderComponent = ({ user, logout }) => {
  return (
    <div style={{ padding: 14 }}>
      <div className={style.logo} />
      <Menu
        theme="light"
        mode="horizontal"
        style={{ lineHeight: "64px", borderRadius: 20 }}
      >
        <SubMenu
          style={{ float: "right" }}
          key="username"
          title={
            <span>
              <Icon type="user" />
              {user.name} ({user.email})
            </span>
          }
        >
          <Menu.Item onClick={() => logout()} key="1">
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

HeaderComponent.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export const Header = HeaderComponent;
