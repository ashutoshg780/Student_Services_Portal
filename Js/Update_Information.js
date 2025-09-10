// Enable/disable fields with checkbox
function toggleField(fieldId) {
  let field = document.getElementById(fieldId);
  field.disabled = !field.disabled;
}

// Handle photo upload live preview
document.getElementById("photoUpload").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("spic").src = e.target.result; // update preview
    };
    reader.readAsDataURL(file);
  }
});

// Dictionary for human-readable labels
const fieldLabels = {
  sideid: "Enrollment No.",
  snameeid: "Name",
  sfnameeid: "Father's Name",
  smnameeid: "Mother's Name",
  sdobeid: "DOB",
  spaddeid: "Permanent Address",
  scaddeid: "Current Address",
  spnoeid: "Mobile No.",
  semaileid: "Email",
  sadhnoeid: "Aadhar",
  sgeneid: "Gender",
  scsteid: "Category"
};

// Save button → show modal
document.getElementById("saveBtn").addEventListener("click", function () {
  let summary = "";

  // Loop through all fields in the dictionary
  Object.keys(fieldLabels).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      let value;
      if (!el.disabled && el.value.trim() !== "") {
        // Field is enabled and updated
        value = el.value.trim();
      } else {
        // Field untouched → show "No Change"
        value = "No Change";
      }
      summary += `<p><strong>${fieldLabels[id]}:</strong> ${value}</p>`;
    }
  });

  // Add photo preview (with change check)
  const spic = document.getElementById("spic");
  if (spic && spic.src) {
    summary += `<p><strong>Photo:</strong><br><img src="${spic.src}" width="100"></p>`;
  } else {
    summary += `<p><strong>Photo:</strong> No Change</p>`;
  }

  // Inject summary into modal
  document.getElementById("modalSummary").innerHTML = summary;
  document.getElementById("confirmModal").classList.remove("hidden");
});

// ✅ Confirm submit
document.getElementById("confirmSubmit").addEventListener("click", () => {
    alert("Updation will be done in 7 Days");
    window.location.href = "Home.html";   // ✅ Redirect to Home page
});


document.getElementById("cancelSubmit").addEventListener("click", function () {
  document.getElementById("confirmModal").classList.add("hidden");
});
