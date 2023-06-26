import {FaTrashAlt} from 'react-icons/fa';
import './EachItem.css'
const EachItem = ({item, fun, delte}) => {
    return (
        <li className='item'>
              <input type='checkbox' onChange={()=>{fun(item.id)}} checked={item.checked}></input>
              <label >{item.item}</label>
              <FaTrashAlt 
                onClick={()=> {delte(item.id)}}
                role="button"
                tabIndex="0"
              />
        </li>
    );
}

export default EachItem