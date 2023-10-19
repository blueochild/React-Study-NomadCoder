import {useState, useEffect} from "react";

function AppUseEffect() {

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setCounter((prev) => prev +1);

  useEffect(() => {
    console.log("CALL THE API....");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'counter or keyword' changes.");
  }, [counter, keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>add</button>
    </div>
  );
}

export default AppUseEffect;
