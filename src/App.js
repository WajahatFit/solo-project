import Navbar from "./components/Navbar";
import data from "./data";
import Card from "./components/Card";

function App() {
  const travelData = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="">
      <Navbar />
      {travelData}
    </div>
  );
}

export default App;
