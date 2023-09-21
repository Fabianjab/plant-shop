function init() {
    if (!localStorage.getItem("popupShown")) {
        openPopup();
    }
}

function openPopup() {
    const popupContent = `
        <div onclick="closeWindow()" id="close_popup">
            <div id="popup">
                <h3>Nur heute versandkostenfrei bestellen!</h3>
                <span>Bestellen Sie noch heute ab einem Bestellwert von 40 Euro und Sie erhalten Ihre Bestellung versandkostenfrei.</span>
                Test
            </div>
        </div>`;

    document.getElementById("popUp").innerHTML = popupContent;

    localStorage.setItem("popupShown", "true");
}

function closeWindow() {
    const closePopup = ``;
    document.getElementById("popUp").innerHTML = closePopup;
}

window.onload = init;
