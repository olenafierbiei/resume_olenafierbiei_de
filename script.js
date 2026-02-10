document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".info img");
  const dots = document.querySelectorAll("#foto-profil li");
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % images.length;
    showSlide(nextIndex);
  }

  // Запуск автоматичного перемикання (кожні 5 секунд)
  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Клік по кружечках
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      clearInterval(slideInterval); // Зупиняємо старий таймер
      startInterval(); // Запускаємо новий після кліку
    });
  });

  // Ініціалізація
  showSlide(0);
  startInterval();
});



document.addEventListener("DOMContentLoaded", function () {
  const showFormBtn = document.getElementById('show-form-btn');
  const formContainer = document.getElementById('contact-form-container');

  showFormBtn.addEventListener('click', function () {
    // Показуємо форму
    formContainer.style.display = 'block';
    // Ховаємо головну кнопку "Send message"
    showFormBtn.style.display = 'none';
  });
});