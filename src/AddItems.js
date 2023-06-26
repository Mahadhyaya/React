import {FaPlus} from 'react-icons/fa'
import {useRef} from 'react'
const AddItems = ({newItems, setNewItems, handleAddItem}) => {
    const reference = useRef();
    return (
        <form onSubmit={handleAddItem}>
            <div>
            <label htmlFor="addItem"></label>
            <input autoFocus id="addItem" ref={reference} type="text" required placeholder="AddItem" value={newItems} onChange={(e) => {setNewItems(e.target.value)}}></input>
            <button type="submit" aria-label="Add Item" onClick={() => reference.current.focus()}><FaPlus /></button>
            </div>
        </form>
    );
}

export default AddItems;