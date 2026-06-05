

export const Footer = () => {
  return (
    <footer className="bg-black py-5 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="El Avellano"
            className="h-12 w-auto brightness-0 invert"
          />
        </a>

        {/* Redes sociales */}
        <div className="flex items-center gap-4">
            <a 
                href="https://www.instagram.com/fundoelavellano"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
                <img src="/instagram.webp" alt="Instagram" className="w-7 h-7 " />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=61575818940479"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
                <img src="/facebook.webp" alt="Facebook" className="w-7 h-7 invert" />
            </a>
        </div>

      </div>
    </footer>
  );
};