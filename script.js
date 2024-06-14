

  // Owl Carousel
  
  $(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 0,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: [" <i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });

  $(".owl-prev, .owl-next").click(function () {
    $(this).toggleClass("no-color");
  });
});

// Counter 

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText.replace('%', '');

    const increment = target / 200;
    // console.log(increment);

    if (c < target) {
      if (target === 100) {
        counter.innerText = `${Math.ceil(c + increment)}%`;
      } else {
        counter.innerText = `${(c + increment).toFixed(4)}%`;
      }
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = `${target}%`;
    }
  };

  updateCounter();
});

