import Dashboard_Project_CRUD from "@/components/basicComponents/Dashboard/Dashboard_Project_CRUD";
import Login from "@/components/basicComponents/Dashboard/Login";
import { cookies } from "next/headers";

function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");


  return (
    <section className="  mx-auto max-w-[1440px]    pt-[4vh]  px-6 lg:px-20 3xl:px-0">
      <h1 className="text-center">Dashboard</h1>
      {/* login */}

      {
        token ? (
          <>
            {" "}
           
            <Dashboard_Project_CRUD token={token} />{" "}
          </>
        ) : (
          <Login/>
        )
      }
    </section>
  );
}

export default Dashboard;
