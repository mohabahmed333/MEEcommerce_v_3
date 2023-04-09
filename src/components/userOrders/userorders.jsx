 import {useState} from 'react';
import { Table } from 'react-bootstrap';
import ImageWithText from '../ImageWithText/ImageWithText';
import Image from '../../assets/105560-no-product.gif'
import DateContainer from '../DateContainer/DateContainer';
import AutoCompleteSearchBar from '../AutoComplet sesearchContainer/AutoCompletSearchBar';
import './userOrder.scss';
import { Button, Empty, Tabs } from 'antd';
import TimeLineComponent from '../TimeLine/TimeLine.component';
import OurderInfo from './orderInferomaton/orderInfo';
import OrderItems from './orderitems/orderItems';

export const UserOrders = ({orders}) => {
const [UserOrdersArray,SetUserOrders]=useState([]);
const [product,setproduct]
=useState({})
  // {orders.map(item=>(<tr></tr>)}
    let totalOrders =0;
     const i = 0;
    if(orders.length!==0){
      // SetUserOrders(orders);
      // console.log(orders,UserOrdersArray)
      orders.forEach(ite => {
      const {orderDetails}= ite;
        console.log(orderDetails.quantity)
        totalOrders = orderDetails.quantity
      });
    }
    const HandleProductPreview = (item)=>{
      console.log(item)
      setproduct(item)
    }
    console.log(product)
    return(
    <>
    {orders.length===0?<ImageWithText image={Image} text={"there's no orders yet"}/>:

    <>

{/* total orders */}

{/* <div>orders{totalOrders} <i class="fa-solid fa-bag-shopping"></i></div> */}


<div className="row">
  <div className="col-md-8 ">
      <div className="order_details_table_container position-sticky"  style={{top:'100px'}}>
  <div className='filter_byDate'>
          <DateContainer/>
        </div>

      <div className="searchBar d-flex justify-content-center mt-3 mb-3 w-100 ">
          <AutoCompleteSearchBar className=" w-100"/>
        </div>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Total Products</th>
          <th>price</th>
            <th>Deleiveried</th>
           <th>Address</th>
           <th>Order Details</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item,idx)=>{ 
        
      
       
          return(
            <tr key={item.id}>
  <td>{idx++}</td>
  <td> {item.orderDetails.quantity} Products</td>
  <td> {item.orderDetails.total} $</td>
  <td> {item.deliveried?'Delivery':<p>no</p>} </td>
  <td> {item.userInferomation['street-address']} </td>
  <td>
                <Button className='primary' onClick={HandleProductPreview.bind(null,item)}   type='text'>Details<i class="fa-regular ms-2 fa-pen-to-square"></i></Button>
                </td>
            </tr>
            // <tr key={itemI.id}>
            //   <td>{idx++}</td>
            //   <td>{itemI.name}</td>
          
             
            //   <td>{itemI.price}</td>
           
            
            //   <td>{itemI.quantity }</td>
            //   <td>{item.deliveried?'delivered':'Pending' }</td>
            //   <td>{item.userInferomation['street-address'] }</td>
          
             
            //  </tr>
        
          )
     
        })}
 
      </tbody>
    </Table>
    </div>

  </div>

  {/* <Tabs ite */}
  <div className="col-md-4 orderDetails">
  <OurderInfo order={product}/>
  
 
  </div>
</div>

  
    </>
     }
    </>)
}
