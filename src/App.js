import './App.css';
import { useState, useEffect } from 'react';
import Firs from './First'
import AddItems from './AddItems'
import Next from './Next';
import SearchItem from './SearchItem'
import apiRequest from './apiRequest';

import Content from './Content'
function App() {
  // const [name, setName] = useState()
  const API_URL = "http://localhost:3500/items";
  const [newItems, setNewItems] = useState('')
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState('')
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const functio = async () => {
      try {
        const value = await fetch(API_URL);
        if (!value.ok) throw Error("Provide Correct API")
      const rs = await value.json();
      // setFetchError(null)
      console.log(rs);
      
      setItems(rs);
      } catch(error) {
        console.log(error);
        setFetchError(error.message)
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {(async () => await functio())()}, 2000);
  }, [])


  const fun = async (id) => {
    console.log(id);
    const newItem = items.map((item) => item.id === id ? {id:item.id, item:item.item, checked: !item.checked} : item)
    // console.log(newItem);
    setItems(newItem);

    const checkedValues = newItem.filter((item) => item.id === id);
    console.log(checkedValues);
    const options = {
      method:'PATCH',
      headers :{'Content-Type':'application/json'},
      body:JSON.stringify({checked:checkedValues[0].checked})
    }
    const url = `${API_URL}/${id}`
    const response = await apiRequest(url, options)
    if(response) setFetchError(response);
  }

  const delte = async (id) => {
    console.log(id);
    const newItem = items.filter((item) => item.id !== id)
    setItems(newItem);
    const options = {
      method:'DELETE',
    }
    const url = `${API_URL}/${id}`
    const response = await apiRequest(url, options);
    if(response) setFetchError(response)
  }

  const addNewItem = async (newItems) => {
    console.log(newItems);
    const id = items.length === 0? 1 : items[items.length - 1].id + 1 ;
    const vals = {id:id,item:newItems, checked:false};
    const newItem = [...items, vals]
    console.log(JSON.stringify(vals));
    const vars = JSON.stringify(vals);
    setItems(newItem);
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:id,item:newItems, checked:false} )
    };    
    const response = await apiRequest(API_URL, postOptions);
    if(response) setFetchError(response);
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addNewItem(newItems)
    setNewItems('')
    console.log('hi')
  }

  return (
    <div className="App">
      <Firs title="Grocery Store"/>
      <AddItems newItems={newItems} setNewItems={setNewItems} handleAddItem={handleAddItem}  />
      <SearchItem searchItems={searchItems} setSearchItems={setSearchItems} />
      <main>
        {loading && <p>Item is loading<div class="loading-spinner"></div>
</p>}
        {fetchError && <p style={{color:'red'}}>{`Error ${fetchError}`}</p>}
        {!fetchError && !loading && <Content items={items.filter((item) => ((item.item).toLowerCase().includes(searchItems.toLocaleLowerCase())))} fun={fun} delte={delte} />}
      </main>
      <Next len={items.length}/>
    </div>
  );
}

export default App;
