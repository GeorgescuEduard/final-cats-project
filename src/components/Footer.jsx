export const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-body-secondary">© 2024 Ubisoft, Inc</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img width="50" height="50" src="https://images.squarespace-cdn.com/content/v1/60a7e7a9de98fd0f5ae126c1/1622242266783-19I9PR0OPBIPST81A7PP/Ubisoft-Logo-Grey.png" alt="ubi-logo" />
            </a>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pictures</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Team</a></li>
                <li className="nav-item"><a href="https://api-ninjas.com/api/cats" className="nav-link px-2 text-body-secondary">API</a></li>
            </ul>
        </footer>)
}