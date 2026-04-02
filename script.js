// 🔹 1. Navbar active link highlight
let links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "#F4B9B2";
  }
});


// 🔹 2. Image click (index + about)
let img = document.querySelector("img");

if (img) {
  img.addEventListener("click", function () {
    alert("Hey 👀 that's me!");
  });
}


// 🔹 3. Button hover text change (fun effect)
let btn = document.querySelector("button");

if (btn) {
  btn.addEventListener("mouseover", function () {
    btn.innerText = "Click to submit 🚀";
  });

  btn.addEventListener("mouseout", function () {
    btn.innerText = "BOOM! You are in.";
  });
}


// 🔹 4. Form validation (index + contact)
let form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name")?.value || "";
    let email = document.getElementById("email")?.value || "";
    let message = document.getElementById("Message")?.value || "";

    if (name === "" || email === "") {
      alert("Fill at least name & email 😭");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email 😤");
      return;
    }

    alert("Thanks " + name + " 💖 Message received!");

    form.reset();
  });
}


// 🔹 5. Typing effect (index page intro)
let heading = document.querySelector("h1");

if (heading) {
  let text = heading.innerText;
  heading.innerText = "";

  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      heading.innerText += text.charAt(i);
      i++;
      setTimeout(typeEffect, 50);
    }
  }

  typeEffect();
}


// 🔹 6. Card hover sound effect (optional fun 😏)
let cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    console.log("Hovered a card 🔥");
  });
});
console.log(name, email);