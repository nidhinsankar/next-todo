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
            <Link href={"/login"}>login</Link>
          </li>
          <li>
            <Link href={"/sign-up"}>sign-up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
