import React from 'react';

const Card = ({name, id, email}) => {
	return (
			<div className='bg-light-green dib br3 pa3 ma2 grow bw shadow-5 '>
			
			<div>
					<h1>
					{name}
					</h1>
					<p>
					{email}
					</p>
					<h3>
					{id}
					</h3>
					<img alt='robots' src={`https://robohash.org/${id}?50x100`}/>

				</div>
			</div>
		);
}

export default Card;