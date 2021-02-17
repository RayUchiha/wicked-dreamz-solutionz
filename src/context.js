import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({}); /* Setting it up to be received as an object*/
	const [page, setPage] = useState({page: '', links:[]}); /*page state object with two empty values*/
	
	const openSidebar = () => {
		setIsSidebarOpen(true)
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false)
	};
	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text); /*get me the page that matches the page that is coming from the button*/
		setPage(page);
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	};
	const closeSubmenu = () => {
		setIsSubmenuOpen(false)
	};
	return (
		<AppContext.Provider 
			value={{
				isSubmenuOpen, 
				isSidebarOpen,
				openSubmenu,
				openSidebar,
				closeSubmenu,
				closeSidebar,
				page,
				location,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext)
};
