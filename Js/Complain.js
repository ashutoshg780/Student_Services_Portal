function txtenable() {
  const sidind = document.getElementById("sidind");
  const useemail = document.getElementById("useemail");
  const usepno = document.getElementById("usepno");

  if (sidind.checked) {
    // Enable fields if "Individual" is selected
    useemail.disabled = false;
    usepno.disabled = false;
    useemail.placeholder = "Enter your Email";
    usepno.placeholder = "Enter your Phone Number";
  } else {
    // Disable fields if "From Batch" is selected
    useemail.disabled = true;
    usepno.disabled = true;
    useemail.placeholder = "Email (disabled)";
    usepno.placeholder = "Phone Number (disabled)";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const complaintBtn = document.getElementById("complaintSubmitBtn");
  const confirmModal = document.getElementById("confirmModal");
  const modalSummary = document.getElementById("modalSummary");
  const confirmBtn = document.getElementById("confirmSubmit");
  const cancelBtn = document.getElementById("cancelSubmit");

  complaintBtn.addEventListener("click", () => {
    // Collect entered data
    const from = document.getElementById("chid").value.trim();
    const email = document.getElementById("useemail").value.trim();
    const phone = document.getElementById("usepno").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const complaint = document.getElementById("complaintText").value.trim();

    // Validation
    if (!from || !subject || !complaint) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    // Show modal with summary
    modalSummary.innerHTML = `
      <p><strong>From:</strong> ${from}</p>
      <p><strong>Email:</strong> ${email || "(not provided)"}</p>
      <p><strong>Phone:</strong> ${phone || "(not provided)"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Complaint:</strong> ${complaint}</p>
    `;
    confirmModal.classList.remove("hidden");
  });

  confirmBtn.addEventListener("click", () => {
    confirmModal.classList.add("hidden");
    alert("✅ Complaint submitted successfully!");
    window.location.href = "Home.html"; // Redirect
  });

  cancelBtn.addEventListener("click", () => {
    confirmModal.classList.add("hidden");
  });
});

