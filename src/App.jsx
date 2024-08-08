export const App = () => {


const handlebuttonclick = () => {
  console.log("clicked")
}

  return (
    <>
      {""}
      <div>
        <h1>Hello!! :: </h1>
        <div>Welcome to your first React Application!</div>
        <button onClick={handlebuttonclick} className="btn-secondary"> Click Me </button>
      </div>
    </>
  );
};
