import { useEffect } from "react";
import { DarkTheme } from "../DarkTheme"
import { Logo } from "./Logo"

export const Header = ({ props }) => {

    const loadTheme = () => {
        if (localStorage.getItem("Theme") == "dark") {

            document.body.classList.add("dark-theme");
            document.getElementById("selectSearch").classList.add("dark-theme");
            document.getElementById("searchInput").classList.add("dark-theme");
            document.getElementById("searchInput").classList.add("dark-placeholdertext");
            document.getElementById("searchInput").classList.add("dark-backgroundcolor");
            document.getElementById("copyright-text").classList.add("dark-theme");
            document.getElementById("team-modal-content").classList.add("dark-theme");
            document.getElementById("checkmark-modal-content").classList.add("dark-theme");
            document.getElementById("flexSwitchCheckDefault").setAttribute("checked", "");
        }
        else if (localStorage.getItem("Theme") == "white") {

            document.body.classList.remove("dark-theme");
            document.getElementById("selectSearch").classList.remove("dark-theme");
            document.getElementById("searchInput").classList.remove("dark-theme");
            document.getElementById("searchInput").classList.remove("dark-placeholdertext");
            document.getElementById("copyright-text").classList.remove("dark-theme");
            document.getElementById("team-modal-content").classList.remove("dark-theme");
            document.getElementById("checkmark-modal-content").classList.remove("dark-theme");
            document.getElementById("flexSwitchCheckDefault").removeAttribute("checked");
        }
    }

    const changeTheme = () => {
        if (localStorage.getItem("Theme") == "white" || localStorage.getItem("Theme") == null) {
            //creating and setting this to dark because it's the first time the user will turn on the dark mode
            localStorage.setItem("Theme", "dark");
            loadTheme();
        }
        else {
            localStorage.setItem("Theme", "white");
            loadTheme();
        }
    }

    useEffect(() => {
        loadTheme();
    }, []);

    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Logo title={"CAT World"} subtitle={"| lots of cats"} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" onClick={changeTheme} id="flexSwitchCheckDefault"></input>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}