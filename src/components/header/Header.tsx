import Image from "next/image";
import NavLinks from "@/components/global/NavLinks";
import Button from "@/components/global/Button";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="w-[1200px] h-[56px] mx-auto flex items-center justify-between py-4">
        
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </div>

        <NavLinks />

        <Button text="Book Free Demo" />
      </nav>
    </header>
  );
};

export default Header;
