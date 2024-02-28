import Logo from "../assets/icons/Logo.svg";
import YellowButton from "../components/Button";

const linksMap = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Header = () => {
  const currentPage = "Home";

  return (
    <header className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src={Logo} alt="Logo" />
        <nav className="hidden md:flex items-center space-x-10">
          {linksMap.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans font-bold text-black hover:text-gray-900 ${
                currentPage === link.name
                  ? "border-b-4 border-x-2 border-t-2 border-black rounded-xl py-2 px-4"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <YellowButton text="Try for free" />
      </div>
    </header>
  );
};

export default Header;
