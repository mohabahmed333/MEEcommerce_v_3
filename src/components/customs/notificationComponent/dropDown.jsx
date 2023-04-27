import { Avatar,   Image, Menu, Space } from 'antd';
import React from 'react';
import{UserOutlined,SettingOutlined,LogoutOutlined}from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SIGNUSEROUT_Start } from '../../../store/user/user.actions';
 import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import './drop.scss'
export const DropDown = ({user,position}) => {
  const dispatch =useDispatch();
  if(!user)return;

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
  return(
  <>
  <Space direction="vertical">
    <Space wrap>
   <>
   <Dropdown  placement={position}>
   <Dropdown.Toggle variant="success" id="dropdown-basic">
   {user.imageUrl?
<Avatar  src={`${user&&user.imageUrl&&user.imageUrl}`}  style={{cursor:'pointer'}} /> :
<Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
{user&&user.displayName?user.displayName[0]:null}</Avatar>

 


}
      </Dropdown.Toggle>
        <DropdownMenu>
        <Link className='drop_link' to='/user'>
           profile  
           <UserOutlined/>
        </Link>
        <p className='drop_link' onClick={signUserOut} rel="noopener noreferrer">
            signOut<LogoutOutlined />
          </p>
          <Link className='drop_link' to='/usersetting'>
            Account settings <SettingOutlined />
          </Link>
        </DropdownMenu>


{/* <Button>{user.displayName} <UserOutlined /></Button> */}
</Dropdown></>
   
    </Space>
  
  </Space></>)
}
