import { Button, Drawer } from 'antd';
import React, { useContext } from 'react';
import { WishListContext } from '../../../contexts/wishList';
const DrawerComponent = ({children}) => {

const {isOpen ,setIsOpen} = useContext(WishListContext)
const onClose = () => {
  setIsOpen(false)
};
  return (
    
    <Drawer title="WishList" placement="right" onClose={onClose}    visible={isOpen}>
      {children}
    </Drawer>
    
    
  );
};

export default DrawerComponent;