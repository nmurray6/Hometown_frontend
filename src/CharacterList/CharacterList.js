import React, { Component } from 'react';
import './CharacterList.css';
import CharacterButton from '../CharacterButton/CharacterButton'

class CharacterList extends Component {
	constructor(props){
		super(props);

		this.buildCharacterList = this.buildCharacterList.bind(this);
	}

	render(){
		return (
			<div className="CharacterList">
				{this.buildCharacterList()}
			</div>
			);
	}

	buildCharacterList(){
		return this.props.user.characterList.map((element, index) => 
			<CharacterButton key={index} character={element} />
		);
	}
}

export default CharacterList;