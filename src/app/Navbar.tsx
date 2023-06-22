import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 text-4xl normal-case">
        {/* Updated font size */}
        {/* <a className="btn-ghost btn text-xl normal-case">MMovies</a> */}
        <Link href="/">MMovies</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/upload"
              className="rounded-md bg-blue-500 px-4 py-2 text-lg font-medium text-white hover:bg-blue-600"
            >
              Upload
            </Link>{" "}
            {/* Apply Tailwind CSS classes */}
          </li>
        </ul>
      </div>
    </div>
  );
}
