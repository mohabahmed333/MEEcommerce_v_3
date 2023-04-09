import {React, useContext} from 'react';
import { useDispatch } from 'react-redux';
import CollectionPreview from '../../components/collection-preview-component/collection.preview.component';
import Directory from '../../components/directory-component/directory.component';
import { First_one } from '../../components/first_sections/first_1_componsnt';
import FooterSection from '../../components/footerSection/footer.component';
 import {FirstSecction,HomePageStyled,HomePageI} from './homepage.jsx'
import { Navigate } from 'react-router-dom';
 const HomePage = ()=>{


      return (  < HomePageI className=' container-fluid' >
      <First_one/>

            <Directory/>
    {
         <CollectionPreview route={'./shop/'}/>
        }

        <FooterSection/>
        </HomePageI>
        
        )
}


export default HomePage ;