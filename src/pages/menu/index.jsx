/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import UsePagination from "@/hooks/UsePagination"; // Adjust the import path based on your folder structure

export async function getServerSideProps(context) {
  const token = getCookie("token", { req: context.req, res: context.res });

  try {
    const response = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      props: {
        foods: response.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        foods: [],
        error: error.response?.data?.message || "Failed to fetch food data",
      },
    };
  }
}

export default function MenuPage({ foods, error }) {
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Use the custom hook for pagination
  const { currentFoods, handleNextPage, handlePrevPage, currentPage, totalPages } =
    UsePagination(foods);

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4">
        <Breadcrumb />

        <h1 className="title-logo">Menu List</h1>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-16">
          {currentFoods.map((food) => (
            <li
              key={food.id}
              className="border-2 border-[#f2f2f2] p-8 rounded-lg flex flex-col items-center justify-center gap-4">
              <img
                src={food.imageUrl}
                alt={food.name}
                className="object-cover size-[275px] rounded-full border-[#f2f2f2] border-2"
              />

              <h2 className="text-center title-logo">{food.name}</h2>

              <p className="text-center">{food.description}</p>

              <Link href={`/menu/${food.id}`} className="btn-primary">
                Menu Detail
              </Link>
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between w-full mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={currentPage === 1 ? "btn-default opacity-50" : "btn-secondary"}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "btn-default opacity-50" : "btn-secondary"}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
