import { useState } from "react";

const Profile = (props) => {
    
    const [counter, setCounter] = useState(0);

    return <>
        <h1>Name: { props.name }</h1>
        {props.children} - { counter }<br></br>
        <button onClick={() => setCounter( counter + 1 )}>Increment</button>
    </>
}

export default Profile;