import React from 'react'
import Wheel from "./Wheel.js"

export default function Car(props) {
  return (
  <>
   <h2>Hi, I am a Car! I have {props.numberOfWheels} wheels</h2>
   <Wheel />
   </>
  );
}


