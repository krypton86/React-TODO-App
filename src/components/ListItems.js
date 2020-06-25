import React from "react";
import '../style/ListItem.css'
import { FaTrash } from 'react-icons/fa';
import FlipMove from "react-flip-move";

function ListItems(props) {
    let aItems = props.items;
    let aListItems = aItems.map(oItem => {
        return (<div className="list-item">
            <p><input type="text" value={oItem.text} onChange={(e)=>{
                props.updateItem(e.target.value,oItem.key)
            }}/>
            <span onClick= {() => props.deleteItem(oItem.key) }>
                <FaTrash className="faicons"></FaTrash>
            </span>
            </p>
        </div>)
    })
    return (
        <FlipMove duration={300} easing="ease-in-out">
            {aListItems}
        </FlipMove>
    )
}

export default ListItems;