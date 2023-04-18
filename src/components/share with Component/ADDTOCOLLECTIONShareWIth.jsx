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
        <p className="share_header">
            Add To
        </p>
        <div className="share_box_inner">
            <p>Add To WishList</p><i className="fa-regular fa-heart"></i>
        </div>
        <div className="share_box_inner">
            <p>Add To Collection</p><i className="fa-regular fa-bookmark"></i>  
         </div>
        <p className="share_header">
            Share With
        </p>
        <div className='mobile_flex'>

        <div className="share_box_inner">
           <i className="fa-brands fa-facebook"></i>
        </div>
        <div className="share_box_inner">
           <i className="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className="share_box_inner">
            <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="share_box_inner">
           <i className="fa-brands fa-whatsapp"></i>
        </div>
        </div>

        

         </Offcanvas.Body>
      </Offcanvas>:
      <Modal show={isModalOpen} onHide={handleCancel }title="Menu"  onCancel={handleCancel }>
      <Modal.Header closeButton></Modal.Header>
        <Modal.Body  >

      <div className="share_box">
      <p className="share_header">
            Add To
        </p>
        <div className="share_box_inner">
            <p>Add To WishList</p><i className="fa-regular fa-heart"></i>
        </div>
        <div className="share_box_inner">
            <p>Add To Collection</p><i className="fa-regular fa-bookmark"></i>  
         </div>
        <p className="share_header">
            Share With
        </p>
        <div className="share_box_inner">
            <p>facebook</p>  <i className="fa-brands fa-facebook"></i>
        </div>
        <div className="share_box_inner">
            <p>Messanger</p>  <i className="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className="share_box_inner">
            <p>instgram</p>  <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="share_box_inner">
            <p>whatsapp</p><i className="fa-brands fa-whatsapp"></i>
        </div>
        

    </div>
    
    </Modal.Body>
    
      </Modal>}
    </>
  );
};
export default ShareWIthADD;