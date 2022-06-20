import { useState } from "react";

const ConditionalRendering = (props) => {
    const [display, setDisplay] = useState(false)

    if (display) {
        return <>
            <h1>Condition:  Taher True</h1>
            <button onClick={() => setDisplay( !display )}>Toggle</button>
        </>
    } else {
        return <>
            <h1>Condition:  Taher False</h1>
            <button onClick={() => setDisplay( !display )}>Toggle</button>
        </>
    }
}

export default ConditionalRendering;