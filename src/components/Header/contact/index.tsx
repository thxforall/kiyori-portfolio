import Link from 'next/link';

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      className="btn-primary"
    >
      Contact
    </Link>
  );
} 