import React, { Component } from 'react';
import './ItemList.css';
import ItemIcon from '../ItemIcon/ItemIcon'

class ItemList extends Component {
	constructor(props){
		super(props);

		this.buildItemList = this.buildItemList.bind(this);
	}

	render(){
		return (
			<div className="ItemList">
				{this.buildItemList()}
			</div>
			);
	}

	buildItemList(){
		return this.props.user.itemList.map((element, index) => 
			<ItemIcon key={index} character={element} />
		);
	}
}

export default ItemList;