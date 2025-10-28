import UpdatePage from "@/app/components/update";
import { getSingleData } from "@/SignUp";

export default async function UpdateId(props) {
  const { params } = await props; // ✅ Await props because params is async in new Next.js versions
  const { id } = params;

  if (!id) {
    return <div>id is required</div>;
  }

  const data = await getSingleData(id);

  if (!data) {
    return <div>data is not found</div>;
  }

  return <UpdatePage data={data} />;
}
