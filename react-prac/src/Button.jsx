
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
    
    return (
        <div>
            <button onClick={doSomething} style={buttonStyles}>Click Me</button>
            <button onMouseOver={hello} style={buttonStyles}>Hello</button>
             <button onDoubleClick={hello} style={buttonStyles}>Double Click</button>
        </div>
    );
}

export default Button;