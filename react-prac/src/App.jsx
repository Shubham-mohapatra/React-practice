import AmazonCards from "./AmazonCards.jsx"
import AmazonCardsTab from "./AmazonCardsTab.jsx"
import "./App.css"
import Button from "./Button.jsx"
import ProductTab from "./ProductTab.jsx"

// to render every componenet we put all the components in a div tag 
// creating a component
// import the title component 


function App() {
  let headingStyles = {
    textAlign: "center",
    color: "#232f3e",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "20px 0 10px 0",
    fontFamily: "Arial, sans-serif"
  };
  
  return ( // only one root element is returned
    <>          
      <h3 style={headingStyles}>BlockBuster Deals | Shop Now</h3>                                                
      <AmazonCardsTab/>
      <Button/>
    </>
  )
}

export default App
// every component has its own file 