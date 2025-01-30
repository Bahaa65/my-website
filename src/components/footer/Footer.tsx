import Image from "next/image";
import Button from "@/components/global/Button";
import FooterLinks from "@/components/global/FooterLinks";
import SocialIcons from "@/components/global/SocialIcons";

const programLinks = [
  { name: "Basic Arabic for Reading", href: "/" },
  { name: "Quran Recitation & Tajweed", href: "/" },
  { name: "Quran Memorization & Tafseer", href: "/" },
  { name: "Islamic Education Basics", href: "/" },
  { name: "Islamic Skills & Behavior", href: "/" },
  { name: "All-in-One: Real Muslim", href: "/" },
  { name: "Customize Your Learning", href: "/" },
];

const companyLinks = [
  { name: "About Us", href: "/" },
  { name: "Our Packages", href: "/" },
  { name: "Blog", href: "/" },
  { name: "FAQ", href: "/" },
  { name: "Terms of Service", href: "/" },
  { name: "Privacy Policy", href: "/" },
];

const Footer = () => {
  return (
    <footer className="bg-purple text-white py-[80px] w-full">
      <div className="w-[1200px] mx-auto flex justify-between items-start">
        
        {/* Logo & Call to Action */}
        <div className="flex flex-col items-start w-[282px] h-auto gap-[16px]">
          <Image src="/images/logo (1).png" alt="Logo" width={80} height={80} />
          <p className="text-[16px] leading-[24px] font-light">
            Inspiring Faith, <br /> Empowering Minds
          </p>
          <Button text="Book Free Demo" />
        </div>

        {/* Footer Links Sections */}
        <FooterLinks title="Our Programs" links={programLinks} />
        <FooterLinks title="Company" links={companyLinks} />

        {/* Contact & Social Media Section */}
        <div className="flex flex-col w-[282px] h-auto gap-[16px]">
          <h4 className="font-semibold text-[18px]">Contact Us</h4>
          <p className="text-[16px] font-light">info@norul-amal.com</p>
          <p className="text-[16px] font-light">449-960-7456</p>
          <SocialIcons />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
