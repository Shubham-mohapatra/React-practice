import AmazonCards from "./AmazonCards";

export default function AmazonCardsTab(){
     let styles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        gap: "15px",
        justifyContent: "space-between",
        alignItems: "stretch",
        padding: "20px",
        width: "100%",
        boxSizing: "border-box"
    };
    
    return(
        <div style={styles}>
           
            <AmazonCards title="Logitech MX Master" idx={0}/>
            <AmazonCards title="Apple Pencil (2nd Gen)" idx={1}/>
            <AmazonCards title="Zebronics Zeb-transformer" idx={2}/>
            <AmazonCards title="Petronics Toad 23" idx={3}/>
        </div>
    );
}