export const FooterLinks = () => {

    return (<ul className="nav col-md-4 justify-content-end" id="footer-links">
        <li className="nav-item"><a href="#" data-bs-toggle="modal" data-bs-target="#checkmarksModalCenter" className="nav-link px-2">Checkmarks</a></li>
        <li className="nav-item"><a href="#" data-bs-toggle="modal" data-bs-target="#teamModalCenter" className="nav-link px-2">Team</a></li>
        <li className="nav-item"><a href="https://api-ninjas.com/api/cats" target="_blank" className="nav-link px-2">API</a></li>
    </ul>)
}