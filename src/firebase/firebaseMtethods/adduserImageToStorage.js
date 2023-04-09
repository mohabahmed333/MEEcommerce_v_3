import { getStorage, ref ,uploadBytes,getDownloadURL, deleteObject} from "firebase/storage";
import { addUserDataBase } from "./adduserData";


export const adduserImageToStorage =async (image,user)=>{
    if(!image)return;
    const storage = getStorage();
    const {id}=user;
     try{
         const ImageRef = ref(storage,`images/${id}`);
         console.log(ImageRef)
        //  await deleteObject(ImageRef) 
        const uploadImageToFireBase = await uploadBytes(ImageRef,image );
         const imageDownloadUrl = await getDownloadURL(uploadImageToFireBase.ref);
         console.log(imageDownloadUrl)
        return{
            imageDownloadUrl,
            user
        }
     }catch(err){
        console.log(err)
     }
  
      

}