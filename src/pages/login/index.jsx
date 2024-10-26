/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/Breadcrumb";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-bootcamp.do.dibimbing.id/api/v1/login",
        {
          email,
          password,
        },
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            "Content-Type": "application/json",
          },
        }
      );

      setCookie("token", response.data.token); // Simpan token ke cookies
      setSuccess("Login success");
      setTimeout(() => {
        router.push("/");
      }, 3000);

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="min-h-screen lg:min-h-0">
      <div className="gap-16 lg:grid lg:grid-cols-12">
        <aside className="relative hidden h-16 lg:block lg:order-last lg:col-span-6 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="images/login-image.jpg"
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
          />
        </aside>

        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-6 bg-[#222831] rounded-lg">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-center title-logo">Login</h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Please fill out the form below to login to your account.
            </p>

            <form onSubmit={handleLogin} className="grid grid-cols-6 gap-6 mt-4">
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-[#F2F2F2]">
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full mt-1 text-sm text-[#F2F2F2] bg-[#222831] border-[#f2f2f2] border-2 py-1 px-2 rounded-md shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-[#F2F2F2]">
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full mt-1 text-sm text-[#F2F2F2] bg-[#222831] border-[#f2f2f2] border-2 py-1 px-2 rounded-md shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <p className="text-sm text-opacity-50">
                  Email:
                  <br />
                  miftahfarhan@gmail.com
                  <br />
                  <br />
                  Password:
                  <br />
                  qwerty123
                </p>
              </div>

              <div className="flex-col col-span-6 sm:flex sm:gap-4">
                <button type="submit" className="w-full btn-primary">
                  Login
                </button>
              </div>
            </form>

            {error && (
              <p className="bg-[#222831] px-2 py-1 mt-4 font-bold text-red-500 border-2 border-red-500 rounded-md">
                {error}
              </p>
            )}

            {success && (
              <div className="bg-[#222831] rounded-md border-green-400 border-2 p-8 absolute z-30 flex items-center justify-center gap-2 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <h3 className="z-40 font-bold text-green-400">Logging In</h3>

                <div className="z-50 text-green-400 menu-icon animate-spin">
                  <ion-icon name="reload"></ion-icon>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
