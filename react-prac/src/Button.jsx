import { Button as ShadcnButton } from "@/components/ui/button"

function doSomething(){
    console.log("button was clicked");
}

function hello(){
    console.log("Hello");
}

function Button(){
    function Event(event){
        console.log(event); // prints the event object - > predefined methods and attributes -> can see event type, target event 
    }
    
    return (
        <div className="flex gap-3 flex-wrap justify-center">
            {/* Default variant */}
            <ShadcnButton onClick={doSomething}>Click Me</ShadcnButton>
            
            {/* Secondary variant */}
            <ShadcnButton variant="secondary" onMouseOver={hello}>Hello</ShadcnButton>
            
            {/* Outline variant */}
            <ShadcnButton variant="outline" onDoubleClick={hello}>Double Click</ShadcnButton>
            
            {/* Destructive variant */}
            <ShadcnButton variant="destructive" onClick={Event}>Test</ShadcnButton>
            
            {/* Ghost variant */}
            <ShadcnButton variant="ghost">Ghost</ShadcnButton>
            
            {/* Link variant */}
            <ShadcnButton variant="link">Link</ShadcnButton>
            
            {/* Different sizes */}
            <ShadcnButton size="sm">Small</ShadcnButton>
            <ShadcnButton size="lg">Large</ShadcnButton>
        </div>
    );
}

export default Button;
 