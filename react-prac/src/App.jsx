import "./App.css"
import Title from  "./Title.jsx"
import Button from "./Button.jsx"
import ProductTab from "./ProductTab.jsx"
// to render every componenet we put all the components in a div tag 
// creating a component
// import the title component 


function App() {
  return ( // only one root element is returned
    <>                      
      <Title />  
      <ProductTab/>
      <Button/>
    </>
  )
}

export default App
// every component has its own file 