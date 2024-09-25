import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit";

function Navbar() {
  return (
    <nav className="navbar container">
      <Link href="/" className="navbar-brand mx-4">
        Superhero Identity
      </Link>
      <Link href="/add">
        <MDBBtn className="mr-4">New Identity</MDBBtn>
      </Link>
    </nav>
  );
}

export default Navbar;
