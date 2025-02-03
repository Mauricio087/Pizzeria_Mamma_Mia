

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand navbar-light bg-dark">
        <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >

            <span className="navbar-toggler-icon"></span>

            </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className="nav-link text-white" href="#">
                               Pizzería Mamma Mia!
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-white border border-white rounded " href="#">
                               🍕Home
                            </button>
                        </li>
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <button className="nav-link text-white border border-white rounded mx-2" href="#">
                                      🔓Profile
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link text-white border border-white rounded mx-2" href="#">
                                      🔒Logout
                                    </button>
                                </li>
                            </>
                        ) :
                        (
                            <>
                                <li className="nav-item">
                                    <button className="nav-link text-white border border-white rounded mx-2" href="#">
                                       🔐Login
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link text-white border border-white rounded mx-2" href="#">
                                       🔐Register
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                    <button className="total btn border border-white text-white">
                        🛒 Total: ${total.toLocaleString()}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar