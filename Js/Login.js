document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const forgotBtn = document.getElementById("forgotBtn");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // just in case
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (username === "ECC20200074" && password === "02062002") {
      alert("✅ Login successfully");
      window.location.href = "Stu_1/Home.html";
    }
    else if (username === "ECC20200079" && password === "11112004") {
      alert("✅ Login successfully");
      window.location.href = "Stu_2/Home.html";
    }
    else {
      alert("❌ WRONG CREDENTIALS");
    }
  });

  forgotBtn.addEventListener("click", () => {
    alert("📩 Contact administrative office");
  });
});
