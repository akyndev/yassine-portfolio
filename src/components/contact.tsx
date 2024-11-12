import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export function Contact() {
  return (
    <div className="container" id="contact">
      <div className="flex items-center justify-center w-full flex-col">
        <div className="max-w-[85rem] py-10 lg:py-14 mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
                Hire Me
              </h1>
              <p className="mt-1 md:text-lg text-gray-800 dark:text-neutral-200">
                I help brands and platforms turn big ideas into beautiful digital products and experiences.
              </p>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">What can I expect?</h2>

                <ul className="mt-2 space-y-2">
                  <li className="flex gap-x-3">
                    <svg
                      className="shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-neutral-400">Industry-leading design</span>
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-neutral-400">Developer community support</span>
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      className="shrink-0 mt-0.5 size-5 text-gray-600 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-600 dark:text-neutral-400">Simple and affordable</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10 flex items-center gap-x-5">
                <span className="text-sm text-gray-500 dark:text-neutral-500">Trusted by over 3k customer</span>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">Fill in the form</h2>

                <form>
                  <div className="mt-6 grid gap-4 lg:gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <Label
                          htmlFor="hs-company-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Name
                        </Label>
                        <Input type="text" name="hs-company-hire-us-1" id="hs-company-hire-us-1" />
                      </div>

                      <div>
                        <Label
                          htmlFor="hs-company-website-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Email
                        </Label>
                        <Input type="text" name="hs-company-website-hire-us-1" id="hs-company-website-hire-us-1" />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="hs-about-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Message
                      </Label>
                      <Textarea id="hs-about-hire-us-1" name="hs-about-hire-us-1" rows={4} className="max-h-44" />
                    </div>
                  </div>
                </form>

                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none focus:bg-yellow-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Send inquiry
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    I&apos;ll get back to you in 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
