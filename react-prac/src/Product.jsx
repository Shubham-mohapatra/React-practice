import "./Product.css"
function Product({title, price, features, additionalFeatures}){ // react props -> the information that are passed to a jsx tag 
   // const list = features.map((feature, index) => <li key={index}>{feature}</li>) // use map method to render arrays 


// Conditionals 
    let styles = { backgroundColor :  price > 30000  ? "blue" : null
    }   // we can add contions in the styles
  return ( 
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>Features: {features.map((feature, index) => <li key={index}>{feature}</li>)}</p> 
            <p>Discount</p> {price > 30000 && <p>"Discount of 5%"</p>}
            <p>Additional Features: {additionalFeatures}</p>
        </div>

     
    );
}

// we can use features.map using <li> </li>
export default Product;