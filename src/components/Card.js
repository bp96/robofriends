import React from 'react';

const Card = (props) => {
	const {name,email,id} = props;
	return (
		// classes using tachyons - align text in centre, light green background, display inline block, border 3*0.25rem, margin 2*0.25rem, grow animation, border width 2*0.25rem, shadow 5*0.25rem
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src= {`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2> {name} </h2>	
				<p> {email} </p>
			</div>
		</div>
	);
}

export default Card;