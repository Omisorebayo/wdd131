
/* ATTRACTION DATA */
const attractions = [
    {
        id: 1,
        name: "Olumirin Waterfalls",
        location: "Erin-Ijesha, Osun State",
        category: "waterfall",
        description: "Discover a beautiful series of cascading waterfalls surrounded by lush greenery. It is a popular destination for nature lovers and hikers.",
        image: "https://media.istockphoto.com/id/1270036714/photo/olumirin-waterfall.jpg?s=2048x2048&w=is&k=20&c=_vJg5xDGIJKp5sUt9rqREMLy0Ji0lrAY4D7gsTUKv2o=",
        alt: "Olumirin Waterfalls surrounded by green vegetation"
    },
    {
        id: 2,
        name: "Zuma Rock",
        location: "Niger State, near Abuja",
        category: "mountain",
        description: "Zuma Rock is a striking natural landmark known for its enormous rock formation and its importance in the landscape surrounding Nigeria's capital.",
        image: "https://media.istockphoto.com/id/1193240642/photo/zuma-rock-nigeria.jpg?s=2048x2048&w=is&k=20&c=FB-nrzXAdjGRgM0I4YLm6bIc9AIOpCzzJa_SmGh12So=",
        alt: "The impressive Zuma Rock rising above the landscape"
    },
    {
        id: 3,
        name: "Yankari Game Reserve",
        location: "Bauchi State",
        category: "park",
        description: "Explore a major wildlife reserve known for its savannah environment, wildlife, and Wikki Warm Springs.",
        image: "https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        alt: "Natural savannah landscape at Yankari Game Reserve"
    },
    {
        id: 4,
        name: "Osun-Osogbo Sacred Grove",
        location: "Osogbo, Osun State",
        category: "cultural",
        description: "Visit a sacred forest along the Osun River, known for its shrines, sculptures, cultural traditions, and spiritual significance.",
        image: "https://media.istockphoto.com/id/1144347629/photo/entrance-to-the-osogbo-temple-compound-osun-osogbo-sacred-grove-osogbo-nigeria.jpg?s=2048x2048&w=is&k=20&c=vKqDXdJLQ4r88qJhGzH5PW_98aTUkMwMkVdoe3tACXk=",
        alt: "Sculptures and forest scenery at Osun-Osogbo Sacred Grove"
    },
    {
        id: 5,
        name: "Kajuru Castle",
        location: "Kajuru, Kaduna State",
        category: "historical",
        description: "Discover a distinctive castle-style building in Kaduna State, known for its stone architecture and unusual design.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3b/ef/23/20171002-081326-largejpg.jpg?w=1200&h=-1&s=1",
        alt: "Stone towers and architecture of Kajuru Castle"
    },
    {
        id: 6,
        name: "Obudu Mountain Resort",
        location: "Obanliku, Cross River State",
        category: "mountain",
        description: "Enjoy mountain scenery, cool highland weather, and views of the surrounding landscape at this well-known resort.",
        image: "https://cdn.businessday.ng/2016/06/obudu_ranch.jpg",
        alt: "Green mountains around Obudu Mountain Resort"
    },
    {
        id: 7,
        name: "Lekki Conservation Centre",
        location: "Lekki, Lagos State",
        category: "park",
        description: "Explore a nature reserve with wetlands, forest trails, wildlife, and a famous canopy walkway.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7R6uUWfcD4jsy2aV2IdcnEEsB27iZjlLbSYQlcQvsaA&s=1024",
        alt: "Nature and greenery at Lekki Conservation Centre"
    },
    {
        id: 8,
        name: "National Museum Lagos",
        location: "Onikan, Lagos State",
        category: "historical",
        description: "Learn about Nigeria's history, arts, and cultural heritage through collections of artefacts and traditional objects.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJbL7AuEZMMLQrZLp8qeunYXqu9eJUJBcTZnoKfBBiQ&s=1024",
        alt: "National Museum in Lagos, Nigeria"
    }
];



/* SELECT NAVIGATION ELEMENTS */
const menuButton = document.querySelector("#menuButton");
const menuItems = document.querySelector("#menuItems");
const menuList = menuItems.querySelector("ul");
const header = document.querySelector(".site-header");

const categoryFilter = document.querySelector("#categoryFilter");
const attractionsList = document.querySelector("#attractionsList");
const resultCount = document.querySelector("#resultCount");

const placeDetails = document.querySelector("#placeDetails");
const detailName = document.querySelector("#detailName");
const detailLocation = document.querySelector("#detailLocation");
const detailDescription = document.querySelector("#detailDescription");
const closeDetails = document.querySelector("#closeDetails");



/* HAMBURGER MENU */
menuButton.addEventListener("click", () => {
    const isOpen = menuList.classList.toggle("open");

    header.classList.toggle("menu-open", isOpen);

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.setAttribute("aria-expanded", isOpen);
});



/* DISPLAY ATTRACTION CARDS */
function displayAttractions(items) {
    attractionsList.innerHTML = "";

    resultCount.textContent =
        `${items.length} attraction${items.length === 1 ? "" : "s"} found`;

    if (items.length === 0) {
        const message = document.createElement("p");
        message.className = "no-results";
        message.textContent = "No attractions found in this category.";
        attractionsList.appendChild(message);
        return;
    }

    items.forEach((attraction) => {
        const card = document.createElement("article");
        card.className = "attraction-card";

        const image = document.createElement("img");
        image.src = attraction.image;
        image.alt = attraction.alt;
        image.width = 400;
        image.height = 250;
        image.loading = "lazy";

        const content = document.createElement("div");
        content.className = "card-content";

        const name = document.createElement("h3");
        name.textContent = attraction.name;

        const location = document.createElement("p");
        location.className = "card-location";
        location.textContent = attraction.location;

        const category = document.createElement("span");
        category.className = "category-label";
        category.textContent = getCategoryName(attraction.category);

        const description = document.createElement("p");
        description.textContent = attraction.description;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "details-button";
        button.textContent = "View Details";

        button.addEventListener("click", () => {
            showDetails(attraction);
        });

        content.append(
            name,
            location,
            category,
            description,
            button
        );

        card.append(image, content);
        attractionsList.appendChild(card);
    });
}


/* GET CATEGORY LABEL */
function getCategoryName(category) {
    const categories = {
        waterfall: "Waterfall",
        mountain: "Mountain",
        park: "Park and Nature",
        historical: "Historical Site",
        cultural: "Cultural Attraction"
    };

    return categories[category] || "Attraction";
}


/* FILTER ATTRACTIONS */
function filterAttractions() {
    const selectedCategory = categoryFilter.value;

    localStorage.setItem("exploreNigeriaCategory", selectedCategory);

    const filteredAttractions =
        selectedCategory === "all"
            ? attractions
            : attractions.filter(
                (attraction) =>
                    attraction.category === selectedCategory
            );

    displayAttractions(filteredAttractions);

    placeDetails.hidden = true;
}

categoryFilter.addEventListener("change", filterAttractions);



/* NAVIGATION CATEGORY FILTERS */
document.querySelectorAll("nav a[data-filter]").forEach((link) => {
    link.addEventListener("click", () => {
        categoryFilter.value = link.dataset.filter;
        filterAttractions();

        menuList.classList.remove("open");
        header.classList.remove("menu-open");

        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});



/* SHOW SELECTED ATTRACTION DETAILS */
function showDetails(attraction) {
    detailName.textContent = attraction.name;
    detailLocation.textContent = attraction.location;
    detailDescription.textContent = attraction.description;

    placeDetails.hidden = false;

    placeDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* CLOSE ATTRACTION DETAILS */
closeDetails.addEventListener("click", () => {
    placeDetails.hidden = true;
});


/* FOOTER INFORMATION */
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


/* RESTORE SAVED CATEGORY */
const savedCategory = localStorage.getItem("exploreNigeriaCategory");

if (
    savedCategory &&
    Array.from(categoryFilter.options).some(
        (option) => option.value === savedCategory
    )
) {
    categoryFilter.value = savedCategory;
}

/* INITIAL DISPLAY */
filterAttractions();
