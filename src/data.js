import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';

const sublinks = [
	{
		page: 'about',
		links: [
		  { label: 'payment', icon: <FaBook />,  url: '/products' },
		  { label: 'terminal', icon: <FaBook />,  url: '/products' },
		  { label: 'help', icon: <FaBook />,  url: '/products' },
		],
	},
	{
		page: 'services',
		links: [
			{ label: 'Website Design', icon: <FaCreditCard />,  url: '/services' },
			{ label: 'Website Maitenance', icon: <FaCreditCard />,  url: '/services' },
			{ label: 'Website Hosting', icon: <FaCreditCard />,  url: '/services' },
			{ label: 'Website Hosting', icon: <FaCreditCard />,  url: '/services' },
		],
	},
	{
		page: 'company',
		links: [
		  { label: 'plugins', icon: <FaBriefcase />,  url: '/products' },
		  { label: 'libraries', icon: <FaBriefcase />,  url: '/products' },
		  { label: 'billing', icon: <FaBriefcase />,  url: '/products' },
		],
	}
];

export default sublinks;
