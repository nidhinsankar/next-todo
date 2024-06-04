import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul>
          <li>
            <Link href={"/auth"}>Auth</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
