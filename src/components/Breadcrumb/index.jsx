import Link from "next/link";
import { useRouter } from "next/router";

export default function Breadcrumbs() {
  const router = useRouter();
  const pathnames = router.asPath.split("/").filter((x) => x); // Mengambil path dari URL dan memisahkannya

  return (
    <div>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`; // Membuat rute berdasarkan path
        const isLast = index === pathnames.length - 1; // Menentukan apakah ini adalah item terakhir

        return (
          <span key={name}>
            {isLast ? (
              <span>{decodeURIComponent(name)}</span>
            ) : (
              <>
                <Link href={routeTo} className="hover:text-[#f96d00] transition-all duration-300">
                  {decodeURIComponent(name)}
                </Link>
                <span style={{ margin: "0 4px" }}>/</span>
              </>
            )}
          </span>
        );
      })}
    </div>
  );
}
