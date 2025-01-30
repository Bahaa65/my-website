import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: { name: string; href: string }[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="flex flex-col w-[282px] h-auto gap-[16px]">
      <h4 className="font-semibold text-[18px]">{title}</h4>
      <ul className="text-[16px] leading-[28px] font-light space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
