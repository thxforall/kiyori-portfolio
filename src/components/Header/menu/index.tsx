interface MenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MenuButton({
  isMenuOpen,
  setIsMenuOpen,
}: MenuButtonProps) {
  return (
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn-primary">
      Menu
    </button>
  );
}
