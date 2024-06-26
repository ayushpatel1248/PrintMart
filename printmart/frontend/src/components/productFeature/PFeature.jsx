const features = [
  { name: "Books", description: "Designed by Good Goods, Inc." },
  {
    name: "Printout",
    description:
      "All types of books",
  },
  { name: "Photocopy", description: 'all type of photocopy"' },
  { name: "Copies", description: "all good companies copies" },
  { name: "Spirel", description: "project spirel" },
  {
    name: "Pens",
    description:
      "all types of pens gel ball etc",
  },
];

export default function Pfeature() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Products/Services
          </h2>
          <p className="mt-4 text-gray-500">
            VITPrint offers swift printouts, photocopies, and essential
            stationery items at VIT Bhopal. We ensure top quality at the best
            prices, delivering to your class, hostel, or anywhere on campus
            within hours. Simplify your academic life with our fast, reliable
            service tailored for student convenience.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://scooboo.in/cdn/shop/collections/CI-notebook_1.jpg?v=1715847707&width=750"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://scooboo.in/cdn/shop/collections/pens_collection-CI_2.jpg?v=1715670252&width=750"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://blog.tbhcreative.com/wp-content/uploads/print-styling.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://scooboo.in/cdn/shop/collections/Scooboo_Cl_icon_Water_Colours_Pads.png?v=1716357684&width=750"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
