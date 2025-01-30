import Image from "next/image";
import NavLinks from "@/components/global/NavLinks";
import Button from "@/components/global/Button";

const Navbar = () => {
  return (
    <nav className="w-[1200px] h-[56px] mx-[120px] mb-[56px] flex items-center">
      {/* Logo */}
      <div className="flex items-center mr-auto">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Navigation Links */}
      <NavLinks />

      {/* Button */}
      <div className="flex space-x-[20px]">
        <Button text="Book Free Demo" />
      </div>
    </nav>
  );
};

export default Navbar;
