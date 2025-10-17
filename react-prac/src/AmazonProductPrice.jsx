export default function AmazonProductPrice({oldPrice , newPrice}){
    let containerStyles = {
        backgroundColor: "#e0c367",
        padding: "10px 15px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        width:"200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        marginTop: "10px"
    };
    
    let oldPriceStyles = {
        textDecoration: "line-through",
        color: "#666",
        fontSize: "14px"
    };
    
    let newPriceStyles = {
        color: "#B12704",
        fontWeight: "bold",
        fontSize: "18px"
    };
    
    return(
        <div style={containerStyles}>
            <span style={oldPriceStyles}>₹{oldPrice}</span>
            <span style={newPriceStyles}>₹{newPrice}</span>
        </div>
    );
}