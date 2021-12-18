import React from 'react'

export default function Story({ img, username }) {
	return (
		<div>
			<img className="h-14 w-14 rounded-full p-[1.5px] 
			border-red-500 border-2 
			object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"

			src="https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png" 
			alt="" />
			<p className="text-xs w-14 truncate text-center">{username}</p>
		</div>
	)
}