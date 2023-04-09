import { Modal } from "react-bootstrap"

export const Collection =({open,setOpen})=>{



    return <Modal show={open} onHide={()=>setOpen(false)}>

<Modal.Body>
<div class="collection">
        <p>collections</p>
        <!-- <p>there 's no collecton yet </p> -->
<ul>
    <li class="co_item">
first
    </li>
    <li class="co_item">
first
    </li>
    
    
</ul>
<div class="collections_uttons">

    <button class="add_TO_collection ">
        add New Collection <i class="fa-solid fa-plus"></i>
    </button>
    <button class="add_TO_collection">
        Go To Collections  Page
    </button>
</div>
<div class="collection_add_input">
    <input class="co_add_button" placeholder="title"/>
    <button class="button_save_collections">add</button>
</div>
    </div>


</Modal.Body>


    </Modal>


}




