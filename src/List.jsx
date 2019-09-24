import React, { Component } from 'react';
import CharInfo from './CharInfo';

class List extends Component {

	render(){
    	const films = this.props.films;
	  return (
	    <div className="">
	    	{
	    		films.map((f) => {
	    			console.log(f)
	    			return (
	    				<div key={f.url}>
	    					<h1 className="char-name">{f.title}</h1>
	    					<CharInfo charInfo={f} />
	    				</div>
	    			)
	    		})
	    	}
	    </div>
	  );
	  } 
}
export default List;