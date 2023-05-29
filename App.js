
import { useState } from 'react';
import './App.css';
import InputArea from './components/inputarea';
import Item from './components/item';
function App() {

  const [items, setItems] = useState([]);

  const addItems = (inputText) => {
      setItems((prevItems)=>{
        return [...prevItems,inputText]; //... is a ES6 spread operator, used to add new items from array.
      });
  };

  const deleteItems = (id) =>{
      setItems((prevItems)=>{
        return prevItems.filter((item,index)=>{
            return index!==id;
        })
      })
  }

  return (
    
    <div className='main'>
    <h2>vdfb</h2>
    <div className="container">
      <div className="heading">
        <h1>My LIST</h1>
    </div>
    <div className='searcharea'>
    <InputArea additems={addItems}/>
    </div>
    <div className='lists'>
      <ul>
        {
          items.map((item,index)=>{
            return(
              <Item key={index} text={item} deleteItems={deleteItems} id={index}/>
            )
          })
        }
      </ul>
    </div>
  </div>
  <div className='last'>
    <h3>Made with <span>❤</span></h3>
  </div>
  </div>
  );
}

export default App;
