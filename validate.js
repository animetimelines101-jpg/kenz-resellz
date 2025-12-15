document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  let first = document.getElementById("firstName");
  let last = document.getElementById("lastName");
  let city = document.getElementById("city");
  let zip = document.getElementById("zip");
  let email = document.getElementById("email");

  // Capitalize fields
  first.value = capitalize(first.value);
  last.value = capitalize(last.value);
  city.value = capitalize(city.value);

  // Zip validation
  if (!/^\d{5}$/.test(zip.value)) {
    alert("Zip code must be exactly 5 digits.");
    zip.focus();
    return;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return;
  }

  alert("Thank you for contacting Kenz ReSellz!");
  this.reset();
});
