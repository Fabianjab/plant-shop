let countdownInterval; 

function init() {
    // if (!localStorage.getItem("popupShown")) {
    //     openPopup();
    // }

    openPopup();
}

function openPopup() {
    const popupContent = `
        <div onclick="closeWindow()" id="close_popup">
            <div id="popup">
                <h3>VERSANDKOSTENFREI BESTELLEN</h3>
                <img id="image-popup" src="/img/kostenloser-versand.png" alt="kostenfreier Versand">
                <span>Bestellen Sie noch heute und erhalten Sie Ihre Bestellung versandkostenfrei ab einem Bestellwert von 50 Euro.</span>
                <div id="countdown"></div>
            </div>
        </div>`;

    document.getElementById("popUp").innerHTML = popupContent;

    localStorage.setItem("popupShown", "true");

    startCountdown();
}

function closeWindow() {
    clearInterval(countdownInterval); // Das Intervall stoppen, wenn das Popup geschlossen wird
    const closePopup = ``;
    document.getElementById("popUp").innerHTML = closePopup;
}

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");

    if (!countdownElement) {
        return; // Wenn das Element nicht gefunden wird, die Funktion verlassen
    }

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeDifference = tomorrow - now;

    if (timeDifference <= 0) {
        countdownElement.innerHTML = "Countdown abgelaufen!";
    } else {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const countdownText = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
        countdownElement.innerHTML = countdownText;
    }
}

function startCountdown() {
    updateCountdown(); // Initialen Countdown-Start aufrufen
    setInterval(updateCountdown, 1000); // Alle 1000 Millisekunden (1 Sekunde) aktualisieren
}
