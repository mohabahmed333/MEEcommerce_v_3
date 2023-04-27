import { Upload } from 'antd';
 import React, { useState } from 'react';
 import ImgCrop from 'antd-img-crop';
import { addUserDataBase } from '../../../firebase/firebaseMtethods/adduserData';
import { adduserImageToStorage } from '../../../firebase/firebaseMtethods/adduserImageToStorage';
import { useDispatch, useSelector } from 'react-redux';
import { UploadUserImageStart } from '../../../store/user/user.actions';
import { userSelectMemo } from '../../../store/user/user.selector';

const FileUpladManger = ({user}) => {
  const dispatch = useDispatch();
   if(!user)return;

   const onChange = ({fileList}) => {
 
    dispatch(UploadUserImageStart(fileList[0].originFileObj,user))
   };

  const onPreview = async (file) => {
    let src = file.url;
     if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();

        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
         listType="picture-card"
         onChange={onChange}
        onPreview={onPreview}
        showUploadList={false}

      >
     Upload
       </Upload>
    </ImgCrop>
  );
};

export default FileUpladManger;