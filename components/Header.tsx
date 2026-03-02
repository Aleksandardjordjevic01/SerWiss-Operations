import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo-dark.png" 
            alt="Logo" 
            width={120} 
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-base">
          <Link href="#home" className="text-white hover:text-white transition-colors font-bold">
            Home
          </Link>
          <Link href="#my-story" className="text-white/80 hover:text-white transition-colors">
            My Story
          </Link>
          <Link href="#services" className="text-white/80 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#references" className="text-white/80 hover:text-white transition-colors">
            References
          </Link>
          <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
