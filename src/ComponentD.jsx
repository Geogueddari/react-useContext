import { useContext } from "react";
import { Context } from "./ComponentA.jsx";


function ComponentD(){
    const username = useContext(Context);
    return (
        <div>
            username : {username}
        </div>
    );
}

export default ComponentD;