document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const data = { name, email, message };

  try {
    const response = await fetch("https://messageme-aoh1.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong.");
  }
});