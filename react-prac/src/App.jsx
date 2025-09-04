import "./App.css"
// to render every componenet we put all the components in a div tag 
// creating a component
// import the title component 
 
import Title from  "./Title.jsx"
function Desc(){
  return (
    <h3> Hello Shubham</h3>
  )
}

function App() {
  return ( // only one root element is returned
    <div>
      <Title />
      <Desc />
    </div>
  )
}

export default App
// every component has its own file 