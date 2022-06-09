import React from "react";
import { Button } from "./button/MyButton";
import Header from "./header/Header";
const StyledComponent = () => {
  return (
    <>
      <Header headerColor="pink">Hello World</Header>
      <Button buttonColor>Mavi Buton</Button>
      <Button>Mor Buton </Button>
    </>
  );
};

export default StyledComponent;
// headerColor a atanan renk ne ise onu bas, atanmazsa yellow ata.Header.js e bak ternary için
// propstaki color rengi atanmadığı için "Mor Buton" mor renkli oldu.MyButton.js e bak ternary için
