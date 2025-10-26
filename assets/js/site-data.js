// FitGym Site Data and Functions

// Detect language from page
const isArabic = document.documentElement.lang === "ar";

// Classes Data
const classesEn = [
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

const classesAr = [
  {
    id: 1,
    name: "تدريب HIIT",
    category: "الكارديو",
    duration: "45 دقيقة",
    level: "متوسط",
    description:
      "تدريب متقطع عالي الكثافة لحرق أقصى قدر من السعرات الحرارية واللياقة القلبية الوعائية.",
    trainer: "مايك ديفيس",
    schedule: "الإثنين، الأربعاء، الجمعة - 6:00 صباحاً",
  },
  {
    id: 2,
    name: "يوغا فلو",
    category: "اليوغا",
    duration: "60 دقيقة",
    level: "جميع المستويات",
    description:
      "تحسين المرونة والتوازن والعافية العقلية من خلال تسلسلات اليوغا المتدفقة.",
    trainer: "سارة جونسون",
    schedule: "الثلاثاء، الخميس - 7:00 صباحاً",
  },
  {
    id: 3,
    name: "تدريب القوة",
    category: "القوة",
    duration: "50 دقيقة",
    level: "مبتدئ-متقدم",
    description:
      "بناء العضلات وزيادة القوة من خلال جلسات تدريب الأوزان الموجهة.",
    trainer: "جون سميث",
    schedule: "الإثنين، الأربعاء، الجمعة - 5:00 مساءً",
  },
  {
    id: 4,
    name: "كروس فيت",
    category: "القوة",
    duration: "60 دقيقة",
    level: "متقدم",
    description:
      "لياقة وظيفية مكثفة تجمع بين الكارديو ورفع الأثقال وتمارين وزن الجسم.",
    trainer: "مايك ديفيس",
    schedule: "الثلاثاء، الخميس، السبت - 6:00 صباحاً",
  },
  {
    id: 5,
    name: "رقص زومبا",
    category: "الرقص",
    duration: "45 دقيقة",
    level: "جميع المستويات",
    description:
      "تمرين رقص ممتع ومفعم بالطاقة يجمع بين الموسيقى اللاتينية والعالمية.",
    trainer: "ليزا براون",
    schedule: "الإثنين، الأربعاء - 6:30 مساءً",
  },
  {
    id: 6,
    name: "التدريب الشخصي",
    category: "شخصي",
    duration: "60 دقيقة",
    level: "مخصص",
    description: "تدريب فردي مصمم خصيصاً لأهداف لياقتك المحددة.",
    trainer: "جميع المدربين",
    schedule: "بموعد مسبق",
  },
];

const classes = isArabic ? classesAr : classesEn;

// Transformations Data
const transformationsEn = [
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

const transformationsAr = [
  {
    id: 1,
    name: "أحمد ك.",
    category: "فقدان الوزن",
    weightLost: "30 كجم",
    duration: "8 أشهر",
    story: "فقد 30 كجم في 8 أشهر بالتفاني والتوجيه الخبير من مدربي فت جيم.",
  },
  {
    id: 2,
    name: "سارة م.",
    category: "رحلة اللياقة",
    achievement: "تغيير نمط حياة كامل",
    duration: "سنة واحدة",
    story:
      "تحولت من نمط حياة خامل إلى الركض في الماراثونات وتدريس حصص اللياقة.",
  },
  {
    id: 3,
    name: "محمد أ.",
    category: "بناء العضلات",
    muscleGained: "15 كجم",
    duration: "10 أشهر",
    story: "بنى 15 كجم من العضلات من خلال التدريب المستمر وإرشادات التغذية.",
  },
  {
    id: 4,
    name: "فاطمة ح.",
    category: "فقدان الوزن",
    weightLost: "22 كجم",
    duration: "6 أشهر",
    story:
      "حققت أهداف فقدان الوزن من خلال اليوغا والكارديو وعادات الأكل الصحية.",
  },
];

const transformations = isArabic ? transformationsAr : transformationsEn;

// Blog Posts Data
const blogPostsEn = [
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

const blogPostsAr = [
  {
    id: 1,
    title: "أفضل 10 تمارين لبناء العضلات",
    category: "نصائح التمرين",
    author: "جون سميث",
    date: "2025-10-20",
    excerpt: "اكتشف التمارين الأكثر فعالية لنمو العضلات وبناء القوة.",
    readTime: "5 دقائق قراءة",
  },
  {
    id: 2,
    title: "دليل التغذية لفقدان الوزن",
    category: "التغذية",
    author: "ليزا براون",
    date: "2025-10-18",
    excerpt: "تعلم مبادئ التغذية الأساسية لفقدان الوزن المستدام.",
    readTime: "7 دقائق قراءة",
  },
  {
    id: 3,
    title: "فوائد التمارين الصباحية",
    category: "نمط حياة اللياقة",
    author: "مايك ديفيس",
    date: "2025-10-15",
    excerpt: "لماذا يمكن أن يحول التمرين في الصباح رحلة لياقتك.",
    readTime: "4 دقائق قراءة",
  },
  {
    id: 4,
    title: "اليوغا لتخفيف التوتر",
    category: "الصحة",
    author: "سارة جونسون",
    date: "2025-10-12",
    excerpt:
      "كيف يمكن أن تساعد ممارسة اليوغا في إدارة التوتر وتحسين الصحة العقلية.",
    readTime: "6 دقائق قراءة",
  },
];

const blogPosts = isArabic ? blogPostsAr : blogPostsEn;

// Translation texts
const texts = {
  en: {
    learnMore: "Learn More",
    readMore: "Read More",
    viewDetails: "View Details",
    duration: "Duration:",
    level: "Level:",
    trainer: "Trainer:",
    schedule: "Schedule:",
    classNotFound:
      "Class not found. Please select a class from our services page.",
    blogNotFound:
      "Blog post not found. Please select a post from our blog page.",
    by: "By",
  },
  ar: {
    learnMore: "اعرف المزيد",
    readMore: "اقرأ المزيد",
    viewDetails: "عرض التفاصيل",
    duration: "المدة:",
    level: "المستوى:",
    trainer: "المدرب:",
    schedule: "الجدول:",
    classNotFound: "لم يتم العثور على الحصة. يرجى اختيار حصة من صفحة خدماتنا.",
    blogNotFound: "لم يتم العثور على المقال. يرجى اختيار مقال من صفحة مدونتنا.",
    by: "بواسطة",
  },
};

const t = isArabic ? texts.ar : texts.en;

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
          <a href="service-details.html?id=${classItem.id}" class="btn btn-outline-warning">${t.learnMore}</a>
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
          <a href="blog-details.html?id=${post.id}" class="btn btn-outline-warning">${t.readMore}</a>
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
          <a href="service-details.html?id=${classItem.id}" class="btn btn-outline-warning mt-2">${t.viewDetails}</a>
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
          <a href="blog-details.html?id=${post.id}" class="btn btn-outline-warning">${t.readMore}</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

// Function to populate popular posts in sidebar
function populatePopularPosts() {
  const container = document.getElementById("popularPosts");
  if (!container) return;

  // Show top 5 posts
  const popularPosts = blogPosts.slice(0, 5);

  popularPosts.forEach((post) => {
    const postItem = document.createElement("div");
    postItem.className = "mb-3 pb-3 border-bottom border-warning";
    postItem.innerHTML = `
      <h6 class="mb-2">
        <a href="blog-details.html?id=${post.id}" class="text-warning text-decoration-none">
          ${post.title}
        </a>
      </h6>
      <p class="text-light small mb-0">
        <i class="bi bi-calendar"></i> ${post.date}
      </p>
    `;
    container.appendChild(postItem);
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
          <a href="service-details.html?id=${classItem.id}" class="btn btn-outline-warning mt-2">${t.viewDetails}</a>
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
let currentTransformationFilter = "all";

function filterTransformations(category) {
  currentTransformationFilter = category;
  const container = document.getElementById("transformationsGrid");
  if (!container) return;

  // Clear existing content
  container.innerHTML = "";

  // Filter transformations based on category
  const filteredTransformations =
    category === "all"
      ? transformations
      : transformations.filter(
          (transformation) => transformation.category === category
        );

  // Populate filtered transformations
  filteredTransformations.forEach((transformation) => {
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

  // Update button states
  const filterButtons = document.querySelectorAll(
    '.btn[onclick^="filterTransformations"]'
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
  populatePopularPosts();

  // Service details page
  loadClassDetails();

  // Blog details page
  loadBlogDetails();
});

// Function to load class details on service-details page
function loadClassDetails() {
  const container = document.getElementById("classDetails");
  if (!container) return;

  // Get class ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const classId = parseInt(urlParams.get("id"));

  if (!classId) {
    container.innerHTML = `<p class="text-warning">${t.classNotFound}</p>`;
    return;
  }

  // Find the class
  const classItem = classes.find((c) => c.id === classId);

  if (!classItem) {
    container.innerHTML = `<p class="text-warning">${t.classNotFound}</p>`;
    return;
  }

  // Render class details
  container.innerHTML = `
    <span class="badge bg-warning text-dark mb-3">${classItem.category}</span>
    <h1 class="text-warning mb-3">${classItem.name}</h1>
    <div class="row mb-4">
      <div class="col-md-3">
        <p class="text-light"><i class="bi bi-clock"></i> <strong>${t.duration}</strong><br>${classItem.duration}</p>
      </div>
      <div class="col-md-3">
        <p class="text-light"><i class="bi bi-bar-chart"></i> <strong>${t.level}</strong><br>${classItem.level}</p>
      </div>
      <div class="col-md-3">
        <p class="text-light"><i class="bi bi-person"></i> <strong>${t.trainer}</strong><br>${classItem.trainer}</p>
      </div>
      <div class="col-md-3">
        <p class="text-light"><i class="bi bi-calendar"></i> <strong>${t.schedule}</strong><br>${classItem.schedule}</p>
      </div>
    </div>
    <p class="lead text-light">${classItem.description}</p>
  `;

  // Populate sidebar with all classes
  const sidebar = document.getElementById("allClassesSidebar");
  if (sidebar) {
    classes.forEach((c) => {
      const listItem = document.createElement("a");
      listItem.href = `service-details.html?id=${c.id}`;
      listItem.className = `list-group-item list-group-item-action bg-dark text-light border-warning ${
        c.id === classId ? "active" : ""
      }`;
      listItem.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">${c.name}</h6>
          <small><i class="bi bi-clock"></i> ${c.duration}</small>
        </div>
        <small>${c.category}</small>
      `;
      sidebar.appendChild(listItem);
    });
  }
}

// Function to load blog details on blog-details page
function loadBlogDetails() {
  const container = document.getElementById("blogDetails");
  if (!container) return;

  // Get blog ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(urlParams.get("id"));

  if (!blogId) {
    container.innerHTML = `<p class="text-warning">${t.blogNotFound}</p>`;
    return;
  }

  // Find the blog post
  const post = blogPosts.find((p) => p.id === blogId);

  if (!post) {
    container.innerHTML = `<p class="text-warning">${t.blogNotFound}</p>`;
    return;
  }

  // Render blog details
  container.innerHTML = `
    <span class="badge bg-warning text-dark mb-3">${post.category}</span>
    <h1 class="text-warning mb-3">${post.title}</h1>
    <p class="text-light mb-4">
      <i class="bi bi-person"></i> ${t.by} ${post.author} | 
      <i class="bi bi-calendar"></i> ${post.date} | 
      <i class="bi bi-clock"></i> ${post.readTime}
    </p>
    <div class="alert alert-warning">
      <i class="bi bi-info-circle"></i> ${post.excerpt}
    </div>
    <p class="text-light">${post.excerpt}</p>
    <p class="text-light">This is a sample blog post content. In a real application, this would contain the full article with detailed information, images, and formatting.</p>
    <p class="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p class="text-light">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `;
}
