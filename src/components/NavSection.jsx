import { useState } from 'react';

const navContent = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "Services",
        link: "#service"
    },
    {
        id: 3,
        title: "Blog",
        link: "/blog"
    },
    {
        id: 4,
        title: "Our Work",
        link: "#ourwork"
    },
    {
        id: 5,
        title: "Careers",
        link: "/careers"
    },
    {
        id: 6,
        title: "About Us",
        link: "/about"
    },
];

const NavSection = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="bg-slate-100 p-4 text-white sticky top-0 z-20">
            <div className="w-full md:w-[90%] m-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/">
                        <img src="https://ipsator.com/images/Ipsator_logo.svg" alt="Logo" className="w-24 h-10" />
                    </a>
                </div>

                {/* Desktop navigation */}
                <div className='hidden lg:block w-[70%]'>
                    <nav className="flex justify-between items-center">
                        <ul className="flex space-x-4 text-slate-800 text-light font-semibold">
                            {navContent.map(navItem => (
                                <li key={navItem.id}>
                                    <a href={navItem.link}>{navItem.title}</a>
                                </li>
                            ))}
                        </ul>
                        <a href="/contact" className="bg-transparent hover:bg-white text-red-500 border font-medium border-red-600 px-4 py-2 rounded-full">
                            CONTACT US
                        </a>
                    </nav>
                </div>


                {/* Mobile navigation */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden">
                        <ul className="flex flex-col space-y-4 text-slate-800 text-light font-semibold absolute right-5 top-[70px] bg-neutral-400 p-5 rounded-2xl">
                            {navContent.map(navItem => (
                                <li key={navItem.id}>
                                    <a href={navItem.link}>{navItem.title}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu} className="text-black">
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`} />
                    </button>
                </div>

            </div>
        </header>
    );
}

export default NavSection;
