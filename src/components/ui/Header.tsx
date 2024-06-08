import Link from "next/link"
import { Button } from "./button"
import Nav from "./Nav"
const Header = () => {
  return (
    <header className="py-7 xl:py-12 text-white text-xl">
       <div className="container mx-auto flex justify-between items-center">
            <Link href={"/"}>
                <h1 className="text-4xl font-semibold ">
                    Nursultan
                    <span className="text-accent">.</span>
                </h1>
            </Link>

            <div className="hidden xl:flex text-white items-center gap-8">
                <Nav/>
                <Link href={"/contact"}>
                    <Button>Hire me</Button>
                </Link>
            </div>



            {/* movile nav */}

            <div className="xl:hidden">
                movile nav
            </div>



       </div>
    </header>
  )
}

export default Header