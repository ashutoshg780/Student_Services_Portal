/* ================================== */
/* MAIN.GLOBAL.JS → Common Scripts    */
/* ================================== */

/* Sidebar Toggle (Reusable) */
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

/* Date & Time Auto Update */
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString();
    document.getElementById('datetime').innerHTML = date + " | " + time;
}
setInterval(updateDateTime, 1000);
updateDateTime();

/* Generic Alert (Used for Forgot Password, Contact Office, etc.) */
function showAlert(msg) {
    alert(msg);
}