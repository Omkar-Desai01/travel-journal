import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function () {
  const cards = data.map((item) => {
    return <Card item={item} />;
  });
  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}
