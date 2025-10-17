import "./AmazonCards.css";
import AmazonProductPrice from "./AmazonProductPrice";
// create a new prop for index of the old prices and the new prices
export default function AmazonCards({title,idx}){
let oldPrices = ["12,495" ,"11,900","1,599","599"];
let newPrices = ["8,999","9,199","899","278"];
let description = [
    ["8000 DPI", "5 Programmable buttons"],
    ["Design for iPad Pro", "Intuitive Surface"],
    ["Wireless Gaming", "Ultra Light Design"],
    ["Portable Speaker", "Bluetooth 5.0"]
];
    return (
        <div className="AmazonCard">
            <h4>{title}</h4>
            <div style={{color: "#565959", fontSize: "14px", margin: "10px 0"}}>
                {description[idx].map((desc, index) => (
                    <p key={index} style={{margin: "5px 0"}}>{desc}</p>
                ))}
            </div>
            <AmazonProductPrice oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}