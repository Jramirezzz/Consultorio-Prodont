import { useState } from "react";
import { 
  Navbar, NavbarBrand, NavbarContent, NavbarItem, 
  NavbarMenu, NavbarMenuToggle, NavbarMenuItem 
} from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";
import { Logo } from "./Logo.jsx"; // Asegúrate de que el Logo esté bien importado

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "News", path: "/news" },
  ];

  return (
    <Navbar 
  onMenuOpenChange={setIsMenuOpen} 
  className="max-w-screen-xl mx-auto bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-400 bg-opacity-10 backdrop-blur-sm rounded"
>

      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      {/* Menú de escritorio */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(item => (
          <NavbarItem key={item.label}>
            <RouterLink to={item.path} className="text-purple-500">
              {item.label}
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Botón para abrir el menú en móvil */}
      <NavbarContent justify="end">
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>

      {/* Menú en dispositivos móviles */}
      <NavbarMenu className="pt-6"> {/* Agrega padding-top */}
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label} onClick={() => setIsMenuOpen(false)}>
            <RouterLink 
              to={item.path} 
              className="text-purple-500 block py-2 px-4" // Estilos adicionales opcionales
            >
              {item.label}
            </RouterLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
