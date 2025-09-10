// ==========================
// PDF Download Script
// ==========================

// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      // Select the table you want to export
      const table = document.querySelector(".marksheet-table");

      if (!table) {
        alert("No table found to export!");
        return;
      }

      // Use html2canvas to capture the table
      html2canvas(table, {
        scale: 2, // better quality
        backgroundColor: "#ffffff"
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Initialize jsPDF (portrait, mm, A4 size)
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF("p", "mm", "a4");

        // Page width/height
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Calculate image dimensions
        const imgWidth = pageWidth - 20; // left/right margin
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let position = 10; // top margin
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

        // Save PDF
        pdf.save("Academic_Score.pdf");
      });
    });
  }
});
