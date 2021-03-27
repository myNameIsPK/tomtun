import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Home',
    icon: <RiIcons.RiHome2Fill />,
    link: '/home',
  },
  {
    title: 'ตำบล LTC',
    icon: <BsIcons.BsFillBarChartFill />,
    link: '/ตำบล_LTC',
  },
  {
    title: 'ผู้สูงอายุพึ่งพิง',
    icon: <FaIcons.FaUserAlt />,
    link: '/ผู้สูงอายุพึ่งพิง',
  },
  {
    title: 'Careplan',
    icon: <FaIcons.FaTasks />,
    link: '/Careplan',
  },
  {
    title: 'CM & CG',
    icon: <AiIcons.AiFillFolderOpen />,
    link: '/CM_&_CG',
  },
  {
    title: 'ฟื้นฟูศักยภาพ',
    icon: <HiIcons.HiOutlineRefresh />,
    link: '/ฟื้นฟูศักยภาพ',
  },
  {
    title: 'สอนการใช้งาน',
    icon: <FaIcons.FaVideo />,
    link: '/สอนการใช้งาน',
  },
  {
    title: 'ติดต่อสอบถาม',
    icon: <FaIcons.FaEdit />,
    link: '/ติดต่อสอบถาม',
  },
]