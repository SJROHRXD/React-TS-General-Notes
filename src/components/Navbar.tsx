import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <Link to="/">
          <div className="">
            <button className="btn btn-ghost normal-case text-sm">Home</button>
          </div>
        </Link>
        <Link to="/components">
          <div className="">
            <button className="btn btn-ghost normal-case text-sm">
              Components
            </button>
          </div>
        </Link>
        <Link to="/props">
          <div className="">
            <button className="btn btn-ghost normal-case text-sm">Props</button>
          </div>
        </Link>
        <Link to="/state">
          <div className="">
            <button className="btn btn-ghost normal-case text-sm">State</button>
          </div>
        </Link>
        <Link to="/hooks">
          <div className="">
            <button className="btn btn-ghost normal-case text-sm">Hooks</button>
          </div>
        </Link>
        <Link to="/customhooks">
          <div className="">
            <button className="btn btn-ghost normal-case text-sm">
              Custom Hooks
            </button>
          </div>
        </Link>

        <div className="grid ml-auto mr-2">
          <button className="btn btn-square btn-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
