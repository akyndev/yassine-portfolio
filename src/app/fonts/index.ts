import { Poppins } from "next/font/google"
import localFont from "next/font/local"
export const geistVF = localFont({
  src: "./GeistVF.woff"
})

export const geistMonoVF = localFont({
  src: "./GeistMonoVF.woff"
})

export const poppins = Poppins({
  weight: ["100", "400", "600"],
  subsets: ["latin"]
})
