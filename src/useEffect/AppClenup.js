import {useState, useEffect} from "react";

function Hello(){
    function byFn(){
        console.log("bye :C");
    }
    function hiFn(){
        console.log("hi :D");

        return byFn;
    };

    // hiFn function same as arrow function in useEffect

    useEffect(() => {
        console.log("created :D");

        // This is Cleanup function
        // Return => function when destroy component
        return () => {console.log("destroyed :C")};
    }, []);

    return (
        <h1>Hello</h1>
    );
}

function AppClenup(){

    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((current) => !current);

    return (
        <>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Show" : "Hide"}</button>
        </>
    )
}

export default AppClenup;