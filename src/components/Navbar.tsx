import { useState } from "react";
import { Menu, X } from "lucide-react";
import DevIcon from "./DevIcon";

const sections = [
  { title: "Home", href: "#home" },
  { title: "Sobre mim", href: "#about" },
  { title: "Portfólio", href: "#portfoil" },
  { title: "Skills", href: "#skills" },
  { title: "Carreira", href: "#career" },
  { title: "Contato", href: "#contact" },
];

interface NavLinkProps {
  href: string;
  title: string;
}

function NavLink({ href, title }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-zinc-400 hover:text-violet-300 hover:no-underline drop-shadow-sm hover:drop-shadow-gray-100"
    >
      {title}
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-5xl sticky top-8 z-50 h-16 mt-8 rounded-2xl shadow-md m-auto border-zinc-800/10 border bg-violet-900/20 backdrop-blur-xs py-4 px-8 flex items-center justify-between">
      <DevIcon className="fill-violet-500" />
      
      {/* Botão de menu para telas menores */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Links do menu */}
      <div className="hidden md:flex gap-6 font-mono font-semibold text-sm">
        {sections.map((section, index) => (
          <NavLink key={index} href={section.href} title={section.title} />
        ))}
      </div>
      
      {/* Dropdown para telas menores */}
      {isOpen && (
         <div className="absolute top-20 right-8 bg-violet-900/40 backdrop-blur-md rounded-xl p-4 flex flex-col gap-4 shadow-lg md:hidden">
          {sections.map((section, index) => (
            <NavLink key={index} href={section.href} title={section.title} />
          ))}
        </div>
      )}
    </nav>
  );
}