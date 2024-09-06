import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "./Logo.jsx";

export function NavigationBar() {
  return (
    <Navbar 
      className="bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-400 bg-opacity-10 backdrop-blur-sm rounded" 
      maxWidth="full" 
      position="sticky" 
      justify="end" 
      isBlurred={true}
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <RouterLink to="/" className="text-purple-500 font-bold">
            Home
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink to="/news" className="text-purple-500" aria-current="page">
            Noticias
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink to="/services" className="text-purple-500">
            Servicios
          </RouterLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as="a" color="primary" href="#" variant="flat">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#2B0496">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#2B0496" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
              </g>
            </svg>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
