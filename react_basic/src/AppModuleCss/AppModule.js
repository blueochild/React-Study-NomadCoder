import Button from './Button'
import styled from "./AppModule.module.css"

function AppModule() {

  return (
    <div>
      <h1 className={styled.title}>Test</h1>
      <Button text={"test"}/>
    </div>
  );
}

export default AppModule;
