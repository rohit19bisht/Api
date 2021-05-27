import 'antd/dist/antd.css';
import { Input, Button } from 'antd';
import {useEffect, useState} from "react";


function StataHandle(props) {
   const [tasks,setTasks] = useState([]);
   const [input,setInput] = useState('');
   const handleInputChange = (e)=>{
        setInput(e.target.value);
   }
   const handleOnAdd = ()=>{
       let newArr = tasks;
       newArr.push(input);
       setTasks([...newArr]);
       setInput('');
   }
   const handleDelete = (index)=>{
      let newArr = tasks;
       newArr.splice(index, 1);
       setTasks([...newArr]);
       setInput('');
      console.log(tasks)
  }

  const [count, setCount] = useState(0);
  
  const buttonClick = () => {
      setCount(count + 1);
  }
  const buttonClick2 = () => {
      setCount(count - 1);
  }

  return (
    <div className="App">
        <div style={{display:'flex',width:'200px'}}>
            <Input value={input} onChange={handleInputChange} />
            <Button onClick={handleOnAdd}>Add</Button>
        </div>
        <ul>
            {tasks.map((item, index)=>{
                return <li key={index} onClick={() => handleDelete(index)}>{index+1}{item}</li>
            })}
        </ul>

        <p>You clicked {count} times</p>
      <button onClick ={buttonClick}>
        increase value
      </button>
      <button onClick ={() => buttonClick2()}>
        decrease value
      </button>

    </div>
  );
}

export default StataHandle;
