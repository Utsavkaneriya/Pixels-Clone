
const Navbar = ({ setSearch }) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fw-bold">
                <div className="container-fluid bg-dark p-3">
                    <a class="navbar-brand" href="#">Pixel Clone     |</a>
                    <button className="navbar-toggler" type="button" data-bs-
                        toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-
                        expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="#" onClick={() =>

                                    setSearch("animal")}>Animal</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() =>

                                    setSearch("technology")}>Technology</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() =>

                                    setSearch("travel")}>Travel</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() =>

                                    setSearch("fashion")}>Fashion</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() =>

                                    setSearch("city")}>City</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() =>

                                    setSearch("nature")}>Nature</a>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container my-4">
                <div class="d-flex justify-content-center">
                    <input type="text" class="form-control w-50" id="inputAddress"

                        placeholder="Search"

                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
        </>
    );

}

export default Navbar;