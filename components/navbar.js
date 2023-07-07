import Link from "next/link";

const Navbar = () => {
  const navigation = [
    {
      name: "Overview",
      href: "#overview",
    },
    {
      name: "Call for Participation",
      href: "#call-for-participation",
    },
    {
      name: "Workshop Agenda",
      href: "#agenda",
    },
    {
      name: "Organizers",
      href: "#organizers",
    },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-center mx-auto">
        {/* menu  */}
        <div className="text-center items-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((item, index) => (
              <li className="lg:mr-3 nav__item" key={index}>
                <Link
                  href={item.href}
                  className="inline-block lg:pr-4 py-2 text-lg font-medium text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
