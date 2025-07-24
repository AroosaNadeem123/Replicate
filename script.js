document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const closeIcon = document.getElementById("closeIcon");
  const mobileSidebar = document.getElementById("mobileSidebar");

  const toggleSidebar = (show) => {
    mobileSidebar?.classList.toggle("show", show);
    hamburger?.style.setProperty("display", show ? "none" : "inline-block");
    closeIcon?.style.setProperty("display", show ? "inline-block" : "none");
  };

  hamburger?.addEventListener("click", () => toggleSidebar(true));
  closeIcon?.addEventListener("click", () => toggleSidebar(false));

  // FAQ accordion
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;

      // Close all others
      document.querySelectorAll(".faq-answer").forEach((a) => {
        if (a !== answer) a.classList.remove("open");
      });
      document.querySelectorAll(".faq-question").forEach((q) => {
        if (q !== btn) q.classList.remove("active");
      });

      // Toggle current
      answer.classList.toggle("open");
      btn.classList.toggle("active");
    });
  });

  // Footer dropdown toggle
  const footerTriggers = document.querySelectorAll(".footer-trigger");

  footerTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".footer-item");

      // Close all others
      document.querySelectorAll(".footer-item").forEach((el) => {
        if (el !== item) el.classList.remove("active");
      });

      // Toggle current
      item.classList.toggle("active");
    });
  });

  // Featured Logos Scroll Indicator
  const scrollContainer = document.querySelector('.featured-logos-scroll');
  const dots = document.querySelectorAll('.scroll-indicators .dot');

  if (scrollContainer && dots.length) {
    scrollContainer.addEventListener('scroll', () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const scrollFraction = scrollLeft / scrollWidth;

      if (scrollFraction < 0.5) {
        dots[0].classList.add('active');
        dots[1].classList.remove('active');
      } else {
        dots[0].classList.remove('active');
        dots[1].classList.add('active');
      }
    });
  }
});
