import React, { Component } from 'react';
import './ItemIcon.css';

class ItemIcon extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: false
		}

		this.getClassName = this.getClassName.bind(this);
		this.toggleSelected = this.toggleSelected.bind(this);
	}

	render(){
		return (
				<img className={this.getClassName()} 
				src={this.props.character.image} 
				alt={this.props.character.name} 
				onClick={() => this.toggleSelected()} />
			);
	}

	getClassName(){
		return (this.state.selected ? 'selected' : 'unselected');
	}

	toggleSelected(){
		this.setState({selected: !this.state.selected});
	}

}

export default ItemIcon;