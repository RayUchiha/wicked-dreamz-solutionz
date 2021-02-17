import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from '../../context';

const Submenu = (props) => {
	const { 
		isSubmenuOpen, 
		location, 
		page: { page, links }, /*grabing the page name while destructuring it*/
	} = useGlobalContext();
	const container = useRef(null);
	/*count the columns*/
	const [ columns, setColumns] = useState('col-2');
	//Every time the location values changes monitor it 
	useEffect(() => {
		/*setting container width back to default size */
		setColumns('col-2')
		/*container for the dynamic submenu holder, gurantee the container starts off with null*/
		const submenu = container.current;
		/*pulling down the tempBtn.center and tempBtn.bottom info from nav component*/
		const {center,bottom} = location;
		/*the styling for the submenu box with width from left-to-right and top-to-bottom*/
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;
		
		if(links.length === 3 ) {
			setColumns('col-3')
		}
		if(links.length > 3 ) {
			setColumns('col-4')
		}
	}, [location, links]);//Dependency array
	console.log(isSubmenuOpen);
	
		// /*show name of button being pointed at */ 
		
			/*Start with two columns depending on the size*/
	return (
		<aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					const {label, icon, url} = link;
					return  <a key={index} href={url}>
						{icon}
						{label}
					</a>
				})}
			</div>
		</aside>
	);
};

export default Submenu;
