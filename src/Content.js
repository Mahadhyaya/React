import ItemLists from "./ItemLists"
const Content = ({items, fun, delte}) => {
    return (<>
    {items.length > 0 ? (
        <ItemLists items={items} fun={fun} delte={delte} />
        ): (<p >Your Cart Is Empty</p>)
    }
    </>);
}

export default Content