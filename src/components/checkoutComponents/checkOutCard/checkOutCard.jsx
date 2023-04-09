 import CheckOutItem from '../checkOutItem/checkOutItem.component';
 import { useSelector } from 'react-redux';
import { cartItems, totalCart, totalPaid } from '../../../store/cart/cart.selector';
import { checkOutContext } from '../../../contexts/checkout.context';
import { useContext } from 'react';
import { Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { userSelectMemo } from '../../../store/user/user.selector';
import ImageWithText from '../../ImageWithText/ImageWithText';
import imgToats from '../../../assets/112087-empty.gif'
import { getNodeText } from '@testing-library/react';
import './checkOutCard.scss'
export const CheckOutCard = () => {
    const { current,next,steps} = useContext(checkOutContext)
    const user = useSelector(userSelectMemo)
const totalcart = useSelector(totalCart);
const items = useSelector(cartItems);
const totalpaid = useSelector(totalPaid);
const cartItemsN=()=>{
    if(user&&user.cart.length!==0){
        const {cart:cart}=user;
        return{
            totalcart:cart.cart.quantity,
            totalPaid:cart.cart.total,
            items:cart.cart.items
        }
 
        
    }
    return{  totalcart,
        items,
        totalpaid
    }

}
const goNext = ()=>{
        if(cartItemsN().items.length === 0 ){
            return message.error('your cart empty')
        }
        else{
next()
        }
}
    return (
        <div className="container mt-3">
            <div className="row">

                <div className="col-md-9">
                    <div className="ibox ">
                        <div className="ibox-title">
                            <span className="pull-right">(<strong>{cartItemsN().totalcart}</strong>) items</span>
                            <h5>Items in your cart</h5>
                        </div>
                        <div className="ibox-content">
                            <div className="table-responsive">
                                <table className="table shoping-cart-table">
                                    <tbody>
                                        {
                                        cartItemsN().items.length === 0 ?
                                        (<ImageWithText image={imgToats} text={'there is no item in cart yet !'}/> ) 
                                        :
                                            (cartItemsN().items.map(item => {


                                               return (<CheckOutItem key={item.id}
                                                 length={cartItemsN().items}
                                                CartItem={item} />)


                                            }))

                                        }

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="ibox position-sticky">
                        <div className="ibox-title">
                            <h5>Cart Summary</h5>
                        </div>
                        <div className="ibox-content">
                            <span>
                                Total
                            </span>
                            <h2 className="font-bold">
                                {cartItemsN().totalPaid}
                            </h2>

                            <span className="text-muted small">
                                *For United States, France and Germany applicable sales tax will be applied
                            </span>
                            <div className="m-t-sm">
                                <div className="btn-group">
                                {current < steps - 1 && (
                                    <>
                                        <button   className="btn btn-primary btn-sm" 
                                        // disabled={cartItems.lengt    ===0?true:false}
                                        onClick={() =>goNext()}>
                                        <i className="fa fa-shopping-cart"></i> Order Detals</button>
                                       <Link to="/shop" className="btn btn-white btn-sm"> Back TO SHOP</Link>
                                    </>)}     
                           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}