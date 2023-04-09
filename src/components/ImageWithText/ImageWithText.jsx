

const ImageWithText = ({image,text,width,height})=>{
return(
    <>
<h3>{text}</h3>
<img src={image} alt={text} width={width} height={height} style={{widht:width!==''?width: '100%'}}/>
</>

)
}
export default ImageWithText;