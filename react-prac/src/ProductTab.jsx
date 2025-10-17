import Product from "./Product";
function ProductTab(){
   let feature =["hi-tech","durable","fast"];
   let laptopFeatures = ["Intel i7", "16GB RAM", "SSD Storage"];
    return (
        <>
        <Product 
       title="iPhone 15" 
       price={30000} 
       features = {feature}
       additionalFeatures="Face ID" 
        />
        <Product 
        title="Laptop" 
        price={100000}
        features={laptopFeatures}
        additionalFeatures="Gaming Ready"
        />
        </>
    )
}

export default ProductTab;  