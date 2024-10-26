import Link from "next/link";

const contactLinks = [
  {
    name: "Email",
    icon: <ion-icon name="mail"></ion-icon>,
    info: "example@company.com",
    link: "#",
  },

  {
    name: "Phone",
    icon: <ion-icon name="call"></ion-icon>,
    info: "123 456 789",
    link: "#",
  },

  {
    name: "Address",
    icon: <ion-icon name="location"></ion-icon>,
    info: "456 Elm Street, Suite 3, Los Angeles, CA 90001, USA.",
    link: "#",
  },
];

const navigationLinks = [
  {
    name: "Home",
    icon: <ion-icon name="home"></ion-icon>,
    link: "#",
  },

  {
    name: "Menu",
    icon: <ion-icon name="grid"></ion-icon>,
    link: "#",
  },

  {
    name: "Login",
    icon: <ion-icon name="log-in"></ion-icon>,
    link: "#",
  },
];

const socialItems = [
  {
    icon: <ion-icon name="logo-facebook"></ion-icon>,
    link: "#",
  },

  {
    icon: <ion-icon name="logo-twitter"></ion-icon>,
    link: "#",
  },

  {
    icon: <ion-icon name="logo-instagram"></ion-icon>,
    link: "#",
  },

  {
    icon: <ion-icon name="logo-whatsapp"></ion-icon>,
    link: "#",
  },

  {
    icon: <ion-icon name="logo-linkedin"></ion-icon>,
    link: "#",
  },

  {
    icon: <ion-icon name="logo-github"></ion-icon>,
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="w-full">
        <h1 className="title-logo">MyLogo</h1>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 lg:gap-8 my-2 py-2 border-y-2 border-[#f2f2f2] border-opacity-50 lg:my-4 lg:py-4">
        <div className="flex flex-col gap-2">
          <p className="font-bold tracking-widest uppercase opacity-50">Contact</p>

          <div className="flex flex-col gap-2">
            {contactLinks.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="flex flex-col hover:text-[#f96d00] transition-all duration-300 w-fit">
                <div className="flex items-center gap-2">
                  <div className="menu-icon-default">{item.icon}</div>

                  <p className="font-semibold uppercase">{item.name}</p>
                </div>

                {item.info}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-0 md:justify-between md:pl-12 lg:pl-16 lg:gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-bold tracking-widest uppercase opacity-50">Navigation</p>

            <div className="flex flex-col gap-2">
              {navigationLinks.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="flex flex-col hover:text-[#f96d00] transition-all duration-300 w-fit">
                  <div className="flex items-center gap-2">
                    <div className="menu-icon-default">{item.icon}</div>

                    <p className="font-semibold uppercase">{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold tracking-widest uppercase opacity-50">Social Media</p>

            <div className="flex gap-4 w-fit">
              {socialItems.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  target="_blank"
                  className="hover:text-[#f96d00] hover:scale-125 transition-all duration-300">
                  <div className="menu-icon">{item.icon}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-2 text-center lg:gap-4">
        <p className="text-sm opacity-50">
          Copyright &copy; {new Date().getFullYear()}.{" "}
          <Link
            href="https://github.com/RamaDavana"
            target="_blank"
            className="hover:text-[#f96d00] transition-all duration-300">
            Rama Davana
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
