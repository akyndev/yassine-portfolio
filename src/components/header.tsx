import Link from "next/link"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="py-4 " id="home">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-xl">YASSINE.</div>
          <nav className="hidden md:block">
            <ul className="flex ">
              <li>
                <Link href={"#home"}>
                <Button variant={"ghost"}>Home</Button>
                </Link>
              </li>
              <li>
                <Link href={"#about"}>
                <Button variant={"ghost"}>About</Button>
                </Link>
              </li>
              <li>
                <Link href={"#services"}>
                <Button variant={"ghost"}>Services</Button>
                </Link>
              </li>
              <li>
                <Link href={"#works"}
                >

                <Button variant={"ghost"}>Works</Button>
                </Link>
              </li>
              <li>
                <Link href={"#contact"}>
                <Button variant={"ghost"}>Contact</Button>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="relative border border-yellow-600 cursor-pointer inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-yellow-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Let&apos;s Talk
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
