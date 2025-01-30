import Link from "next/link";

const NavLinks = () => {
  const links = [
    { name: "About Us", path: "/" },
    { name: "Our Programs", path: "/" },
    { name: "Our Plans", path: "/" },
    { name: "Blogs", path: "/" },
    { name: "FAQ", path: "/" },
  ];

  return (
    <ul className="flex gap-[40px] text-black font-medium">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path} className="hover:text-purple transition">{link.name}</Link>
        </li>
      ))}
      <li className="text-yellow">
        <Link href="/" className="hover:text-yellow transition">Log In</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
