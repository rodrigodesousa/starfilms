import React, { Component } from 'react';
import CharInfo from './CharInfo';

class List extends Component {

	render(){
    	const films = this.props.films;
    	const people = this.props.people;
	  return (
	    <div className="">
	    	{
	    		films.map((f) => {
	    			console.log(f)
	    			return (
	    				<div key={f.url}>
	    					<h1 className="char-name">{f.title}</h1>
	    					<p>Diretor: {f.director}; <span>Lançamento: {f.release_date}</span></p>
	    					<p>{f.opening_crawl}</p>
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