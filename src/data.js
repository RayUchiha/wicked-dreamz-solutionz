import { FaCreditCard, FaBook, FaBriefcase, FaDonate, FaPhone, FaHandPointRight } from 'react-icons/fa';
import React from 'react';

const sublinks = [
	{
		page: 'about',
		links: [
		  { label: 'payment', icon: <FaCreditCard />,  url: '/products' },
		  { label: 'history', icon: <FaBook />,  url: '/products' },
		  { label: 'help', icon: <FaBook />,  url: '/products' },
		],
	},
	{
		page: 'services',
		links: [
			{ label: 'website design', icon: <FaBriefcase />,  url: '/services' },
			{ label: 'website maitenance', icon: <FaBriefcase />,  url: '/services' },
			{ label: 'website hosting', icon: <FaBriefcase />,  url: '/services' },
			{ label: 'website billing', icon: <FaBriefcase />,  url: '/services' },
		],
	},
	{
		page: 'company',
		links: [
		  { label: 'follow us', icon: <FaHandPointRight />,  url: '/products' },
		  { label: 'donate', icon: <FaDonate />,  url: '/products' },
		  { label: 'contact us', icon: <FaPhone />,  url: '/products' },
		],
	}
];

export default sublinks;
