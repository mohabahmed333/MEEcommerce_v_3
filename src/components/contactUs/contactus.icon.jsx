import './contactus.icon.styles.scss'
 
import './contactform.scss'
import { Button, Input } from 'antd'
import { useState } from 'react'
 
export const ContactIcon =({user})=>{
 const InintializingForm =  {
  email :'',
  message:''
}
     const [Messageform,SetMessageForm]= useState(InintializingForm);
    const{email,message}= Messageform;
   
const HandleChange = (event)=>{
  const {value,name}=event.target;
 SetMessageForm({...Messageform,[name]:value});
}
 
    return(
        <>
     
      <button className="chatbox-open">
      <i className="fa-solid fa-message"></i>
  </button>
<button className="chatbox-close">
    <i className="fa fa-close fa-2x" aria-hidden="true"></i>
  </button>
<section className="chatbox-popup">
  <header className="chatbox-popup__header">
    <div style= {{flex:3 }}>
    <img  id='user_image' src={user!==null&&user.imageUrl}   />    
    
      {/* <i className="fa fa-user-circle fa-4x chatbox-popup__avatar" aria-hidden="true"></i> */}
    </div>
    <div style={{flex:'8'}}>
      <h1>Welcom Back! {user!==null && user.displayName}</h1> Customer  
    </div>
    {/* <div style={{flex:1}}>
      <button className="chatbox-maximize"><i className="fa fa-window-maximize" aria-hidden="true"></i></button>
    </div> */}
  </header>
  <main className="chatbox-popup__main">
    We make it simple and seamless for<br/> customers and people to ask  <br/>  Ask us anything.
  

  </main>
  <footer className=" ">


    <form>
    <div className='email_typung'>

<Input 
      onChange={HandleChange}
      name='email'
      value={email}
 type="email" placeholder="Type your Email here..." autofocus/> 
  </div>
  <hr />
    <div  >
      <textarea 
      onChange={HandleChange}
      name='message'
      value={message}
       type="text" placeholder="Type your message here..." autofocus/> 
      <div style={{display:'flex',justifyContent:'space-around',
      margin:'10px' ,color:'#888' ,textAlign:'center'}} >
            <Button style={{flex:1,color:'#888',textAlign:'center'}}>
     Add Attachments <i className="fa fa-camera" aria-hidden="true"></i>
    </Button>
    <Button type='submit' className='primary' style={{flex:1}}>

     send <i className="fa fa-paper-plane" aria-hidden="true"></i>
    </Button>
    </div>
    </div>
   
    </form>
    
  </footer>
</section>
<section className="chatbox-panel">
  <header className="chatbox-panel__header">
    <div style={{flex:"3"}}>
      <i className="fa fa-user-circle fa-3x chatbox-popup__avatar" aria-hidden="true"></i>
    </div>
    <div style= {{flex:"6"}} >
      <h1>Sussanah Austin</h1> Agent (Online)
    </div>
    <div style= {{flex:3 ,textAlign:'right' }}>
      <button className="chatbox-minimize"><i className="fa fa-window-restore" aria-hidden="true"></i></button>
      <button className="chatbox-panel-close"><i className="fa fa-close" aria-hidden="true"></i></button>
    </div>
  </header>
  <main className="chatbox-panel__main" style={{flex:1}}>
    ANY Inqueries <br/> bussiness and people to talk to each<br/> other. Ask us anything.

  </main>
  <footer className="chatbox-panel__footer">
    
    <div style={{flex:1,color:'#888',textAlign:'center'}}>
      <i className="fa fa-camera" aria-hidden="true"></i>
    </div>
    <div style={{flex:10}}>
      <textarea type="text" placeholder="Type your message here..."
      onChange={HandleChange}
      autofocus></textarea>
    </div>
    <div style= {{flex:'1',color:'#888',textAlign:'center'}} >
      <i className="fa fa-paper-plane" aria-hidden="true"></i>
    </div>
  </footer>
</section>
 
 
   
 
</>
    )
}