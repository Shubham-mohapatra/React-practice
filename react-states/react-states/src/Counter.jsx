import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Counter(){
    // using react useState to re-render the Counter component to refelct the updated changed in the UI 

     //let [state , setState] = useState(0); // intial value 
     let [count  , setCount] = useState(0); // count is the state and the setcount is the updater 
    console.log("component was rendered");
     let incCount = () =>{ 
        setCount(count+1); // it triggers the re-render the whole component  

        // use callback function  to update a new value from the old value 

        setCount((currCount)=>{   // this will increment the count  by  2
            return currCount+1;
        });
     }

    return(
        <div>
            <h2>Count={count}</h2>
            <Button onClick={incCount}>Count</Button>
        </div>
    );
}