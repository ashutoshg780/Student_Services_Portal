// Change_Password.js
document.addEventListener("DOMContentLoaded", () => {
    const currentPass = document.getElementById("currentPass");
    const newPass = document.getElementById("newPass");
    const confirmPass = document.getElementById("confirmPass");
    const updateBtn = document.getElementById("updatePasswordBtn");

    updateBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // === Validation Rules ===
        if (!currentPass.value.trim()) {
            showAlert("❌ Please enter your current password.");
            return;
        }

        if (!newPass.value.trim()) {
            showAlert("❌ Please enter a new password.");
            return;
        }

        if (newPass.value.length < 6) {
            showAlert("⚠️ New password must be at least 6 characters long.");
            return;
        }

        if (newPass.value !== confirmPass.value) {
            showAlert("❌ New Password and Confirm Password do not match.");
            return;
        }

        if (currentPass.value === newPass.value) {
            showAlert("❌ New Password cannot be same as Current Password.");
            return;
        }

        // === Get Enrollment No from sidebar HTML ===
        const enrollmentElement = document.querySelector(".student-info p");
        const enrollment = enrollmentElement
            ? enrollmentElement.innerText.replace("Enrollment no.:", "").trim()
            : null;

        const validCurrent = getDefaultPassword(enrollment);

        if (currentPass.value !== validCurrent) {
            showAlert("❌ Current password is incorrect.");
            return;
        }

        // ✅ Success — simulate password update
        showSuccessModal("✅ Password updated successfully!");
    });

    // === Get default password based on enrollment ===
    function getDefaultPassword(enrollmentNo) {
        if (enrollmentNo === "ECC20200074") return "02062002";
        if (enrollmentNo === "ECC20200079") return "11112004";
        return null;
    }

    // === Error / warning alert ===
    function showAlert(message) {
        removeOldModal();

        const modal = document.createElement("div");
        modal.className = "modal-overlay";
        modal.innerHTML = `
      <div class="modal glass-box change-password-box">
        <h2 class="txtcenter">${message}</h2>
      </div>
    `;
        document.body.appendChild(modal);

        // Auto close after 3 seconds
        setTimeout(() => modal.remove(), 3000);
    }

    // === Success modal with confirm button ===
    function showSuccessModal(message) {
        removeOldModal();

        const modal = document.createElement("div");
        modal.className = "modal-overlay";
        modal.innerHTML = `
    <div class="modal glass-box change-password-box">
      <h2 class="txtcenter">${message}</h2>
    </div>
  `;
        document.body.appendChild(modal);

        // Auto redirect after 1 second
        setTimeout(() => {
            alert("❌ Server issue: Your new password cannot be updated in the server.");
            window.location.href = "Home.html"; // ✅ Redirect to Home page
        }, 1000);
    }
    // === Helper to avoid duplicate modals ===
    function removeOldModal() {
        const oldModal = document.querySelector(".modal-overlay");
        if (oldModal) oldModal.remove();
    }
});
