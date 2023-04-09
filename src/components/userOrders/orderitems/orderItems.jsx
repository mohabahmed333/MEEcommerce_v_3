import { Table } from "antd"


const OrderItems =({items})=>{
    console.log(items)
return(

    <>
    
    <Table striped bordered hover>
      <thead>
        <tr>
           <th>#</th>
          <th>Image</th>
            <th>name</th>
           <th>price</th>
           <th>quantity</th>
        </tr>
      </thead>
      <tbody>
        {/* {items.orderDetails.length!==0?items.map((item,idx)=>{
            return(
                <tr>
                 </tr>
            )
        }):null} */}
        </tbody>
        </Table>
    </>
)


}
export default OrderItems