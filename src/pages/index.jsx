import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/menu");
  };
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <p>Home Page</p>
        </div>

        <button className="btn-primary" onClick={handleClick}>
          Go to Menu Page
        </button>
      </div>
    </section>
  );
}
