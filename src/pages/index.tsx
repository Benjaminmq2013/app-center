import AppsMenu from "@/Layout/AppsMenu";
import Navbar from "../Layout/Navbar"

export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <AppsMenu/>

      <div className="early-access--tag" >Early Access</div>
    </main>
  );
}
