import { Button, Color } from "@ds.e/react/lib";

const App = () => {
  return (
    <div>
      <h1>Hello, Mono Repo</h1>
      <Color hexCode="#0000ff" />
      <Button
        title="I am a cute little button"
        onClick={() => alert("Hellow Guys")}
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;
