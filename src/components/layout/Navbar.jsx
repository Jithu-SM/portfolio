import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center py-4 px-6 border-b border-neutral-800">
      <h1 className="text-xl font-bold">Jithu S</h1>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem><Link to="/">Home</Link></NavigationMenuItem>
          <NavigationMenuItem><Link to="/projects">Projects</Link></NavigationMenuItem>
          <NavigationMenuItem><Link to="/music">Music</Link></NavigationMenuItem>
          <NavigationMenuItem><Link to="/about">About</Link></NavigationMenuItem>
          <NavigationMenuItem><Link to="/contact">Contact</Link></NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ThemeToggle />
    </div>
  );
}
