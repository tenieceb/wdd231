document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const summary = document.getElementById("order-summary");

  if (!params.has("name")) {
    summary.innerHTML = `<p>Sorry, we couldn't find your order information. Please return to the <a href="order.html">order page</a>.</p>`;
    return;
  }

  const data = {
    "Name": params.get("name"),
    "Email": params.get("email"),
    "Phone": params.get("phone"),
    "Product": params.get("product"),
    "Date Needed": params.get("no-hurry") ? "No Hurry" : params.get("needed-by") || "Not Provided",
    "Customizations": params.get("custom") || "None"
  };

  const list = document.createElement("ul");
  for (const [label, value] of Object.entries(data)) {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${label}:</strong> ${value}`;
    list.appendChild(item);
  }

  summary.appendChild(list);
});
