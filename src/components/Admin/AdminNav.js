import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/lib/menu/style/index.css'
import 'antd/lib/dropdown/style/index.css'
// import 'antd/lib/icon/style/css.js'
import 'antd/lib/anchor/style/index.css';
import { Link } from 'react-router-dom';

export default class AdminNav extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item>
                <Link to='/adminaddproduct'> Admin Add Product </Link>
              </Menu.Item>
              <Menu.Item>
              <Link to='/admineditproduct'> Admin Edit Product </Link>
              </Menu.Item>
              <Menu.Item>
              <Link to='/admindata'> Admin Data </Link>
              </Menu.Item>
            </Menu>
          );
          
        return (
            <Dropdown overlay={ menu }>
                <a className="ant-dropdown-link" href="#">
                    Admin <Icon className="ant-dropdown-link" type="down" />
                </a>
            </Dropdown>
        );
    }
}