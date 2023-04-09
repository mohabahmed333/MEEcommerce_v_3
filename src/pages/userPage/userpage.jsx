import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Tabs } from 'antd';
import { useSelector } from 'react-redux';
import { UserDetails } from '../../components/userDetails/userDetails';
import { UserOrders } from '../../components/userOrders/userorders';
import WishListContainer from '../../components/wishList.components/wishlist.component';
import { userSelectMemo } from '../../store/user/user.selector';
import { WishListContainerStyle } from './userpage.styles';


const UserPage = () => {
  const user= useSelector(userSelectMemo);
  if(!user)return;
 return( 
 <div className='container-fluid'>

 <Tabs defaultActiveKey="1">
  <Tabs.TabPane tab="INFO" key="1">
<UserDetails user={user}/>

  </Tabs.TabPane>
  <Tabs.TabPane tab="WISHLIST" key="2">
    <WishListContainerStyle/>
  </Tabs.TabPane>
  <Tabs.TabPane tab="orders" key="3">
<UserOrders orders={user.orders}/>

  </Tabs.TabPane>
</Tabs>
</div>

)

}

export default UserPage;