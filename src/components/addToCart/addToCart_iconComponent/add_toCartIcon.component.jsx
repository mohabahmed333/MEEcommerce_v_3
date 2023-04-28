import{ReactComponent as ShoppingIcon} from '../../../assets/cart.svg';
import './addToCart_icon.scss';
 
export const CartIcon =({...props})=>{
     const {totalcart} = {...props};
     
    return(<div className='cart-icon-container'>

        <ShoppingIcon className="shopping0icon " {...props}/>
        {
          <div className"marquee">
          <div>
            <span>You spin me right round, baby. Like a record, baby.</span>
            <span>You spin me right round, baby. Like a record, baby.</span>
          </div>
        </div>
        }
        <span className="item-count">{totalcart}</span>
    </div>)

}