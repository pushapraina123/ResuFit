import React, { useContext } from 'react'
import styles from './sideBar.module.css'
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { AuthContext } from '../../utils/AuthContext';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SideBar = () => {
    const location=useLocation();
    const navigate=useNavigate();
    

    const {userInfo, setUserInfo,isLogin,setLogin}=useContext(AuthContext);

    const handleLogout= ()=>{
        localStorage.clear();
        setLogin(false);
        setUserInfo(null);
        navigate('/');

    }
  return (
    <div className={styles.sideBar}>
        <div className={styles.sideBarIcon}>
            <ArticleIcon sx={{fontSize:54, marginBottom:2}}/>
            <div className={styles.sideBarTopContent}>Resume Screening</div>

        </div>


        <div className={styles.sideBarOptionsBlock}>

            <Link to={'/dashboard'} className={[styles.sideBarOption,location.pathname==='/dashboard'?styles.selectedOption:null].join(' ')}>
                <DashboardIcon sx={{fontSize:22}}/>
                <div>Dashboard</div>
            </Link>

            <Link to={'/history'} className={[styles.sideBarOption,location.pathname==='/history'?styles.selectedOption:null].join(' ')}>
                <HistoryIcon sx={{fontSize:22}}/>
                <div>History</div>
            </Link>

            {
                userInfo?.role==='admin' &&             <Link to={'/admin'} className={[styles.sideBarOption,location.pathname==='/admin'?styles.selectedOption:null].join(' ')}>
                <AdminPanelSettingsIcon  sx={{fontSize:22}}/>
                <div>Admin</div>
            </Link>
            }

           <div onClick={handleLogout} className={styles.sideBarOption}>
                <LogoutIcon sx={{fontSize:22}}/>
                <div>Logout</div>
            </div>


        </div>


        <div className={styles.footer}>
            
            <div className={styles.socialmedialinks}>
                <a href="https://github.com/pushapraina123" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/pushap-raina-973401260/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/PushapRaina" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>

            </div>

        </div>
    </div>
  )
}

export default SideBar