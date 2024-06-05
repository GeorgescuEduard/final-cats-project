export const TeamModal = () => {
    return <>
        <div className="modal fade" id="teamModalCenter" tabIndex="-1" role="dialog" aria-labelledby="teamModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="teamModalLongTitle">Project Cats Team</h5>
                    </div>
                    <div className="modal-body">
                        <p style={{ marginBottom: 5 }}>Ion-Eduard Georgescu</p>
                        <p style={{ marginBottom: 5 }}>Cosmin-Gabriel Ion</p>
                        <p style={{ marginBottom: 5 }}>Emanuel Gerze Brach</p>
                    </div>
                    <div className="modal-footer">
                        <p><i>We are grateful to our trainers for the amazing courses, and we thank you for sharing your great expetise with us.</i> <br /> Cheers 🍺</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}