import{shopContext} from '../../contexts/shopContext'
import { useContext } from 'react'
const CardPreview = ({id})=>{
const {shop} = useContext(shopContext);

const item=shop.map(catougries=>catougries.items.filter(item=>item.id=id))
}