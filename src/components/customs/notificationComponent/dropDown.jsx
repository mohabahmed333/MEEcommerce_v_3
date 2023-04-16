import { Avatar, Dropdown, Image, Menu, Space } from 'antd';
import React from 'react';
import{UserOutlined,SettingOutlined,LogoutOutlined}from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SIGNUSEROUT_Start } from '../../../store/user/user.actions';
 

export const DropDown = ({user,position}) => {
  const dispatch =useDispatch();
  if(!user)return;
  console.log(user)
  const signUserOut = ()=>{
    dispatch(SIGNUSEROUT_Start())
  }
 const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <Link  to='/user'>
           profile  
           <UserOutlined/>
        </Link>
        ),
      },
      {
        key: '2',
        label: (
          <p  onClick={signUserOut} rel="noopener noreferrer">
            signOut<LogoutOutlined />
          </p>
        ),
      },
    
      {
        key: '3',
        label: (
          <Link  to='/usersetting'>
            Account settings <SettingOutlined />
          </Link>
      
        ),
      },
    ]}
  />
);
  return(<Space direction="vertical">
    <Space wrap>
      <Dropdown menu={menu} placement={position}>
        {user.imageUrl?
      <Avatar  src={`${user&&user.imageUrl&&user.imageUrl}`}  style={{cursor:'pointer'}} /> :
      <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
        {user&&user.displayName?user.displayName[0]:null}</Avatar>




        }

        {/* <Button>{user.displayName} <UserOutlined /></Button> */}
      </Dropdown>
   
    </Space>
  
  </Space>)
}
