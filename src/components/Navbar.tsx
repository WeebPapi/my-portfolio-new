import React from 'react'
import { Menu } from 'antd'
import MenuItem from 'antd/es/menu/MenuItem'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar:React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const menuItems = [
        { key: '1', label: 'Home', path: '/' },
        { key: '2', label: 'Projects', path: '/projects' },
        { key: '3', label: 'Contact', path: '/contact' },
      ];
  return (
    <Menu mode='horizontal' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 40 }}>
       {location.pathname !== '/' && <div className='goBack' style={{width: '100%', display: 'flex', justifyContent: 'start'}}><MenuItem onClick={() => {navigate(-1)}} icon={<FaArrowLeft />} style={{ color: 'black', fontSize: 18, padding: '20px', fontWeight: 'bold', float: 'left'}}>Go Back</MenuItem></div>}
{menuItems.map((item) => (
  <MenuItem  key={item.key} style={{ color: 'black', fontSize: 18, padding: '20px', fontWeight: 'bold'}}><Link className='link' to={`${item.path}`}>{item.label}</Link></MenuItem>
))}
    </Menu>
  )
}

export default Navbar