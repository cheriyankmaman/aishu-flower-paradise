import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "About Us",
		path: "/about-us",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		
	},
	{
		title: "Services",
		path: "/services",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Buy Ours",
				path: "/services/services1",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Sell Yours",
				path: "/services/services2",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
		],
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <FaIcons.FaPhone />,
	},
	{
		title: "Events",
		path: "/events",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Exhibitions",
				path: "/events/events1",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Discount Sales",
				path: "/events/events2",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "SignUp",
		path: "/signup",
		icon: <IoIcons.IoMdHelpCircle />,
	},
];
