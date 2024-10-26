/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { getCookie } from "cookies-next";
import Breadcrumbs from "@/components/Breadcrumb";

export async function getServerSideProps(context) {
  const { idMakanan } = context.params; // Mengambil id dari URL
  const token = getCookie("token", { req: context.req, res: context.res });

  try {
    const response = await axios.get(
      `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${idMakanan}`,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      props: {
        food: response.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        food: null,
        error: error.response?.data?.message || "Failed to fetch food details",
      },
    };
  }
}

export default function FoodDetailPage({ food, error }) {
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      <div className="flex flex-col gap-4">
        <Breadcrumbs />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-2 border-[#f96d00] bg-[#222831] p-8 rounded-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-center title-logo">{food.name}</h1>

            <img
              src={food.imageUrl}
              alt={food.name}
              className="rounded-full border-2 border-[#f2f2f2] w-[275px] h-[275px] object-cover mx-auto"
            />
          </div>

          <div className="flex flex-col gap-4 border-2 border-[#f2f2f2] rounded-lg p-4">
            <p className="border-b-2 border-[#f2f2f2] pb-4">
              Description:
              <br />
              {food.description}
            </p>

            <p className="border-b-2 border-[#f2f2f2] pb-4">
              Rating:
              <br />
              {food.rating}/5
            </p>

            <p>
              Created At:
              <br />
              {new Date(food.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
