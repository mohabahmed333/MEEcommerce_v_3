import { Modal } from "react-bootstrap"

export const Collection =({open,setOpen})=>{



    return <Modal show={open} onHide={()=>setOpen(false)}>

<Modal.Body>
<div className"collection">
        <p>collections</p>
        <!-- <p>there 's no collecton yet </p> -->
<ul>
    <li className"co_item">
first
    </li>
    <li className"co_item">
first
    </li>
    
    
</ul>
<div className"collections_uttons">

    <button className"add_TO_collection ">
        add New Collection <i className"fa-solid fa-plus"></i>
    </button>
    <button className"add_TO_collection">
        Go To Collections  Page
    </button>
</div>
<div className"collection_add_input">
    <input className"co_add_button" placeholder="title"/>
    <button className"button_save_collections">add</button>
</div>
    </div>


</Modal.Body>


    </Modal>


}




