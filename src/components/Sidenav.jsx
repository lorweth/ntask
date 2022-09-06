import React from 'react';
import {
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function AppSidebar() {
  return (
    <CSidebar>
      <CSidebarBrand>Sidebar Brand</CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>Nav Title</CNavTitle>
        <CNavItem href="#">
          <FontAwesomeIcon icon={solid('user-plus')} />
          Nav item
        </CNavItem>
        <CNavItem href="#">
          <FontAwesomeIcon icon={solid('user-plus')} />
          With badge
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavGroup toggler="Nav dropdown">
          <CNavItem href="#">
            <FontAwesomeIcon icon={solid('user-plus')} /> Nav dropdown item
          </CNavItem>
          <CNavItem href="#">
            <FontAwesomeIcon icon={solid('user-plus')} />
            Nav dropdown item
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  );
}
