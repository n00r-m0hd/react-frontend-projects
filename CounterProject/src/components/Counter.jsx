import {useState} from 'react'
function Counter(){
    //let [count,setCount] = useState(10);
    const [count,setCount] = useState(10);

    const counterUp= ()=>{
        //count++;
        setCount(prev=> prev+1);
        console.log("Up",count);
    }
    const counterDown= ()=>{
        //count--;
        setCount(prev=>prev-1);
        console.log("Down",count);
    }
    const counterUpdate= ()=>{
        setCount(count);
    }

    return (
        <>
            <h1>Counter Example</h1>  
            <h2>Count= {count}</h2> 
            <button onClick={counterUp}>UP</button>
            <button onClick={counterDown}>Down</button>
            <button onClick={counterUpdate}>Update</button>
        </>
    );
}
export default Counter;