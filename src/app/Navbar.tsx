import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 text-xl normal-case">
        {/* <a className="btn-ghost btn text-xl normal-case">MMovies</a> */}
        <Link href="/">MMovies</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/upload">Upload</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
