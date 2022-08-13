import { Link } from "@inertiajs/inertia-react";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Welcome</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/user">User</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
