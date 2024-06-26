import {
  ForwardIcon,
  ClipboardDocumentCheckIcon,
  BookOpenIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Fast, reliable delivery to your class, hostel, or anywhere on VIT Bhopal campus.",
    icon: ForwardIcon,
  },
  {
    name: "Top-quality products at unbeatable prices.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Order now and experience the convenience of doorstep delivery within hours!",
    icon: BookOpenIcon,
  },
];

export default function HeroSection() {
  return (
    <div className="overflow-hidden bg-[#F5F5F7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Welcome to VITPrint!
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your college buddy for all essentials.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your go-to solution for all printouts, photocopies, and
                stationery needs.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none mb-8">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="#"
                className="flex-none rounded-full bg-gray-900 px-3.5 py-3 mt-16 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Print now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <img
            src="https://www.efacility.in/wp-content/uploads/2021/02/Printing-Banner.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
