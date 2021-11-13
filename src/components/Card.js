export default function (props) {
  return (
    <section>
      <img className="travel-image" width="250" src={props.item.img} />
      <div class="text-container">
        <h3>{props.item.Name}</h3>
        <span>{props.item.oneLine}</span>
      </div>
    </section>
  );
}
