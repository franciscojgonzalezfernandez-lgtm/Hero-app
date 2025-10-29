import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path: string) => path === pathname;
  return (
    <NavigationMenu className="py-5">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(isActive("/") && "bg-slate-200", "p-2 rounded-md")}
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              isActive("/search") && "bg-slate-200",
              "p-2 rounded-md"
            )}
          >
            <Link to="/search">Búsqueda de personajes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
