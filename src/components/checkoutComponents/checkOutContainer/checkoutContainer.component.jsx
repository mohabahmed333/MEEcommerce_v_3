import { Steps } from 'antd';
import React, { useContext, useState } from 'react';
import{CheckOutForm} from '../checkOutForm/checkOutForm.component'
import{CheckOutSubmit} from '../checkOutSubmit/checkOutSubmit.component'
import { CheckOutCard } from '../checkOutCard/checkOutCard';
import { checkOutContext } from '../../../contexts/checkout.context';


const CheckOutContainer=()=>{
  const CheckoutComponents = [CheckOutCard,CheckOutForm,CheckOutSubmit]
    const { Step } = Steps;

    const steps = [
        {
          title: 'card',
        },
        {
          title: 'Order Details',
        },
        {
          title: 'checkout submit',
        },
      ];
    const {current} = useContext(checkOutContext);
    // setstep(steps)

    // const [current, setCurrent] = useState(0);
    const Component = CheckoutComponents[current];
    // const next = () => {
    //   setCurrent(current + 1);
    // };
  
    // const prev = () => {
    //   setCurrent(current - 1);
    // };
  
    return(
        <>
        <Steps current={current} className="position-sticky" style={{top:'60px',zIndex:4,flexDirection:'row',background:'#fff'}}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      
        <div className="steps-content">
        <div className="wrapper wrapper-content animated fadeInRight">
         
        {     

            ( <Component/>)
           }
   

        </div>
            </div>


      </>
       
        
    )
}
export default CheckOutContainer