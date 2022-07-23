import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './App.css';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#ff6700" className="sidenav mt-5">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Work" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="briefcase">Workexperience&Skills</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Tasks" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tasks">Tasks</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Myprojects" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="cubes">My projects</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Leaves" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="calendar">Leaves&Leavebank</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Bankdetails" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="university">Bankdetails</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="times">Log-out</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;