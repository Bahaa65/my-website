import Link from "next/link";
import Image from "next/image";

const socialMedia = [
  { name: "Facebook", url: "https://facebook.com", icon: "/images/facebook.png" },
  { name: "WhatsApp", url: "https://wa.me/4499607456", icon: "/images/whatsapp.png" },
  { name: "Twitter", url: "https://twitter.com", icon: "/images/twitter.png" },
  { name: "YouTube", url: "https://youtube.com", icon: "/images/youtube.png" },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-3 mt-4">
      {socialMedia.map((platform, index) => (
        <Link key={index} href={platform.url} target="_blank" className="w-[32px] h-[32px] flex items-center justify-center bg-yellow text-purple rounded-md">
          <Image src={platform.icon} alt={platform.name} width={20} height={20} />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
