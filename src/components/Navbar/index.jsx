import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCookie, deleteCookie } from "cookies-next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("token");
    setToken(token);
  }, []);

  const handleLogout = () => {
    deleteCookie("token");
    setToken(null);
    alert("Logging out");
    router.push("/login");
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav>
        <div className="flex items-center justify-between w-full">
          <h1 className="title-logo">MyLogo</h1>

          {isOpen ? (
            <div className="menu-icon lg:hidden" onClick={closeMenu}>
              <ion-icon name="close"></ion-icon>
            </div>
          ) : (
            <div className="menu-icon lg:hidden" onClick={toggleMenu}>
              <ion-icon name="menu"></ion-icon>
            </div>
          )}

          <div className="hidden lg:flex">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 nav-link">
                <div className="menu-icon-default">
                  <ion-icon name="home"></ion-icon>
                </div>

                <p>Home</p>
              </Link>

              <Link href="/menu" className="flex items-center gap-2 nav-link">
                <div className="menu-icon-default">
                  <ion-icon name="grid"></ion-icon>
                </div>

                <p>Menu</p>
              </Link>

              {token ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 px-4 btn-secondary">
                  <div className="menu-icon-default">
                    <ion-icon name="log-out"></ion-icon>
                  </div>

                  <p>Logout</p>
                </button>
              ) : (
                <Link href="/login">
                  <button className="flex items-center justify-center gap-2 px-4 btn-primary">
                    <div className="menu-icon-default">
                      <ion-icon name="log-in"></ion-icon>
                    </div>

                    <p>Login</p>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-30 bg-black opacity-50" onClick={closeMenu}></div>
          {/* Make the text to be centered of the screen */}
          <p
            className="fixed z-40 text-white transform -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-3/4 md:left-2/3"
            onClick={closeMenu}>
            Click anywhere in here to close!
          </p>
        </>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#393E46] w-1/2 md:w-1/3 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}>
        <div className="flex flex-col justify-center h-full gap-8 px-4 md:px-8">
          <h1 className="text-center title-logo">MyLogo</h1>

          <div className="flex flex-col items-center justify-center w-full gap-4">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2 nav-link-mobile">
              <div className="menu-icon-default">
                <ion-icon name="home"></ion-icon>
              </div>

              <p>Home</p>
            </Link>

            <Link
              href="/menu"
              onClick={closeMenu}
              className="flex items-center gap-2 nav-link-mobile">
              <div className="menu-icon-default">
                <ion-icon name="grid"></ion-icon>
              </div>

              <p>Menu</p>
            </Link>
          </div>

          {token ? (
            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full gap-2 btn-secondary">
              <p>Logout</p>
            </button>
          ) : (
            <Link href="/login" onClick={closeMenu} className="w-full">
              <button className="flex items-center justify-center w-full gap-2 btn-primary">
                <p>Login</p>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
