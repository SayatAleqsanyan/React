import { useState } from "react";

export const Block = () => {
    const [value, setValue] = useState("");
    
    return (
        <div>
            <h1>{value ? value : "Hello World!"}</h1>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => setValue("")}> click me</button>
        </div>
    );
};
