
function doSomething(){
    console.log("button was clicked");
}

function hello(){
    console.log("Hello");
}

function Button(){
    let buttonStyles = {
        margin: "0 10px", // 10px horizontal spacing
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
    };

function Event(event){
    console.log(event); // prints the event object - > predefined methods and attributes -> can see event type, target event 
}
    
    return (
        <div>
            <button onClick={doSomething} style={buttonStyles}>Click Me</button>
            <button onMouseOver={hello} style={buttonStyles}>Hello</button>
             <button onDoubleClick={hello} style={buttonStyles}>Double Click</button>
             <button onClick={Event} style={buttonStyles}>Test</button>
        </div>
    );
}

export default Button; 