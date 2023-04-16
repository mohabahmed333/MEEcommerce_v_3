import { Collapse, Drawer, Empty, Input, Modal, Radio, Space } from "antd"
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import TimeLineComponent from "../../TimeLine/TimeLine.component"
import TextArea from "antd/es/input/TextArea";
const { Panel } = Collapse;

const OurderInfo = ({order})=>{

  const [value, setValue] = useState(1);
const onChange = (e) => {
  // console.log('radio checked', e.target.value);
  setValue(e.target.value);
  console.log({...order,cancelOrder:e.target.value,canceled:true})
  console.log(e
  )
  console.log(e.target);
  document.querySelector(e.target)



};
const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = () => {
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
};
 return(
    <>
{ Object.keys(order).length === 0?<Empty/>:


<div className="container">
<h5>order Inferomation</h5>
<div className="userInf">
 
      <Modal title="Cansel Reason" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio name='radio1' value={'Too much waiting'}>Too much waiting </Radio>
        <Radio name='radio2' value={'having issue with order'}>having issue with order</Radio>
        <Radio  name='radio3' value={'not Interesting any more'}>not Interesting any more</Radio>
        <Radio name='radio4' value={4}>
          Another Reason 
          {value === 4 ? <div>
            <TextArea onChange={(e)=>setValue(e.target.value)}   name='radio4' style={{ width: '100%', marginLeft: 10,border:'1px solid #ddd'}}
             placeholder="reason"/>

          </div>  : null}
        </Radio>
      </Space>
    </Radio.Group>
      </Modal>
 
<Collapse defaultActiveKey={['1','2','3']} bordered={false}   >
      <Panel className="position-sticky" style={{top:'100px',background:'#fff'}} header="user Inferomation" key="1" >
      <div className="d-flex justify-content-between">

<h6> <i style={{fontSize:'10px', }}className="fa-regular fa-user me-3"></i>customer name</h6>
<p>{order.userInferomation['first-name']}</p>
</div>


<div className="d-flex justify-content-between">

 <h6> <i style={{fontSize:'13px', }} className="me-3 fa-regular fa-envelope"></i> Email Address</h6>
<p>{order.userInferomation['email-address']}</p>
</div>

<div className="d-flex justify-content-between"> 
<h6><i className="fa-regular fa-address-book me-3"></i> Address </h6>
<p>{order.userInferomation['street-address']}</p>

</div>
      </Panel>



<Panel className="position-sticky" style={{top:'100px',background:'#fff'}} key="2"header="Order Details">
<div className="d-flex justify-content-between">
<h6><i className="fa-regular fa-calendar-days"></i> purchesed At </h6>
<p>01/1/2023</p>
</div>
<div className="payment">
 <div className="d-flex justify-content-between">
<h6>payment cart </h6>
<p>Visa</p>

</div>

<div className="d-flex justify-content-between">
 <p>amount {order.orderDetails.total} </p> <p>quantity {order.orderDetails.quantity}</p>
  </div>
  <p className="payment_success d-flex justify-content-between align-items-center ">payment status : <span className="text-success">success <i className="fa-solid fa-check"></i></span> </p>
</div>
 
</Panel>
<Panel className="position-sticky" style={{top:'100px',background:'#fff'}}  header="items" key="3">
<Table>
<thead>
        <tr>
    <th>        #     </th>
    <th>        image      </th>
    <th>        item name      </th>
    <th>        price      </th>
    <th>quantity </th>

</tr>
</thead>
<tbody>
    {order.orderDetails.items.map((item,idx)=>{
        return(

            <tr key={item.name}>
                <td>{idx++}</td>
                <td><img  style={{width:'39px',opacity:0.8,borderRadius:'6px'}} src={item.imageUrl}/></td>
                <td>{item.name}</td>
                <td>{item.price} </td>
                <td>{item.quantity} </td>
            </tr>
        )
     })}
</tbody>
</Table>
</Panel>
<Panel className="position-sticky" style={{top:'100px',background:'#fff'}} header="Order Process" key="4">
<div className="timeLine">
 <h6  className='mb-3 '>order process</h6>
<TimeLineComponent/>
</div>
</Panel>

      </Collapse>

<div className="cansel d-flex justify-content-end">

    <Button variant="outline-danger" onClick={showModal}  className="mb-3"  size="sm"> cansel Order </Button>
</div>

 </div>


   </div>
}
     
    </>
)


}
export default OurderInfo