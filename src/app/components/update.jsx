"use client";
import { updateRecord } from "@/SignUp";
import { getSingleData } from "@/SignUp";

export default function UpdatePage({ data }) {
  async function HandleSubmit(e) {
    e.preventDefault();

    const id = data?.id;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await updateRecord({
      id,
      name,
      email,
      password,
    });
  }

  return (
    <main>
      <div className="flex justify-center items-center h-screen w-screen flex-col gap-4">
        <p className="text-3xl font-bold">Update your settings</p>

        {data ? (
          <form onSubmit={HandleSubmit} className="flex flex-col gap-2.5">
            <input type="hidden" name="id" value={data?.id || ""} />

            <input
              className="px-4 py-1.5 border-2 border-amber-400 rounded-lg"
              type="text"
              name="name"
              defaultValue={data?.name || ""}
              required
            />

            <input
              className="px-2.5 py-1.5 border-2 border-amber-300 rounded-lg"
              type="email"
              name="email"
              defaultValue={data?.email || ""}
              required
            />

            <input
              className="px-2.5 py-1.5 border-2 border-amber-300 rounded-lg"
              type="text"
              name="password"
              defaultValue={data?.password || ""}
              required
            />

            <button
              type="submit"
              className="px-2.5 py-1.5 bg-amber-300 rounded-lg text-white font-bold"
            >
              Update
            </button>
          </form>
        ) : (
          <p className="text-gray-500 text-center">Loading...</p>
        )}
      </div>
    </main>
  );
}
