import EachItem from "./EachItem";
const ItemLists = ({items, fun, delte}) => {
    return (
        <ul>
          {items.map((item) => (
            <EachItem key={item.id} item={item} fun={fun} delte={delte} />
          ))}
        </ul>
    );
}

export default ItemLists 