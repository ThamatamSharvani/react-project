

function App() {
  let num=15;
  let res='';
  return (
    <>
      <h1> Even-Odd checker</h1>
      <p>number={num} </p>
      <p>
        {num} is {num %2===0 ? 'even':'odd'}
      </p>
    </>
  );
}

export default App;
