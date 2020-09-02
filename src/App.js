import React from 'react';

function App() {
  // const greeting = "Hi, Tom!";
  // const dom = <h1 className="Foo">{greeting}</h1>; // {}の中では、javascriptが使用できる
  // return dom;

  // return <input type="text" onChange={() => {console.log("I am clicked")}} />;

  return (
    <React.Fragment>
      <label htmlFor="">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked")}} />
    </React.Fragment>
  ); 
  
  // Reactの制約で、JSXは一つのタグでなければならない。
　// Reactの都合のままタグで囲んでしまうと、不要なタグを生んでしまう。上記でいう、<div>
  // ただ、それを回避するために、<React.Fragment>を使用する
}

// function App() {
//   return React.createElement(
//     "h1",
//     null,
//     "Hello, Worrld!"
//   )
    
// }

export default App;
