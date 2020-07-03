import React from 'react';
import './ListItems.css'

function ListItems(props){
    const items = props.items;
    const ListItems = items.map(items =>
        {
            return <div className="list" key = "item.key">
                <p>{items.text}</p>
            </div>
        }

    )
    return(
<div>{ListItems}</div>
    )
}
export default ListItems;