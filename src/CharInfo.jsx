import React, { Component } from 'react';

class CharInfo extends Component {
	constructor(props){
		super(props);

		this.state = {
			expanded: false,
		}
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}
	open(){
		this.setState({ expanded: !this.state.expanded})
	}
	close(){
		this.setState({ expanded: !this.state.expanded})
	}
	render(){
		const info = this.props.charInfo;
		if(!this.state.expanded){
			return <p className="btn btn-info" onClick={this.open}>Show info</p>
		}
		return(
			<div className="user-details">
				<p className="btn btn-danger" onClick={this.close}>Hide Info</p>
				<ul>
					<li>{info.characters[0]}</li>
				</ul>
			</div>
		)
		return (
			<div></div>
		)
	}
}

export default CharInfo;