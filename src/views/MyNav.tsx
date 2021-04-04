import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import '../assets/scss/component/mynav.scss';

const MyNav: React.FC = () => {
  return (
    <div className="my-navbar">
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow my-navbar">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group" style={{ border: 'none' }}>
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="navbar-nav ml-auto">
          <Dropdown isOpen={false}>
            <DropdownToggle tag="a" className="nav-link" caret>
              <i className="fas fa-bell fa-fw"></i>
              <span className="badge badge-danger badge-counter">3+</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown isOpen={false}>
            <DropdownToggle tag="a" className="nav-link" caret>
              <i className="fas fa-envelope fa-fw"></i>
              <span className="badge badge-danger badge-counter">7</span>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <span className="name-user-nav">Admin</span>
          <img
            // src="https://randomuser.me/api/portraits/men/44.jpg"
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU'
            }
            className="avatar"
            alt=""></img>
        </div>
      </nav>
    </div>
  );
};

export default MyNav;
