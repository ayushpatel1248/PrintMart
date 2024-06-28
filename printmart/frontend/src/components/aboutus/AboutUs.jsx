import {
    ForwardIcon,
    ClipboardDocumentCheckIcon,
    BookOpenIcon,
  } from "@heroicons/react/20/solid";
  import Header from '../header/Header'

export default function AboutUs() {
  return (
    <>
    <Header/>
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
    </div>
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 text-indigo-600">About Us</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">we make life easy</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
            We are your reliable source for all printing, photocopying, and stationery needs at VIT Bhopal.
            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="https://scooboo.in/cdn/shop/files/doorstep_delivery-footer-wt.jpg?v=1716264660&width=2400"
          alt=""
        />
      </div>
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>
            Our Mission: Our mission is to provide top-quality products at unbeatable prices, ensuring you have everything you need without breaking the bank.
            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <ForwardIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
             Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                  blanditiis ratione.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ClipboardDocumentCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  Fast Delivery: Enjoy the convenience of fast delivery to your class, hostel, or any location on campus. We offer delivery within 1-2 hours for select items and a maximum of one day for all orders.
                </span>
              </li>
              <li className="flex gap-x-3">
                <BookOpenIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                Student-Focused: We understand the busy lives of students and are dedicated to making your academic journey smoother. Our services are tailored to meet your needs quickly and efficiently.
                </span>
              </li>
            </ul>
            <p className="mt-8">
            Affordable Quality: We ensure that all our products are of the highest quality and available at the lowest market rates, so you can focus on your studies without worrying about costs.


            </p>
           
            <p className="mt-6">
            Convenience at Your Fingertips: With VITPrint, experience the ease and efficiency of having your academic essentials delivered right to your doorstep.Your College Buddy: We are more than just a service; we are your college buddy, here to support you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

