document.addEventListener("DOMContentLoaded", function () {
  const birthday = document.querySelector(".birthday");
  const card = document.querySelector(".card");
  const loadingOverlay = document.querySelector("#loading-overlay");

  // Eventos existentes para mouse y touch
  birthday.addEventListener("mouseenter", function () {
    card.style.top = "-90px";
  });
  birthday.addEventListener("mouseleave", function () {
    card.style.top = "5px";
  });
  birthday.addEventListener("touchstart", function () {
    card.style.top = "-90px";
  });
  birthday.addEventListener("touchend", function () {
    card.style.top = "5px";
  });

  birthday.addEventListener("click", function () {
    loadingOverlay.style.display = "flex";

    setTimeout(function () {
      window.location.href = "https://transcendent-pie-072c7e.netlify.app/"; // Cambia la URL
    }, 1500);
  });
});
