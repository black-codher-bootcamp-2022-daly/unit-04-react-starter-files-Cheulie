import React from 'react';

function Gadget ( {item}) {

  return (
    <div> {item.title} </div>
  )
}




const GadgetList = (props) => {

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (
      <Gadget  key ={item.title} item = {item} />))}
    </main>
  );
}

export default GadgetList;

