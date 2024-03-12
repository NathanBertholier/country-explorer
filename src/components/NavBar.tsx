import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
export default function NavBar() {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">Country Explorer</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4">
                <NavbarItem isActive>
                    <Link href="#">
                        Pays
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Population
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}