import Link from "next/link";


const Navbar = () => {
    return (
        <div className="my-5 ">
            <nav className="">
                <ul className="relative flex gap-5 container mx-auto px-20 font-bold text-3xl">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;