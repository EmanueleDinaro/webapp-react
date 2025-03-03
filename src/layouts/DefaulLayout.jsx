import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header></Header>
      <main className="bg-neutral-200">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}
