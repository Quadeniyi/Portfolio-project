import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-lime-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Qua<span className="text-lime-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { href, id, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="tracking-wide capitalize text-lg hover:text-lime-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
