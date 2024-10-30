'use client';
import { useState } from "react";

const HelloWorld = () => {
  const [test, setTest] = useState();
  return ( 
    <h1 className="text-red-700">Hello World</h1>
   );
}
 
export default HelloWorld;