/* MOBILE NAVIGATION */
const menuButton = document.querySelector("#menuButton");
const menuItems = document.querySelector("#menuItems");
const menuList = menuItems.querySelector("ul");
const header = document.querySelector(".site-header");

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

/* FOOTER INFORMATION */
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${ document.lastModified } `;

/* STATE OPTIONS */
const states = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi",
    "Bayelsa", "Benue", "Borno", "Cross River", "Delta",
    "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
    "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
    "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
    "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
    "Yobe", "Zamfara"
];

const stateSelect = document.querySelector("#visitorState");

states.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
});

/* ATTRACTION INTEREST OPTIONS */
const interests = [
    { value: "waterfalls", label: "Waterfalls" },
    { value: "mountains", label: "Mountains" },
    { value: "parks", label: "Parks and Nature" },
    { value: "historical", label: "Historical Sites" },
    { value: "cultural", label: "Cultural Attractions" }
];

const interestOptions = document.querySelector("#interestOptions");

interests.forEach((interest) => {
    const label = document.createElement("label");
    label.className = "choice-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "interests";
    checkbox.value = interest.value;

    label.append(checkbox, ` ${ interest.label } `);
    interestOptions.appendChild(label);
});


/* FEEDBACK TYPE OPTIONS */
const feedbackTypes = [
    { value: "suggestion", label: "Suggest an Attraction" },
    { value: "content", label: "Information or Correction" },
    { value: "design", label: "Website Design" },
    { value: "problem", label: "Report a Problem" },
    { value: "other", label: "Other" }
];

const feedbackTypeSelect = document.querySelector("#feedbackType");

feedbackTypes.forEach((type) => {
    const option = document.createElement("option");
    option.value = type.value;
    option.textContent = type.label;
    feedbackTypeSelect.appendChild(option);
});


/* VISITOR REGISTRATION */
const registrationForm = document.querySelector("#registrationForm");
const registrationMessage = document.querySelector("#registrationMessage");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const visitorName =
        document.querySelector("#visitorName").value.trim();

    const visitorEmail =
        document.querySelector("#visitorEmail").value.trim();

    const visitorState =
        document.querySelector("#visitorState").value;

    const interests = Array.from(
        registrationForm.querySelectorAll(
            'input[name="interests"]:checked'
        )
    ).map((checkbox) => checkbox.value);

    if (!visitorName || !visitorEmail || !visitorState) {
        registrationMessage.textContent =
            "Please complete all required fields.";
        return;
    }

    const registration = {
        name: visitorName,
        email: visitorEmail,
        state: visitorState,
        interests: interests,
        updates: registrationForm.querySelector(
            'input[name="updates"]'
        ).checked,
        date: new Date().toISOString()
    };

    localStorage.setItem(
        "exploreNigeriaRegistration",
        JSON.stringify(registration)
    );

    registrationMessage.textContent =
        `Thank you, ${ visitorName } !Your registration was saved in this browser.`;

    registrationForm.reset();
});


/* WEBSITE FEEDBACK */
const feedbackForm = document.querySelector("#feedbackForm");
const feedbackMessageStatus =
    document.querySelector("#feedbackMessageStatus");

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedRating = feedbackForm.querySelector(
        'input[name="rating"]:checked'
    );

    const feedback = {
        name: document.querySelector("#feedbackName").value.trim(),
        rating: selectedRating ? selectedRating.value : "",
        type: document.querySelector("#feedbackType").value,
        message: document.querySelector("#feedbackMessage").value.trim(),
        date: new Date().toISOString()
    };

    if (!feedback.rating || !feedback.type || !feedback.message) {
        feedbackMessageStatus.textContent =
            "Please complete the required feedback fields.";
        return;
    }

    const savedFeedback = JSON.parse(
        localStorage.getItem("exploreNigeriaFeedback") || "[]"
    );

    savedFeedback.push(feedback);

    localStorage.setItem(
        "exploreNigeriaFeedback",
        JSON.stringify(savedFeedback)
    );

    feedbackMessageStatus.textContent =
        `Thank you! Your ${feedback.rating}-star feedback was saved in this browser.`;

    feedbackForm.reset();
});
