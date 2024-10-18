import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "./Logo.jsx"; // Asegúrate de que el Logo esté correctamente implementado

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "News", path: "/news" },
  ];

  return (
    <Navbar 
      className="bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-400 bg-opacity-10 backdrop-blur-sm rounded" 
      maxWidth="1%" 
      position="sticky" 
      justify="end" 
      style={{ margin: '0 auto' }} 
      isBlurred={true}
    >
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      {/* Contenido del Navbar para pantallas grandes */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(item => (
          <NavbarItem key={item.label}>
            <RouterLink to={item.path} className="text-purple-500">
              {item.label}
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Contenido del Navbar para la sección derecha */}
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)} // Cambia el estado del menú
          className="sm:hidden" // Mostrar solo en dispositivos móviles
        />
      </NavbarContent>

      {/* Menú desplegable para dispositivos móviles */}
      {isMenuOpen && (
        <NavbarMenu className="sm:hidden">
          {menuItems.map((item) => (
            <NavbarItem key={item.label}>
              <RouterLink to={item.path} className="text-purple-500">
                {item.label}
              </RouterLink>
            </NavbarItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
