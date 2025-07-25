//alert('Js is connected')

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const message = document.getElementById("message");

const Name = document.getElementById("Name");
const Car = document.getElementById("Car-Type");
const Date = document.getElementById("Date");
const Time = document.getElementById("Time");
const Service = document.getElementById("Service-Selected");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    Name.value.trim() === "" ||
    Car.value.trim() === "" ||
    Date.value.trim() === "" ||
    Time.value.trim() === "" ||
    Service.value.trim() === ""
  ) {
    message.textContent = "Please fill in all fields";
    message.style.color = "red";
  } else {
    message.textContent = "Appointment Booked Successfully";
    message.style.color = "green";

    setTimeout(function () {
      message.textContent = "";
    }, 3000);

    form.reset(); // Clears all form inputs on submission
  }
});

// CARE FORM (Smart Car Care Tips) - NO API NEEDED
const careForm = document.getElementById("careForm");
const askInput = document.getElementById("Ask");
const responseArea = document.getElementById("responseArea");

careForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const userQuestion = askInput.value.trim();
  if (!userQuestion) {
    responseArea.innerHTML =
      "<p style='color: red;'>Please type your question.</p>";
    return;
  }

  responseArea.innerHTML = "<p style='color: blue;'>⏳ Getting your tip...</p>";

  // Simulate AI processing delay
  setTimeout(() => {
    const carCareTip = getCarCareTip(userQuestion);

    responseArea.innerHTML = `
      <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #007bff;">
        <strong>💡 Car Care Tip:</strong><br>
        ${carCareTip}
      </div>
    `;

    // Clear the input
    askInput.value = "";
  }, 1500); // 1.5 second delay to feel like AI processing
});

// Smart car care knowledge base
function getCarCareTip(question) {
  const lowerQuestion = question.toLowerCase();

  // Washing related
  if (lowerQuestion.includes("wash") || lowerQuestion.includes("clean")) {
    return "Wash your car weekly using the two-bucket method - one for soapy water, one for rinsing. Always start from top to bottom and use microfiber cloths to avoid scratches.";
  }

  // Waxing related
  if (lowerQuestion.includes("wax") || lowerQuestion.includes("polish")) {
    return "Wax your car every 3-4 months to protect the paint and maintain shine. Apply in shade, use circular motions, and buff with a clean microfiber cloth.";
  }

  // Interior cleaning
  if (
    lowerQuestion.includes("interior") ||
    lowerQuestion.includes("inside") ||
    lowerQuestion.includes("seat")
  ) {
    return "Clean interior monthly with appropriate cleaners. Use leather conditioner for leather seats, fabric cleaner for cloth seats, and dashboard cleaners for plastic surfaces.";
  }

  // Tire care
  if (lowerQuestion.includes("tire") || lowerQuestion.includes("wheel")) {
    return "Check tire pressure monthly and rotate tires every 5,000-7,500 miles. Clean tires with specialized tire cleaner and apply tire shine for a professional look.";
  }

  // Engine care
  if (
    lowerQuestion.includes("engine") ||
    lowerQuestion.includes("oil") ||
    lowerQuestion.includes("maintenance")
  ) {
    return "Check engine oil monthly and change it every 3,000-5,000 miles. Keep engine bay clean but avoid direct water spray on electrical components.";
  }

  // Paint protection
  if (
    lowerQuestion.includes("paint") ||
    lowerQuestion.includes("scratch") ||
    lowerQuestion.includes("protect")
  ) {
    return "Protect your car's paint with regular waxing, parking in shade when possible, and using paint protection film for high-impact areas. Clean bird droppings immediately.";
  }

  // Frequency questions
  if (
    lowerQuestion.includes("how often") ||
    lowerQuestion.includes("frequency")
  ) {
    return "General car care schedule: Wash weekly, wax every 3-4 months, interior cleaning monthly, oil changes every 3,000-5,000 miles, tire rotation every 5,000-7,500 miles.";
  }

  // Glass/windows
  if (
    lowerQuestion.includes("window") ||
    lowerQuestion.includes("glass") ||
    lowerQuestion.includes("windshield")
  ) {
    return "Clean windows with automotive glass cleaner and microfiber cloths. Clean inside and outside separately. Replace windshield wipers every 6-12 months.";
  }

  // Winter/weather care
  if (
    lowerQuestion.includes("winter") ||
    lowerQuestion.includes("rain") ||
    lowerQuestion.includes("weather")
  ) {
    return "In harsh weather, wash your car more frequently to remove salt and debris. Apply extra wax before winter and check fluid levels regularly.";
  }

  // Default response
  return "For optimal car care, maintain regular washing (weekly), waxing (every 3-4 months), interior cleaning (monthly), and follow your vehicle's maintenance schedule. Always use quality products designed for automotive use.";
}
