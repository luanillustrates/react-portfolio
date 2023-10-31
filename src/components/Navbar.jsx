export default function Navbar() {
    return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href='/' className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
    );
  }
