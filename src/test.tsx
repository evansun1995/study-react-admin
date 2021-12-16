import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  useEffect(() => {
    console.log('只执行一次')
    return ()=>{console.log('销毁时执行？')}
  },[]);
  function testClick(){
    console.log(count)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={testClick}>
        Click me222
      </button>
    </div>
  );
}

export default Example;
