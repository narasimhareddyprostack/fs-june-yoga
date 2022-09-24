import { Link } from 'react-router-dom'
let Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/">Product Cart Application</Link>
        <div >
            <ul className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/products">Products</Link></li>
                <li className="nav-list"><Link className="nav-link" to="/create-product">Create Product</Link></li>


            </ul>
        </div>
        <div className="ml-auto">
            <ul className="navbar-nav">

                <li className="nav-list"><Link className="nav-link" to="/admin">Admin</Link></li>



            </ul>
        </div>
    </nav>
}
export default Navbar