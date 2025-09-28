import Link from "next/link";

const NavLogo = () => {
  return (
    <>
      <Link
        href="/"
        className="hidden md:block md:w-48 xl:w-60"
        aria-label="Go to Shathi Paul - Web Developer Homepage"
      >
        <span className="text-5xl">{"<Naimur/>"}</span>
      </Link>

      {/* Mobile logo */}
      <Link
        href="/"
        className="w-20 md:hidden"
        aria-label="Go to Shathi Paul - Web Developer Homepage"
      >
        <span className="text-4xl">{"<N/>"}</span>
      </Link>
    </>
  );
};

export default NavLogo;
