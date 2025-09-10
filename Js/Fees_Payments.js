document.addEventListener("DOMContentLoaded", () => {
  const feeOptions = document.querySelectorAll('input[name="fees"]');
  const payNowBtn = document.getElementById("submitFeeBtn");

  feeOptions.forEach(option => {
    option.addEventListener("change", () => {
      if (document.querySelector('input[name="fees"]:checked')) {
        payNowBtn.disabled = false; // Enable button
      }
    });
  });
});
