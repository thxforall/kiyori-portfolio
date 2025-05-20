import Link from 'next/link';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
      <div className="h-full flex flex-col items-center justify-center">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 left-6 "
        >
          Close
        </button>
        <nav className="flex flex-col items-center space-y-8">
          <Link href="/" className=" text-2xl hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className=" text-2xl hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className=" text-2xl hover:text-gray-300">
            Projects
          </Link>
        </nav>
      </div>
    </div>
  );
}
