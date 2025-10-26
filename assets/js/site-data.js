// FitGym Site Data and Functions

// Classes Data
const classes = [
  {
    id: 1,
    name: "HIIT Training",
    category: "Cardio",
    duration: "45 min",
    level: "Intermediate",
    description:
      "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
    trainer: "Mike Davis",
    schedule: "Mon, Wed, Fri - 6:00 AM",
  },
  {
    id: 2,
    name: "Yoga Flow",
    category: "Yoga",
    duration: "60 min",
    level: "All Levels",
    description:
      "Improve flexibility, balance, and mental wellness through flowing yoga sequences.",
    trainer: "Sarah Johnson",
    schedule: "Tue, Thu - 7:00 AM",
  },
  {
    id: 3,
    name: "Strength Training",
    category: "Strength",
    duration: "50 min",
    level: "Beginner-Advanced",
    description:
      "Build muscle and increase strength with guided weight training sessions.",
    trainer: "John Smith",
    schedule: "Mon, Wed, Fri - 5:00 PM",
  },
  {
    id: 4,
    name: "CrossFit",
    category: "Strength",
    duration: "60 min",
    level: "Advanced",
    description:
      "Intense functional fitness combining cardio, weightlifting, and bodyweight exercises.",
    trainer: "Mike Davis",
    schedule: "Tue, Thu, Sat - 6:00 AM",
  },
  {
    id: 5,
    name: "Zumba Dance",
    category: "Dance",
    duration: "45 min",
    level: "All Levels",
    description:
      "Fun, energetic dance workout combining Latin and international music.",
    trainer: "Lisa Brown",
    schedule: "Mon, Wed - 6:30 PM",
  },
  {
    id: 6,
    name: "Personal Training",
    category: "Personal",
    duration: "60 min",
    level: "Customized",
    description: "One-on-one coaching tailored to your specific fitness goals.",
    trainer: "All Trainers",
    schedule: "By Appointment",
  },
];

// Transformations Data
const transformations = [
  {
    id: 1,
    name: "Ahmed K.",
    category: "Weight Loss",
    weightLost: "30 kg",
    duration: "8 months",
    story:
      "Lost 30kg in 8 months with dedication and expert guidance from FitGym trainers.",
  },
  {
    id: 2,
    name: "Sarah M.",
    category: "Fitness Journey",
    achievement: "Complete lifestyle change",
    duration: "1 year",
    story:
      "Transformed from sedentary lifestyle to running marathons and teaching fitness classes.",
  },
  {
    id: 3,
    name: "Mohammed A.",
    category: "Muscle Gain",
    muscleGained: "15 kg",
    duration: "10 months",
    story:
      "Built 15kg of muscle through consistent training and nutrition guidance.",
  },
  {
    id: 4,
    name: "Fatima H.",
    category: "Weight Loss",
    weightLost: "22 kg",
    duration: "6 months",
    story:
      "Achieved weight loss goals through yoga, cardio, and healthy eating habits.",
  },
];

// Blog Posts Data
const blogPosts = [
  {
    id: 1,
    title: "10 Best Exercises for Building Muscle",
    category: "Workout Tips",
    author: "John Smith",
    date: "2025-10-20",
    excerpt:
      "Discover the most effective exercises for muscle growth and strength building.",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Nutrition Guide for Weight Loss",
    category: "Nutrition",
    author: "Lisa Brown",
    date: "2025-10-18",
    excerpt:
      "Learn the essential nutrition principles for sustainable weight loss.",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Benefits of Morning Workouts",
    category: "Fitness Lifestyle",
    author: "Mike Davis",
    date: "2025-10-15",
    excerpt:
      "Why working out in the morning can transform your fitness journey.",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Yoga for Stress Relief",
    category: "Wellness",
    author: "Sarah Johnson",
    date: "2025-10-12",
    excerpt:
      "How yoga practice can help manage stress and improve mental health.",
    readTime: "6 min read",
  },
];

// Function to populate featured classes on home page
function populateFeaturedClasses() {
  const container = document.getElementById("featuredClassesGrid");
  if (!container) return;

  // Show first 3 classes
  const featuredClasses = classes.slice(0, 3);

  featuredClasses.forEach((classItem) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.innerHTML = `
      <div class="card bg-dark border-warning h-100">
        <div class="card-body">
          <h5 class="card-title text-warning">${classItem.name}</h5>
          <p class="text-light mb-2"><i class="bi bi-clock"></i> ${classItem.duration}</p>
          <p class="text-light mb-2"><i class="bi bi-person"></i> ${classItem.trainer}</p>
          <p class="card-text text-light">${classItem.description}</p>
          <a href="service-details.html?id=${classItem.id}" class="btn btn-outline-warning">Learn More</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Function to populate transformations preview on home page
function populateTransformationsPreview() {
  const container = document.getElementById("transformationsPreview");
  if (!container) return;

  // Show first 4 transformations
  const previewTransformations = transformations.slice(0, 4);

  previewTransformations.forEach((transformation) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";
    col.innerHTML = `
      <div class="card bg-dark border-warning h-100">
        <div class="card-body text-center">
          <i class="bi bi-person-badge display-1 text-warning mb-3"></i>
          <h5 class="card-title text-warning">${transformation.name}</h5>
          <p class="text-light"><span class="badge bg-warning text-dark">${
            transformation.category
          }</span></p>
          <p class="text-light">${
            transformation.weightLost ||
            transformation.muscleGained ||
            transformation.achievement
          }</p>
          <p class="small text-light">${transformation.duration}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Function to populate blog preview on home page
function populateBlogPreview() {
  const container = document.getElementById("blogPreview");
  if (!container) return;

  // Show first 3 blog posts
  const previewPosts = blogPosts.slice(0, 3);

  previewPosts.forEach((post) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.innerHTML = `
      <div class="card bg-dark border-warning h-100">
        <div class="card-body">
          <span class="badge bg-warning text-dark mb-2">${post.category}</span>
          <h5 class="card-title text-warning">${post.title}</h5>
          <p class="text-light small mb-2">
            <i class="bi bi-person"></i> ${post.author} | 
            <i class="bi bi-clock"></i> ${post.readTime}
          </p>
          <p class="card-text text-light">${post.excerpt}</p>
          <a href="blog-details.html?id=${post.id}" class="btn btn-outline-warning">Read More</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Function to populate all classes on services page
function populateAllClasses() {
  const container = document.getElementById("classesGrid");
  if (!container) return;

  classes.forEach((classItem) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.innerHTML = `
      <div class="card bg-dark border-warning h-100">
        <div class="card-body">
          <span class="badge bg-warning text-dark mb-2">${classItem.category}</span>
          <h5 class="card-title text-warning">${classItem.name}</h5>
          <p class="text-light mb-2"><i class="bi bi-clock"></i> ${classItem.duration} | <i class="bi bi-bar-chart"></i> ${classItem.level}</p>
          <p class="text-light mb-2"><i class="bi bi-person"></i> ${classItem.trainer}</p>
          <p class="card-text text-light">${classItem.description}</p>
          <p class="text-light small"><i class="bi bi-calendar"></i> ${classItem.schedule}</p>
          <a href="service-details.html?id=${classItem.id}" class="btn btn-outline-warning mt-2">View Details</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Function to populate all transformations on portfolio page
function populateAllTransformations() {
  const container = document.getElementById("transformationsGrid");
  if (!container) return;

  transformations.forEach((transformation) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";
    col.innerHTML = `
      <div class="card bg-dark border-warning h-100">
        <div class="card-body">
          <i class="bi bi-person-badge display-1 text-warning mb-3 d-block text-center"></i>
          <h5 class="card-title text-warning">${transformation.name}</h5>
          <p class="text-light"><span class="badge bg-warning text-dark">${
            transformation.category
          }</span></p>
          <p class="text-light">${
            transformation.weightLost ||
            transformation.muscleGained ||
            transformation.achievement
          }</p>
          <p class="small text-light mb-2">${transformation.duration}</p>
          <p class="card-text text-light small">${transformation.story}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Function to populate all blog posts on blog page
function populateAllBlogPosts() {
  const container = document.getElementById("blogPostsGrid");
  if (!container) return;

  blogPosts.forEach((post) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 mb-4";
    col.innerHTML = `
      <div class="card bg-dark border-warning h-100">
        <div class="card-body">
          <span class="badge bg-warning text-dark mb-2">${post.category}</span>
          <h5 class="card-title text-warning">${post.title}</h5>
          <p class="text-light small mb-2">
            <i class="bi bi-person"></i> ${post.author}<br>
            <i class="bi bi-calendar"></i> ${post.date} | <i class="bi bi-clock"></i> ${post.readTime}
          </p>
          <p class="card-text text-light">${post.excerpt}</p>
          <a href="blog-details.html?id=${post.id}" class="btn btn-outline-warning">Read More</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Function to filter classes by category
let currentFilter = "all";

function filterClasses(category) {
  currentFilter = category;
  const container = document.getElementById("classesGrid");
  if (!container) return;

  // Clear existing content
  container.innerHTML = "";

  // Filter classes based on category
  const filteredClasses =
    category === "all"
      ? classes
      : classes.filter((classItem) => classItem.category === category);

  // Populate filtered classes
  filteredClasses.forEach((classItem) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";
    col.innerHTML = `
      <div class="card bg-dark border-warning h-100">
        <div class="card-body">
          <span class="badge bg-warning text-dark mb-2">${classItem.category}</span>
          <h5 class="card-title text-warning">${classItem.name}</h5>
          <p class="text-light mb-2"><i class="bi bi-clock"></i> ${classItem.duration} | <i class="bi bi-bar-chart"></i> ${classItem.level}</p>
          <p class="text-light mb-2"><i class="bi bi-person"></i> ${classItem.trainer}</p>
          <p class="card-text text-light">${classItem.description}</p>
          <p class="text-light small"><i class="bi bi-calendar"></i> ${classItem.schedule}</p>
          <a href="service-details.html?id=${classItem.id}" class="btn btn-outline-warning mt-2">View Details</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  // Update button states
  const filterButtons = document.querySelectorAll(
    '.btn[onclick^="filterClasses"]'
  );
  filterButtons.forEach((button) => {
    const btnCategory = button.getAttribute("onclick").match(/'([^']+)'/)[1];
    if (btnCategory === category) {
      button.classList.remove("btn-outline-warning");
      button.classList.add("btn-warning");
    } else {
      button.classList.remove("btn-warning");
      button.classList.add("btn-outline-warning");
    }
  });
}

// Function to filter transformations by category
let currentTransformationFilter = 'all';

function filterTransformations(category) {
  currentTransformationFilter = category;
  const container = document.getElementById('transformationsGrid');
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  // Filter transformations based on category
  const filteredTransformations = category === 'all' 
    ? transformations 
    : transformations.filter(transformation => transformation.category === category);

  // Populate filtered transformations
  filteredTransformations.forEach(transformation => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-3';
    col.innerHTML = `
      <div class="card bg-dark border-warning h-100">
        <div class="card-body">
          <i class="bi bi-person-badge display-1 text-warning mb-3 d-block text-center"></i>
          <h5 class="card-title text-warning">${transformation.name}</h5>
          <p class="text-light"><span class="badge bg-warning text-dark">${transformation.category}</span></p>
          <p class="text-light">${transformation.weightLost || transformation.muscleGained || transformation.achievement}</p>
          <p class="small text-light mb-2">${transformation.duration}</p>
          <p class="card-text text-light small">${transformation.story}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  // Update button states
  const filterButtons = document.querySelectorAll('.btn[onclick^="filterTransformations"]');
  filterButtons.forEach(button => {
    const btnCategory = button.getAttribute('onclick').match(/'([^']+)'/)[1];
    if (btnCategory === category) {
      button.classList.remove('btn-outline-warning');
      button.classList.add('btn-warning');
    } else {
      button.classList.remove('btn-warning');
      button.classList.add('btn-outline-warning');
    }
  });
}

// Initialize page-specific functions when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Home page
  populateFeaturedClasses();
  populateTransformationsPreview();
  populateBlogPreview();

  // Services page
  populateAllClasses();

  // Portfolio page
  populateAllTransformations();

  // Blog page
  populateAllBlogPosts();
});
