import Cart from "./Cart"

export const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="nav-items w-100">
                        <p className="nav-title text-uppercase fc-white text-center">
                            Hallo World
                        </p>
                        <Cart />
                    </div>
                </div>
            </nav>
        </header>
    )
}