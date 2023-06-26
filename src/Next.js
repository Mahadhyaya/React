import './Next.css'
const Next = ({len}) => {
    return (
        <footer> {len} {len > 1 ? "items" : "item" } </footer>
    );
};

Next.defaultProps = {
    length:5
}

export default Next;