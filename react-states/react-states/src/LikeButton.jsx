import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LikeButton(){

    let [isLiked, setisLiked] = useState(false); // isLiked is initially false
    
    let toggleLike = () => {
        setisLiked(!isLiked);  // ~(false) => true  
    } 

    return (
        <div>
            <Button 
                onClick={toggleLike} 
                variant={isLiked ? "default" : "outline"}
                size="lg"
                style={{fontSize: "24px", marginTop: "40px", width: "18%", cursor: "pointer"}}
            >
                {
                    isLiked ? (
                        <i className="fa-solid fa-heart" style={{color: "red"}}></i>
                    ) : (
                        <i className="fa-regular fa-heart" style={{color: "gray"}}></i>
                    )
                }
            </Button>
        </div>
    );
}