// @flow
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
import { RiFileTransferFill, RiStockLine } from 'react-icons/ri';
import { FiPieChart, FiShoppingBag } from 'react-icons/fi';
import { AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { BsBarChart } from 'react-icons/bs';
import { GiLouvrePyramid } from 'react-icons/gi';

const links = [
    {
        title: 'Main',
        links: [
            {
                link: 'block',
                title: 'Block',
                icon: <RiFileTransferFill />,
            },
            {
                link: 'user',
                title: 'User',
                icon: <RiFileTransferFill />,
            },
            {
                link: 'user-profile',
                title: 'User Profile',
                icon: <RiFileTransferFill />,
            },
        ],
    },
    {
        title: 'Transaction',
        links: [
            {
                link: 'transaction',
                title: 'Transaction',
                icon: <FiShoppingBag />,
            },
            {
                link: 'send-coin',
                title: 'Send Coin',
                icon: <FiShoppingBag />,
            },
        ],
    },

    {
        title: 'Charts',
        links: [
            {
                link: 'line',
                title: 'Line',
                icon: <AiOutlineStock />,
            },
            {
                link: 'area',
                title: 'Area',
                icon: <AiOutlineAreaChart />,
            },

            {
                link: 'bar',
                title: 'Bar',
                icon: <AiOutlineBarChart />,
            },
            {
                link: 'pie',
                title: 'Pie',
                icon: <FiPieChart />,
            },
            {
                link: 'financial',
                title: 'Financial',
                icon: <RiStockLine />,
            },
            {
                link: 'color-mapping',
                title: 'Color Mapping',
                icon: <BsBarChart />,
            },
            {
                link: 'pyramid',
                title: 'Pyramid',
                icon: <GiLouvrePyramid />,
            },
            {
                link: 'stacked',
                title: 'Stacked',
                icon: <AiOutlineBarChart />,
            },
        ],
    },
];
type Props = {};
export const Sidebar = (props: Props) => {
    const { activeMenu, setActiveMenu } = useStateContext();
    const activeLink =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 bg-secondary-dark-bg';
    const normalLink =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
    return (
        <div
            className={'ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'}
            style={{ zIndex: '1000000' }}
        >
            {activeMenu && (
                <>
                    <div className={'flex justify-between items-center'}>
                        <Link
                            to={'/'}
                            className={
                                'items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
                            }
                        >
                            <SiShopware></SiShopware> <span>HaiNamCoin</span>
                        </Link>
                        <button
                            type={'button'}
                            onClick={() => {
                                setActiveMenu(!activeMenu);
                            }}
                            className={'text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'}
                        >
                            <MdOutlineCancel></MdOutlineCancel>
                        </button>
                    </div>
                    <div className={'mt-100'}>
                        {links.map((item) => (
                            <div key={item.title} className={'text-gray-400 m-3 mt-4 uppercase text-sm font-semibold'}>
                                <p>{item.title}</p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={link.link}
                                        key={link.link}
                                        onClick={() => {}}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span>{link.title}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
