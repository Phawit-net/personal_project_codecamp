import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import './ProfileCard.css';
import { Link, withRouter } from 'react-router-dom';

export default class ProfileCard extends Component {
 
  render() {
    return (
      <div>
        <Menu
          // selectedKeys ={null}
          mode="inline"
          style={{ width: 130}}>
          <Menu.Item key="1">
            <div style={{display:'flex',alignItems:'center'}}>
              <a id ="addLink" href='/Add'>
                <Icon type="cloud-upload" style={{fontSize:'20px'}} />
                Add 3d Model
              </a>
            </div>
          </Menu.Item>
          <Menu.Item key="2">
            <div style={{display:'flex',alignItems:'center'}}>
              <a id ="addLink" href='/add'>
                <Icon type="setting" style={{fontSize:'20px'}}/>
                Setting
              </a>
            </div>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
