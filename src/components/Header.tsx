const Header = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-[1000] py-2.5 px-4">
      <nav className="font-poppins">
        <ul className="flex justify-around items-center list-none m-0 p-0">
          <li>
            <a
              href="#Home"
              onClick={scrollToSection('Home')}
              className="text-black no-underline px-2.5 py-2 rounded transition-colors duration-300 hover:text-[#61677A]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              onClick={scrollToSection('About')}
              className="text-black no-underline px-2.5 py-2 rounded transition-colors duration-300 hover:text-[#61677A]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Portfolio"
              onClick={scrollToSection('Portfolio')}
              className="text-black no-underline px-2.5 py-2 rounded transition-colors duration-300 hover:text-[#61677A]"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              onClick={scrollToSection('Contact')}
              className="text-black no-underline px-2.5 py-2 rounded transition-colors duration-300 hover:text-[#61677A]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
