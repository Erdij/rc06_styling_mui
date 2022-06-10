import React from "react";
import { Button } from "./button/MyButton";
import Header from "./header/Header";
import Wrapper from "./wrapper/Wrapper";
import Link from "./link/Link";
const StyledComponent = () => {
  return (
    <Wrapper bgColor="yellow">
      <Header headerColor="pink">Hello World</Header>
      <Link
        href="https://www.linkedin.com/in/%C5%9F%C3%BCkr%C3%BC-erdi-y%C4%B1ld%C4%B1r%C4%B1m-352756222/"
        target="_blank"
        rel="noopener"
        secondary
      >
        Buraya Bakarlar
      </Link>
      <Button buttonColor>Mavi Buton</Button>
      <Button>Mor Buton </Button>
    </Wrapper>
  );
};

export default StyledComponent;
// headerColor a atanan renk ne ise onu bas, atanmazsa yellow ata.Header.js e bak ternary için
// propstaki color rengi atanmadığı için "Mor Buton" mor renkli oldu.MyButton.js e bak ternary için
