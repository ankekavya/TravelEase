
/* =========================================================
   TRAVELEASE - COMPLETE JAVASCRIPT
   Separate page navigation, destination search,
   destination details, packages and demo forms.
   ========================================================= */

// ---------------- IMAGE HELPER ----------------

const photo = (id, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;


// ---------------- DESTINATION DATA ----------------

const destinationData = {
  bali: {
    name: "Bali",
    location: "INDONESIA",
    tagline: "Discover the beauty of a tropical paradise.",
    intro: "Bali is known for tropical beaches, green rice terraces, waterfalls, temples and relaxing resorts. Explore nature, local culture and outdoor experiences.",
    hero: photo("photo-1537996194471-e657df975ab4", 1600),
    highlights: [
      {
        category: "PLACES TO VISIT",
        title: "Tegallalang Rice Terraces",
        description: "Explore green rice fields and beautiful tropical landscapes.",
        image: photo("photo-1537996194471-e657df975ab4")
      },
      {
        category: "BEACHES & NATURE",
        title: "Island Beaches",
        description: "Enjoy coastal scenery, blue water and peaceful beach time.",
        image: photo("photo-1500375592092-40eb2168fd21")
      },
      {
        category: "THINGS TO DO",
        title: "Water Adventures",
        description: "Find inspiration for snorkeling, water activities and outdoor adventures.",
        image: photo("photo-1530789253388-582c481c54b0")
      },
      {
        category: "HOTELS & STAYS",
        title: "Tropical Pool Villas",
        description: "Browse ideas for relaxing stays with pools and lush surroundings.",
        image: photo("photo-1571896349842-33c89424de2d")
      }
    ]
  },

  switzerland: {
    name: "Switzerland",
    location: "EUROPE",
    tagline: "Experience the magic of the Swiss Alps.",
    intro: "Switzerland is famous for dramatic mountain landscapes, clear lakes, charming villages and scenic train journeys. It is a destination for nature lovers and outdoor explorers.",
    hero: photo("photo-1531366936337-7c912a4589a7", 1600),
    highlights: [
      {
        category: "PLACES TO VISIT",
        title: "Swiss Alpine Mountains",
        description: "Discover mountain scenery, alpine villages and panoramic viewpoints.",
        image: photo("photo-1464822759023-fed622ff2c3b")
      },
      {
        category: "NATURE & LAKES",
        title: "Beautiful Alpine Lakes",
        description: "Explore peaceful lakes surrounded by mountain landscapes.",
        image: photo("photo-1470770841072-f978cf4d019e")
      },
      {
        category: "THINGS TO DO",
        title: "Mountain Adventures",
        description: "Get inspired by hiking routes, scenic trails and outdoor activities.",
        image: photo("photo-1551632811-561732d1e306")
      },
      {
        category: "HOTELS & STAYS",
        title: "Mountain View Hotels",
        description: "See accommodation inspiration with beautiful alpine surroundings.",
        image: photo("photo-1445019980597-93fa8acb246c")
      }
    ]
  },

  paris: {
    name: "Paris",
    location: "FRANCE",
    tagline: "Fall in love with the city of lights.",
    intro: "Paris is known for its romantic atmosphere, iconic architecture, art, fashion, cafés and food. Discover the charm of one of the world's best-known cities.",
    hero: photo("photo-1502602898657-3e91760cbb34", 1600),
    highlights: [
      {
        category: "PLACES TO VISIT",
        title: "Eiffel Tower",
        description: "Discover the iconic landmark and views across Paris.",
        image: photo("photo-1502602898657-3e91760cbb34")
      },
      {
        category: "CITY EXPLORATION",
        title: "Romantic Streets",
        description: "Walk through elegant streets, riverside paths and historic areas.",
        image: photo("photo-1499856871958-5b9627545d1a")
      },
      {
        category: "FOOD & CULTURE",
        title: "French Food Experiences",
        description: "Find inspiration for cafés, bakeries and local food experiences.",
        image: photo("photo-1517248135467-4c7edcad34c4")
      },
      {
        category: "HOTELS & STAYS",
        title: "Elegant City Hotels",
        description: "Explore ideas for comfortable stays while visiting the city.",
        image: photo("photo-1566073771259-6a8506099945")
      }
    ]
  },

  maldives: {
    name: "Maldives",
    location: "INDIAN OCEAN",
    tagline: "Escape to a peaceful island paradise.",
    intro: "The Maldives is known for clear ocean water, white-sand beaches, coral reefs and overwater villas. It is a popular setting for relaxing island holidays and water activities.",
    hero: photo("photo-1514282401047-d79a71a590e8", 1600),
    highlights: [
      {
        category: "BEACHES",
        title: "White Sand Beaches",
        description: "Relax with beautiful beaches and turquoise ocean scenery.",
        image: photo("photo-1500375592092-40eb2168fd21")
      },
      {
        category: "WATER ACTIVITIES",
        title: "Snorkeling Inspiration",
        description: "Discover ideas for exploring coral reefs and marine life.",
        image: photo("photo-1544551763-46a013bb70d5")
      },
      {
        category: "ISLAND EXPLORATION",
        title: "Tropical Island Views",
        description: "Enjoy island scenery and unforgettable ocean landscapes.",
        image: photo("photo-1514282401047-d79a71a590e8")
      },
      {
        category: "HOTELS & STAYS",
        title: "Overwater Villa Inspiration",
        description: "Browse ideas for island resorts and relaxing stays over the water.",
        image: photo("photo-1571896349842-33c89424de2d")
      }
    ]
  },

  manali: {
    name: "Manali",
    location: "HIMACHAL PRADESH, INDIA",
    tagline: "Discover the beauty of the Himalayas.",
    intro: "Manali is a mountain destination surrounded by peaks, valleys, rivers and forests. It is a good place to explore nature, local culture and outdoor adventures.",
    hero: photo("photo-1626621341517-bbf3d9990a23", 1600),
    highlights: [
      {
        category: "PLACES TO VISIT",
        title: "Solang Valley",
        description: "Take in mountain scenery and wide valley views.",
        image: photo("photo-1626621341517-bbf3d9990a23")
      },
      {
        category: "NATURE & MOUNTAINS",
        title: "Himalayan Landscapes",
        description: "Explore mountain views and peaceful natural surroundings.",
        image: photo("photo-1464822759023-fed622ff2c3b")
      },
      {
        category: "THINGS TO DO",
        title: "Outdoor Adventures",
        description: "Find inspiration for trekking and outdoor experiences.",
        image: photo("photo-1551632811-561732d1e306")
      },
      {
        category: "HOTELS & STAYS",
        title: "Mountain View Resorts",
        description: "Browse ideas for accommodation among scenic landscapes.",
        image: photo("photo-1445019980597-93fa8acb246c")
      }
    ]
  },

  dubai: {
    name: "Dubai",
    location: "UNITED ARAB EMIRATES",
    tagline: "Experience luxury, adventure and modern beauty.",
    intro: "Dubai combines modern architecture, shopping, desert landscapes, entertainment and resort experiences. Discover ideas for a city break with a variety of activities.",
    hero: photo("photo-1512453979798-5ea266f8880c", 1600),
    highlights: [
      {
        category: "PLACES TO VISIT",
        title: "Dubai Skyline",
        description: "Admire impressive skyscrapers and modern city architecture.",
        image: photo("photo-1512453979798-5ea266f8880c")
      },
      {
        category: "DESERT & NATURE",
        title: "Golden Desert Views",
        description: "Discover the open desert landscape and sand dunes.",
        image: photo("photo-1500530855697-b586d89ba3ee")
      },
      {
        category: "THINGS TO DO",
        title: "Desert Adventures",
        description: "Explore ideas for outdoor activities and desert experiences.",
        image: photo("photo-1530789253388-582c481c54b0")
      },
      {
        category: "HOTELS & STAYS",
        title: "Luxury City Resorts",
        description: "Browse inspiration for hotels with city or resort views.",
        image: photo("photo-1540541338287-41700207dee6")
      }
    ]
  }
};


// ---------------- PACKAGE DATA ----------------

const packageData = {
  bali: {
    name: "Bali Adventure",
    destination: "Bali, Indonesia",
    duration: "5 Days / 4 Nights",
    price: "₹25,999",
    hero: photo("photo-1537996194471-e657df975ab4", 1500),
    hotel: "Tropical Paradise Resort",
    hotelLabel: "Illustrative sample accommodation",
    hotelDescription: "A resort-style accommodation concept with comfortable rooms, pool facilities and tropical surroundings. Confirm the actual property and availability before any real booking.",
    hotelImage: photo("photo-1571896349842-33c89424de2d"),
    rooms: [
      "Deluxe Garden Room - sample option",
      "Pool View Room - sample option"
    ],
    facilities: [
      "Swimming pool",
      "Wi-Fi",
      "Breakfast option",
      "Restaurant",
      "Air conditioning"
    ],
    inclusions: [
      "4 nights sample accommodation",
      "Breakfast concept",
      "Airport transfer concept",
      "Sightseeing itinerary",
      "Trip-planning assistance"
    ],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Optional activities",
      "Travel insurance"
    ],
    itinerary: [
      "Day 1: Arrive in Bali and check in.",
      "Day 2: Explore beaches and temples.",
      "Day 3: Discover waterfalls and island scenery.",
      "Day 4: Enjoy optional activities and local shopping.",
      "Day 5: Check out and depart."
    ]
  },

  switzerland: {
    name: "Swiss Escape",
    destination: "Switzerland, Europe",
    duration: "7 Days / 6 Nights",
    price: "₹65,999",
    hero: photo("photo-1464822759023-fed622ff2c3b", 1500),
    hotel: "Alpine View Hotel",
    hotelLabel: "Illustrative sample accommodation",
    hotelDescription: "A mountain-hotel concept with comfortable rooms and alpine views. This is a fictional example, not a verified property or live availability listing.",
    hotelImage: photo("photo-1445019980597-93fa8acb246c"),
    rooms: [
      "Standard Mountain Room - sample option",
      "Panoramic View Room - sample option"
    ],
    facilities: [
      "Mountain views",
      "Wi-Fi",
      "Breakfast option",
      "Restaurant",
      "Heating"
    ],
    inclusions: [
      "6 nights sample accommodation",
      "Breakfast concept",
      "Mountain sightseeing itinerary",
      "Local travel-planning assistance"
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Optional excursions",
      "Travel insurance"
    ],
    itinerary: [
      "Day 1: Arrive and check in.",
      "Day 2: Explore a scenic Swiss village.",
      "Day 3: Mountain sightseeing.",
      "Day 4: Discover lakeside scenery.",
      "Day 5: Enjoy an optional outdoor activity.",
      "Day 6: City exploration and shopping.",
      "Day 7: Check out and depart."
    ]
  },

  maldives: {
    name: "Maldives Retreat",
    destination: "Maldives, Indian Ocean",
    duration: "4 Days / 3 Nights",
    price: "₹39,999",
    hero: photo("photo-1514282401047-d79a71a590e8", 1500),
    hotel: "Ocean Paradise Resort",
    hotelLabel: "Illustrative sample accommodation",
    hotelDescription: "An island-resort concept with ocean views and beach access. The property name and facilities are examples for this student website, not a real booking listing.",
    hotelImage: photo("photo-1540541338287-41700207dee6"),
    rooms: [
      "Island Garden Room - sample option",
      "Ocean View Villa - sample option"
    ],
    facilities: [
      "Pool concept",
      "Ocean views",
      "Wi-Fi",
      "Restaurant",
      "Beach access"
    ],
    inclusions: [
      "3 nights sample accommodation",
      "Breakfast concept",
      "Island sightseeing itinerary",
      "Travel-planning assistance"
    ],
    exclusions: [
      "Flights",
      "Transfers unless confirmed",
      "Personal expenses",
      "Optional water sports",
      "Travel insurance"
    ],
    itinerary: [
      "Day 1: Arrive and check in.",
      "Day 2: Beach time and optional snorkeling.",
      "Day 3: Island exploration and relaxation.",
      "Day 4: Check out and depart."
    ]
  }
};


// =========================================================
// PAGE NAVIGATION
// =========================================================

const destinationSection = document.getElementById("destinations");
const destinationDetails = document.getElementById("destinationDetails");
const packagesSection = document.getElementById("packages");
const packageDetails = document.getElementById("packageDetails");

const pageNames = [
  "home",
  "destinations",
  "packages",
  "about",
  "contact"
];

const pageViews = document.querySelectorAll("[data-page-view]");
const navbarMenu = document.getElementById("navbarMenu");


function focusWithoutScrolling(element) {
  if (!element) return;

  element.setAttribute("tabindex", "-1");
  element.focus({ preventScroll: true });
}


// Restore the card lists when returning to a main page.

function resetDetailViewsForPage(page) {

  if (page === "destinations") {
    destinationDetails.classList.add("d-none");
    destinationSection.classList.remove("d-none");
    packageDetails.classList.add("d-none");
  }

  if (page === "packages") {
    packageDetails.classList.add("d-none");
    packagesSection.classList.remove("d-none");
    destinationDetails.classList.add("d-none");
  }
}


// Show only the selected page group.

function showPage(pageName, options = {}) {

  const page = pageNames.includes(pageName)
    ? pageName
    : "home";

  const {
    updateHistory = true,
    focusTarget = null
  } = options;


  pageViews.forEach((view) => {

    const isActive =
      view.dataset.pageView === page;

    view.classList.toggle("is-active", isActive);

    view.setAttribute(
      "aria-hidden",
      String(!isActive)
    );

  });


  // Update the active navigation link.

  document.querySelectorAll(".navbar .nav-link").forEach((link) => {

    const isCurrent =
      link.getAttribute("href") === `#${page}`;

    link.classList.toggle("active", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }

  });


  // Update the URL without reloading the website.

  if (updateHistory) {
    window.history.pushState(
      { page },
      "",
      `#${page}`
    );
  }


  // Move to the top of the selected page.

  window.scrollTo({
    top: 0,
    behavior: "auto"
  });


  if (focusTarget) {
    focusWithoutScrolling(focusTarget);
  }

}


// Handle navigation menu and internal page links.

document.addEventListener("click", (event) => {

  const pageLink = event.target.closest('a[href^="#"]');

  if (!pageLink) return;

  const requestedPage =
    pageLink.getAttribute("href").slice(1);

  if (!pageNames.includes(requestedPage)) return;

  event.preventDefault();

  resetDetailViewsForPage(requestedPage);

  showPage(requestedPage);


  // Close the mobile navbar after selection.

  if (
    navbarMenu &&
    navbarMenu.classList.contains("show") &&
    window.bootstrap
  ) {

    window.bootstrap.Collapse
      .getOrCreateInstance(navbarMenu)
      .hide();

  }

});


// Browser Back and Forward buttons.

window.addEventListener("popstate", () => {

  const pageFromHash =
    window.location.hash.replace(/^#/, "");

  resetDetailViewsForPage(pageFromHash);

  showPage(pageFromHash, {
    updateHistory: false
  });

});


// Open the correct page when the website first loads.

const initialPage =
  window.location.hash.replace(/^#/, "");

const firstPage =
  pageNames.includes(initialPage)
    ? initialPage
    : "home";

resetDetailViewsForPage(firstPage);

showPage(firstPage, {
  updateHistory: false
});


// =========================================================
// DESTINATION SEARCH AND FILTER
// =========================================================

const searchInput = document.getElementById("destinationSearch");
const travelType = document.getElementById("travelType");
const noResults = document.getElementById("noResults");
const resultsCount = document.getElementById("searchResultsCount");
const searchButton = document.getElementById("searchBtn");
const clearSearchButton = document.getElementById("clearSearchBtn");

const destinationItems =
  document.querySelectorAll(".destination-item");


function normalizeSearchText(value) {

  return String(value || "")
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

}


function searchDestinations() {

  const query =
    normalizeSearchText(searchInput.value);

  const selectedType =
    travelType.value;

  const queryTerms =
    query.split(/\s+/).filter(Boolean);

  let visibleCount = 0;


  destinationItems.forEach((card) => {

    const searchableText = normalizeSearchText([

      card.dataset.name,
      card.dataset.country,
      card.dataset.keywords,
      card.textContent

    ].join(" "));


    const textMatches =
      queryTerms.every((term) =>
        searchableText.includes(term)
      );

    const typeMatches =
      selectedType === "all" ||
      card.dataset.type === selectedType;

    const shouldShow =
      textMatches && typeMatches;


    card.classList.toggle(
      "d-none",
      !shouldShow
    );


    if (shouldShow) {
      visibleCount++;
    }

  });


  noResults.classList.toggle(
    "d-none",
    visibleCount !== 0
  );


  resultsCount.textContent =
    query || selectedType !== "all"
      ? `${visibleCount} destination${visibleCount === 1 ? "" : "s"} found.`
      : "Showing all destinations.";

}


function clearDestinationFilters() {

  searchInput.value = "";
  travelType.value = "all";

  searchDestinations();

  searchInput.focus();

}


// Search button.

searchButton.addEventListener("click", () => {

  searchDestinations();

  resetDetailViewsForPage("destinations");

  showPage("destinations");

});


// Live search.

searchInput.addEventListener(
  "input",
  searchDestinations
);


// Search by pressing Enter.

searchInput.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    event.preventDefault();

    searchDestinations();

    resetDetailViewsForPage("destinations");

    showPage("destinations");

  }

});


// Filter by travel category.

travelType.addEventListener(
  "change",
  searchDestinations
);


// Clear search and filters.

clearSearchButton.addEventListener(
  "click",
  clearDestinationFilters
);


// Run initial search.

searchDestinations();


// =========================================================
// DESTINATION DETAIL PAGE
// =========================================================

function openDestination(destinationKey) {

  const key =
    String(destinationKey || "")
      .trim()
      .toLowerCase();

  const destination =
    destinationData[key];


  if (!destination) {
    console.error("Unknown destination:", key);
    alert("Destination information is not available.");
    return;
  }


  const cardsHTML = destination.highlights
    .map((item) => `

      <article class="detail-card">

        <img
          src="${item.image}"
          alt="${item.title}"
          loading="lazy"
        >

        <div class="detail-card-body">

          <span class="detail-category">
            ${item.category}
          </span>

          <h3>${item.title}</h3>

          <p>${item.description}</p>

        </div>

      </article>

    `)
    .join("");


  destinationDetails.innerHTML = `

    <div class="container">

      <button
        class="detail-back-btn"
        id="backToDestinations"
        type="button"
      >
        <i class="bi bi-arrow-left"></i>
        Back to Destinations
      </button>


      <div
        class="detail-hero"
        style="background-image: url('${destination.hero}')"
      >

        <div class="detail-hero-content">

          <p class="detail-location">
            <i class="bi bi-geo-alt-fill"></i>
            ${destination.location}
          </p>

          <h1>${destination.name}</h1>

          <p>${destination.tagline}</p>

        </div>

      </div>


      <div class="detail-intro">

        <p class="section-subtitle">
          DISCOVER THE DESTINATION
        </p>

        <h2>Explore ${destination.name}</h2>

        <p>${destination.intro}</p>

      </div>


      <h2 class="fw-bold mt-4">
        What Can You Explore?
      </h2>

      <p class="text-secondary">
        Browse places, scenery, activities and accommodation inspiration.
      </p>

      <div class="detail-cards-grid">
        ${cardsHTML}
      </div>


      <div class="detail-cta">

        <h2>
          Ready to explore ${destination.name}?
        </h2>

        <p>
          Compare our sample packages and plan your journey.
        </p>

        <a
          href="#packages"
          class="btn btn-primary btn-lg rounded-pill px-4"
        >
          Explore Travel Packages
          <i class="bi bi-arrow-right"></i>
        </a>

      </div>

    </div>

  `;


  // Hide the destination card list and show its detail view.

  destinationSection.classList.add("d-none");
  destinationDetails.classList.remove("d-none");
  packageDetails.classList.add("d-none");


  showPage("destinations", {
    updateHistory: false
  });


  const destinationHeading =
    destinationDetails.querySelector(".detail-hero-content h1");

  focusWithoutScrolling(destinationHeading);


  // Return to destination cards.

  document
    .getElementById("backToDestinations")
    .addEventListener("click", () => {

      destinationDetails.classList.add("d-none");
      destinationSection.classList.remove("d-none");

      showPage("destinations", {
        updateHistory: false
      });

      const sectionHeading =
        destinationSection.querySelector(".section-heading h2");

      focusWithoutScrolling(sectionHeading);

    });

}


// =========================================================
// PACKAGE DETAIL PAGE
// =========================================================

function openPackage(packageKey) {

  const key =
    String(packageKey || "")
      .trim()
      .toLowerCase();

  const item =
    packageData[key];


  if (!item) {
    console.error("Unknown package:", key);
    alert("Package information is not available.");
    return;
  }


  const facilitiesHTML = item.facilities
    .map((value) => `
      <span>
        <i class="bi bi-check-circle"></i>
        ${value}
      </span>
    `)
    .join("");


  const inclusionsHTML = item.inclusions
    .map((value) => `
      <li>
        <i class="bi bi-check-circle-fill text-success"></i>
        ${value}
      </li>
    `)
    .join("");


  const exclusionsHTML = item.exclusions
    .map((value) => `
      <li>
        <i class="bi bi-dash-circle text-secondary"></i>
        ${value}
      </li>
    `)
    .join("");


  const itineraryHTML = item.itinerary
    .map((value) => `
      <p>
        <i class="bi bi-calendar-check text-primary"></i>
        ${value}
      </p>
    `)
    .join("");


  const roomsHTML = item.rooms
    .map((value) => `<li>${value}</li>`)
    .join("");


  packageDetails.innerHTML = `

    <div class="container">

      <button
        class="package-back-btn"
        id="backToPackages"
        type="button"
      >
        <i class="bi bi-arrow-left"></i>
        Back to Packages
      </button>


      <div
        class="package-detail-hero"
        style="background-image: linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.68)), url('${item.hero}')"
      >

        <div>

          <p>
            <i class="bi bi-geo-alt-fill"></i>
            ${item.destination}
          </p>

          <h1>${item.name}</h1>

          <p>
            <i class="bi bi-clock"></i>
            ${item.duration}
          </p>

        </div>

      </div>


      <div class="row g-4 mt-3">

        <div class="col-lg-8">

          <div class="hotel-card">

            <h2 class="package-section-title">
              <i class="bi bi-building"></i>
              Accommodation Details
            </h2>

            <img
              src="${item.hotelImage}"
              alt="Illustrative accommodation inspiration"
              loading="lazy"
            >

            <h3>${item.hotel}</h3>

            <span class="package-label">
              ${item.hotelLabel}
            </span>

            <p>${item.hotelDescription}</p>

            <h4 class="mt-4">Room ideas</h4>

            <ul>${roomsHTML}</ul>

            <h4 class="mt-4">
              Facilities shown in this demo
            </h4>

            <div class="hotel-facilities">
              ${facilitiesHTML}
            </div>

          </div>


          <div class="package-inclusions">

            <h2 class="package-section-title">
              What's Included?
            </h2>

            <ul class="list-unstyled">
              ${inclusionsHTML}
            </ul>

            <h4 class="mt-4">Not Included</h4>

            <ul class="list-unstyled">
              ${exclusionsHTML}
            </ul>

          </div>


          <div class="itinerary-box">

            <h2 class="package-section-title">
              Your Sample Itinerary
            </h2>

            ${itineraryHTML}

          </div>

        </div>


        <div class="col-lg-4">

          <div class="booking-box">

            <p class="section-subtitle mb-1">
              SAMPLE PACKAGE PRICE
            </p>

            <h3>${item.price}</h3>

            <small class="text-muted">
              Per person - illustrative price only
            </small>

            <hr>

            <h4 class="mb-2">
              Request Booking Information
            </h4>

            <p class="small text-muted">
              This demo form does not confirm a reservation or send data to a hotel.
            </p>


            <form id="packageBookingForm">

              <label for="bookingName">
                Full Name
              </label>

              <input
                type="text"
                id="bookingName"
                class="form-control"
                placeholder="Your full name"
                required
              >


              <label for="bookingEmail">
                Email Address
              </label>

              <input
                type="email"
                id="bookingEmail"
                class="form-control"
                placeholder="Your email"
                required
              >


              <label for="bookingDate">
                Preferred Travel Date
              </label>

              <input
                type="date"
                id="bookingDate"
                class="form-control"
                required
              >


              <label for="bookingTravelers">
                Number of Travelers
              </label>

              <input
                type="number"
                id="bookingTravelers"
                class="form-control"
                min="1"
                max="20"
                value="1"
                required
              >


              <button
                type="submit"
                class="btn btn-primary rounded-pill w-100 mt-3"
              >
                Request Details
                <i class="bi bi-arrow-right"></i>
              </button>


              <p
                id="bookingFeedback"
                class="form-feedback mt-3 mb-0"
                role="status"
              ></p>

            </form>

          </div>

        </div>

      </div>


      <p class="demo-note mt-2">
        All property names, room options, prices, facilities and itinerary details on this student demo are illustrative. Verify real properties, availability, terms and pricing independently before booking travel.
      </p>

    </div>

  `;


  // Display package details only.

  destinationDetails.classList.add("d-none");
  packageDetails.classList.remove("d-none");
  packagesSection.classList.add("d-none");


  showPage("packages", {
    updateHistory: false
  });


  const packageHeading =
    packageDetails.querySelector(".package-detail-hero h1");

  focusWithoutScrolling(packageHeading);


  // Return to package cards.

  document
    .getElementById("backToPackages")
    .addEventListener("click", () => {

      packageDetails.classList.add("d-none");
      packagesSection.classList.remove("d-none");

      showPage("packages", {
        updateHistory: false
      });

      const sectionHeading =
        packagesSection.querySelector(".section-heading h2");

      focusWithoutScrolling(sectionHeading);

    });


  // Prevent selecting a past date.

  const dateInput =
    document.getElementById("bookingDate");

  const today = new Date();

  const localToday =
    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  dateInput.min = localToday;


  // Demo booking form.

  document
    .getElementById("packageBookingForm")
    .addEventListener("submit", (event) => {

      event.preventDefault();

      const name =
        document.getElementById("bookingName").value.trim();

      const date =
        dateInput.value;

      const travelers =
        Number(document.getElementById("bookingTravelers").value);

      const feedback =
        document.getElementById("bookingFeedback");


      if (
        !name ||
        !date ||
        !Number.isInteger(travelers) ||
        travelers < 1 ||
        travelers > 20
      ) {

        feedback.textContent =
          "Please enter valid booking details.";

        feedback.style.color = "#b42318";

        return;

      }


      feedback.textContent =
        `Thank you, ${name}. Your demo request for ${item.name} (${travelers} traveler(s)) has been prepared. No real booking has been made.`;

      feedback.style.color = "#16803c";

      event.currentTarget.reset();

      dateInput.min = localToday;

    });

}


// =========================================================
// DESTINATION AND PACKAGE BUTTONS
// =========================================================

document.addEventListener("click", (event) => {

  const destinationButton =
    event.target.closest(".explore-btn");

  if (destinationButton) {

    openDestination(
      destinationButton.dataset.destination
    );

    return;

  }


  const packageButton =
    event.target.closest(".package-explore-btn");

  if (packageButton) {

    openPackage(
      packageButton.dataset.package
    );

  }

});


// =========================================================
// CONTACT FORM
// =========================================================

document
  .getElementById("contactForm")
  .addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
      document.getElementById("contactName").value.trim();

    const email =
      document.getElementById("contactEmail").value.trim();

    const message =
      document.getElementById("contactMessageInput").value.trim();

    const feedback =
      document.getElementById("contactFormMessage");

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
      !name ||
      !emailPattern.test(email) ||
      !message
    ) {

      feedback.textContent =
        "Please enter your name, a valid email and a message.";

      feedback.style.color = "#b42318";

      return;

    }


    feedback.textContent =
      `Thank you, ${name}. Your form passed validation. This demo does not send or store your message.`;

    feedback.style.color = "#16803c";

    event.currentTarget.reset();

  });


// =========================================================
// NEWSLETTER FORM
// =========================================================

document
  .getElementById("newsletterForm")
  .addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
      document.getElementById("newsletterEmail").value.trim();

    const feedback =
      document.getElementById("newsletterMessage");

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

      feedback.textContent =
        "Please enter a valid email address.";

      feedback.style.color = "#ffe1e1";

      return;

    }


    feedback.textContent =
      "Thank you! Your email passed validation, but this demo does not save or send subscriptions.";

    feedback.style.color = "white";

    event.currentTarget.reset();

  });


console.log("TravelEase is ready!");
