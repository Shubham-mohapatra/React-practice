import Button from "./Button";
// call the onSubmit handler for the button 

function handleSubmit(event){
    event.preventDefault();   // pevents the default behaviour and persists 
    console.log("Form was submitted");
}


export default function Form(){
    return (
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter your name"/>
                <button onClick={handleSubmit} required>Submit</button>
            </form>
    );
}