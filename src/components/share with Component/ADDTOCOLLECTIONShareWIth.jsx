 import { Modal ,Offcanvas} from 'react-bootstrap';
 import{useState,useEffect} from 'react'
import './box.scss'
const ShareWIthADD = ({isModalOpen,setModel}) => {
  const [match, setMatch]=useState(false)

    const handleCancel = () => {
        setModel(false);
      };
useEffect(()=>{
  function myFunction(x) {
    if (x.matches) { // If media query matches
setMatch(true)
} else {
setMatch(false)
       
    }
  }
  
  const  x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction);
},[])

  return (
    <>
  {match?  <Offcanvas show={isModalOpen} onHide={handleCancel} placement='bottom' style={{
    height:'fit-content',
    borderRadius: '22px 22px 0px 0px'
    }}>
        <Offcanvas.Header closeButton>
         </Offcanvas.Header>
        <Offcanvas.Body>
        <p class="share_header">
            Add To
        </p>
        <div class="share_box_inner">
            <p>Add To WishList</p><i class="fa-regular fa-heart"></i>
        </div>
        <div class="share_box_inner">
            <p>Add To Collection</p><i class="fa-regular fa-bookmark"></i>  
         </div>
        <p class="share_header">
            Share With
        </p>
        <div className='mobile_flex'>

        <div class="share_box_inner">
           <i class="fa-brands fa-facebook"></i>
        </div>
        <div class="share_box_inner">
           <i class="fa-brands fa-facebook-messenger"></i>
        </div>
        <div class="share_box_inner">
            <i class="fa-brands fa-instagram"></i>
        </div>
        <div class="share_box_inner">
           <i class="fa-brands fa-whatsapp"></i>
        </div>
        </div>

        

         </Offcanvas.Body>
      </Offcanvas>:
      <Modal show={isModalOpen} onHide={handleCancel }title="Menu"  onCancel={handleCancel }>
      <Modal.Header closeButton></Modal.Header>
        <Modal.Body  >

      <div class="share_box">
      <p class="share_header">
            Add To
        </p>
        <div class="share_box_inner">
            <p>Add To WishList</p><i class="fa-regular fa-heart"></i>
        </div>
        <div class="share_box_inner">
            <p>Add To Collection</p><i class="fa-regular fa-bookmark"></i>  
         </div>
        <p class="share_header">
            Share With
        </p>
        <div class="share_box_inner">
            <p>facebook</p>  <i class="fa-brands fa-facebook"></i>
        </div>
        <div class="share_box_inner">
            <p>Messanger</p>  <i class="fa-brands fa-facebook-messenger"></i>
        </div>
        <div class="share_box_inner">
            <p>instgram</p>  <i class="fa-brands fa-instagram"></i>
        </div>
        <div class="share_box_inner">
            <p>whatsapp</p><i class="fa-brands fa-whatsapp"></i>
        </div>
        

    </div>
    
    </Modal.Body>
    
      </Modal>}
    </>
  );
};
export default ShareWIthADD;