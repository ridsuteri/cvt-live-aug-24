import './ListItem.css'
function ListItem(props) {
  return (
    <>
      <li className="list_item">{props.item} - {props.rating}/5</li>
    </>
  );
}

export default ListItem;
