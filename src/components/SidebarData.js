import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Counter',
    path: '/counter',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/counter/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/counter/revenue',
        icon: <IoIcons.IoIosPaper />
      }

      
    ]
  },
  {
    title: 'Slider',
    path: '/slider',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Model',
        path: '/slider/model',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: ' Mobile',
        path: '/slider/mobile',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      
    ]
  },
  {
    title: 'Calculators',
    path: '/calculators',
    icon: <FaIcons.FaCartPlus />
  },

 
  {
    title: 'Users',
    path: '/users',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Gallery',
    path: '/gallery',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Gallery 1',
        path: '/gallery/gallery1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Gallery 2',
        path: '/gallery/gallery2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }

  
];





























// import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';




// export const SidebarData = [
//   {
//     title: 'Counter',
//     path: '/counter',
//     icon: <AiIcons.AiFillHome />,
//     cName: 'nav-text'
//   },


  
//   {
//     title: 'Slider',
//     path: '/slider',
//     icon: <IoIcons.IoIosPaper />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Calculators',
//     path: '/calculators',
//     icon: <FaIcons.FaCartPlus />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Users',
//     path: '/users',
//     icon: <IoIcons.IoMdPeople />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Gallery',
//     path: '/gallery',
//     icon: <FaIcons.FaEnvelopeOpenText  />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: 'nav-text'
//   }
// ];
