export const CheckmarksModal = () => {
    return <>
        <div className="modal modal-lg fade" id="checkmarksModalCenter" tabIndex="-1" role="dialog" aria-labelledby="teamModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="checkmarkModalLongTitle">📌 Project Checkmarks</h5>
                    </div>
                    <div className="modal-body modalCheckmarks">
                        <h5>Mandatory</h5>
                        <p>✅<b>1.</b> Choose one API to use in the web page.</p>
                        <p>✅<b>2.</b> Install React & create the basic application (npx create-react-app your-app)</p>
                        <p>✅<b>3.</b> Build a small web page with a: Header, Body and Footer component</p>
                        <p>✅<b>4.</b> Header will contain a Logo subcomponent that will receive the following props: title, subtitle (pass the title & subtitle you want)</p>
                        <p>✅<b>5.</b> Body will display the results from the GET API request you choose from point #1. Also, you choose what to display, could be the "image", "name" and another property of response object. It depends on the API you choose to use.</p>
                        <p>✅<b>6.</b> Footer will contain 2 subcomponents: </p>
                        <ui>
                            <li style={{ marginLeft: 20 }}>✅Links - The links (choose whatever links you want. at least 2) should be displayed as unordered list items and clicking on a link will open it in a new tab.</li>
                            <li style={{ marginLeft: 20 }}>✅Copyright - It will display "copyright 2024". The year is dynamically determined.</li>
                        </ui>
                        <p>✅<b>7.</b> Style as you want your web page. You can play with color, size, position, padding & margins, background.</p>
                        <hr /><h5>Optional</h5>
                        <p>✅<b>8.</b> Click on a button you define that will trigger a state update. </p>
                        <p>✅<b>9.</b> Define a button that calls an API that returns a random image that will be displayed</p>
                        <p>✅<b>10.</b> Based on a user input make a specific API call.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}