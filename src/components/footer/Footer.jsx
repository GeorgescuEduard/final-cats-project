import { CheckmarksModal } from "./CheckmarksModal"
import { FooterCopyright } from "./Footer-Copyright"
import { FooterLinks } from "./Footer-Links"
import { TeamModal } from "./TeamModal"

export const Footer = () => {

    return (
        <div className="Footer">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <FooterCopyright />

                <a className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" href="https://www.ubisoft.com/en-gb/" target="_blank">
                    <img width="50" height="50" src="https://images.squarespace-cdn.com/content/v1/60a7e7a9de98fd0f5ae126c1/1622242266783-19I9PR0OPBIPST81A7PP/Ubisoft-Logo-Grey.png" alt="ubi-logo" />
                </a>

                <FooterLinks />
            </footer>
            <CheckmarksModal />
            <TeamModal />
        </div>)
}