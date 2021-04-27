import React, { useState } from "react";
import Section1 from "./Section1"
import Section2 from "./Section2";
import Section3 from "./Section3";
function Front(){
const [count, setCount]=useState(0);

function increase(){
  setCount(count + 1);
}
function decrease(){
  setCount(count -1);
}
return <>
  <h1>Hii {count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
  <div id="app">
  <div classNameName="height">
        <div classNameName="div_height">
          <main classNameName="main_1">
          <div classNameName="main_2">
              <Section1></Section1>
              <Section2></Section2>
              <Section3></Section3>
              </div>
            </main>
    </div>
  </div>
  </div>
</>;
}
export default Front;