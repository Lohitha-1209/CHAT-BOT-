// Configuration
const API_CONFIG = {
  TMDB: {
    API_KEY: "ac2139e842af794d7b33727aeae3401f", // Your API key
    BASE_URL: "https://api.themoviedb.org/3",
    IMAGE_BASE_URL: "https://image.tmdb.org/t/p/",
  },
}

// Language configurations
const languages = {
  en: {
    flag: "🇺🇸",
    name: "English",
    texts: {
      appName: "MOVIEFLIX",
      welcome: "Welcome to the Cinema",
      joinCinema: "Join the Experience",
      enterCinema: "ENTER CINEMA",
      joinMovieFlix: "JOIN MOVIEFLIX",
      enteringCinema: "ENTERING CINEMA...",
      fullName: "Full Name",
      emailAddress: "Email Address",
      password: "Password",
      newToMovieFlix: "New to MovieFlix? Join Now",
      alreadyMember: "Already a member? Sign In",
      premiumExperience: "Premium Experience",
      welcomeBackUser: "Welcome back, {name}!",
      exitCinema: "EXIT CINEMA",
      searchPlaceholder: "Search for blockbusters, classics, or hidden gems...",
      searchResults: "Search Results",
      featuredInCinema: "Featured in Cinema",
      premiumMovies: "Premium Movies",
      cinemaQuality: "Cinema Quality",
      alwaysOpen: "Always Open",
      watchNow: "WATCH NOW", // This text is no longer used for the button
      poweredBy: "Powered by",
      searchFailed: "Failed to search movies. Please try again.",
      enterMovieTitle: "Please enter a movie title",
      searchingArchives: "Searching the cinema archives...",
      genres: {
        action: "Action",
        thriller: "Thriller",
        sciFi: "Sci-Fi",
        horror: "Horror",
        comedy: "Comedy",
        drama: "Drama",
        marvel: "Marvel",
        dc: "DC",
      },
    },
  },
  ta: {
    flag: "🇮🇳",
    name: "தமிழ்",
    texts: {
      appName: "மூவிஃப்ளிக்ஸ்",
      welcome: "சினிமாவுக்கு வரவேற்கிறோம்",
      joinCinema: "அனுபவத்தில் சேருங்கள்",
      enterCinema: "சினிமாவில் நுழையுங்கள்",
      joinMovieFlix: "மூவிஃப்ளிக்ஸில் சேருங்கள்",
      enteringCinema: "சினிமாவில் நுழைகிறது...",
      fullName: "முழு பெயர்",
      emailAddress: "மின்னஞ்சல் முகவரி",
      password: "கடவுச்சொல்",
      newToMovieFlix: "மூவிஃப்ளிக்ஸில் புதியவரா? இப்போது சேருங்கள்",
      alreadyMember: "ஏற்கனவே உறுப்பினரா? உள்நுழையுங்கள்",
      premiumExperience: "பிரீமியம் அனுபவம்",
      welcomeBackUser: "மீண்டும் வரவேற்கிறோம், {name}!",
      exitCinema: "சினிமாவிலிருந்து வெளியேறு",
      searchPlaceholder: "பிளாக்பஸ்டர்கள், கிளாசிக்ஸ் அல்லது மறைக்கப்பட்ட ரத்தினங்களைத் தேடுங்கள்...",
      searchResults: "தேடல் முடிவுகள்",
      featuredInCinema: "சினிமாவில் சிறப்பு",
      premiumMovies: "பிரீமியம் திரைப்படங்கள்",
      cinemaQuality: "சினிமா தரம்",
      alwaysOpen: "எப்போதும் திறந்திருக்கும்",
      watchNow: "இப்போது பார்க்கவும்", // This text is no longer used for the button
      poweredBy: "இதனால் இயக்கப்படுகிறது",
      searchFailed: "திரைப்படங்களைத் தேடுவதில் தோல்வி. மீண்டும் முயற்சிக்கவும்.",
      enterMovieTitle: "தயவுசெய்து திரைப்படத்தின் தலைப்பை உள்ளிடவும்",
      searchingArchives: "சினிமா காப்பகங்களைத் தேடுகிறது...",
      genres: {
        action: "அதிரடி",
        thriller: "த்ரில்லர்",
        sciFi: "அறிவியல் புனைகதை",
        horror: "திகில்",
        comedy: "நகைச்சுவை",
        drama: "நாடகம்",
        marvel: "மார்வெல்",
        dc: "டிசி",
      },
    },
  },
  te: {
    flag: "🇮🇳",
    name: "తెలుగు",
    texts: {
      appName: "మూవీఫ్లిక్స్",
      welcome: "సినిమాకు స్వాగతం",
      joinCinema: "అనుభవంలో చేరండి",
      enterCinema: "సినిమాలో ప్రవేశించండి",
      joinMovieFlix: "మూవీఫ్లిక్స్‌లో చేరండి",
      enteringCinema: "సినిమాలో ప్రవేశిస్తోంది...",
      fullName: "పూర్తి పేరు",
      emailAddress: "ఇమెయిల్ చిరునామా",
      password: "పాస్‌వర్డ్",
      newToMovieFlix: "మూవీఫ్లిక్స్‌కు కొత్తవారా? ఇప్పుడే చేరండి",
      alreadyMember: "ఇప్పటికే సభ్యుడా? సైన్ ఇన్ చేయండి",
      premiumExperience: "ప్రీమియం అనుభవం",
      welcomeBackUser: "తిరిగి స్వాగతం, {name}!",
      exitCinema: "సినిమా నుండి నిష్క్రమించండి",
      searchPlaceholder: "బ్లాక్‌బస్టర్లు, క్లాసిక్‌లు లేదా దాచిన రత్నాలను వెతకండి...",
      searchResults: "శోధన ఫలితాలు",
      featuredInCinema: "సినిమాలో ప్రత్యేకం",
      premiumMovies: "ప్రీమియం సినిమాలు",
      cinemaQuality: "సినిమా నాణ్యత",
      alwaysOpen: "ఎల్లప్పుడూ తెరిచి ఉంటుంది",
      watchNow: "ఇప్పుడు చూడండి", // This text is no longer used for the button
      poweredBy: "దీని ద్వారా శక్తిని పొందింది",
      searchFailed: "సినిమాలను వెతకడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.",
      enterMovieTitle: "దయచేసి సినిమా టైటిల్‌ను నమోదు చేయండి",
      searchingArchives: "సినిమా ఆర్కైవ్‌లను వెతుకుతోంది...",
      genres: {
        action: "యాక్షన్",
        thriller: "థ్రిల్లర్",
        sciFi: "సైన్స్ ఫిక్షన్",
        horror: "భయానక",
        comedy: "కామెడీ",
        drama: "డ్రామా",
        marvel: "మార్వెల్",
        dc: "డిసి",
      },
    },
  },
  hi: {
    flag: "🇮🇳",
    name: "हिंदी",
    texts: {
      appName: "मूवीफ्लिक्स",
      welcome: "सिनेमा में आपका स्वागत है",
      joinCinema: "अनुभव में शामिल हों",
      enterCinema: "सिनेमा में प्रवेश करें",
      joinMovieFlix: "मूवीफ्लिक्स में शामिल हों",
      enteringCinema: "सिनेमा में प्रवेश कर रहे हैं...",
      fullName: "पूरा नाम",
      emailAddress: "ईमेल पता",
      password: "पासवर्ड",
      newToMovieFlix: "मूवीफ्लिक्स में नए हैं? अभी शामिल हों",
      alreadyMember: "पहले से सदस्य हैं? साइन इन करें",
      premiumExperience: "प्रीमियम अनुभव",
      welcomeBackUser: "वापस स्वागत है, {name}!",
      exitCinema: "सिनेमा से बाहर निकलें",
      searchPlaceholder: "ब्लॉकबस्टर, क्लासिक्स या छुपे हुए रत्न खोजें...",
      searchResults: "खोज परिणाम",
      featuredInCinema: "सिनेमा में विशेष",
      premiumMovies: "प्रीमियम फिल्में",
      cinemaQuality: "सिनेमा गुणवत्ता",
      alwaysOpen: "हमेशा खुला",
      watchNow: "अभी देखें", // This text is no longer used for the button
      poweredBy: "द्वारा संचालित",
      searchFailed: "फिल्में खोजने में असफल। कृपया पुनः प्रयास करें।",
      enterMovieTitle: "कृपया फिल्म का शीर्षक दर्ज करें",
      searchingArchives: "सिनेमा अभिलेखागार खोज रहे हैं...",
      genres: {
        action: "एक्शन",
        thriller: "थ्रिलर",
        sciFi: "साइंस फिक्शन",
        horror: "हॉरर",
        comedy: "कॉमेडी",
        drama: "ड्रामा",
        marvel: "मार्वल",
        dc: "डीसी",
      },
    },
  },
}

// Global state
let currentLanguage = "en"
let currentUser = null
let isLogin = true
let movies = []
let featuredMovies = []
let isLoading = false

// Form validation state
let formErrors = {
  name: "",
  email: "",
  password: "",
}
let formTouched = {
  name: false,
  email: false,
  password: false,
}

// DOM elements
const loginForm = document.getElementById("loginForm")
const mainApp = document.getElementById("mainApp")
const authForm = document.getElementById("authForm")
const languageBtn = document.getElementById("languageBtn")
const languageDropdown = document.getElementById("languageDropdown")
const headerLanguageBtn = document.getElementById("headerLanguageBtn")
const headerLanguageDropdown = document.getElementById("headerLanguageDropdown")

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  initializeBackgroundAnimation()
  initializeLanguageSelector()
  initializeForm()
  initializeMainApp()
  updateLanguage()
})

// Background animation
function initializeBackgroundAnimation() {
  const backgrounds = document.querySelectorAll(".bg-image")
  let currentBg = 0

  // Show first background
  backgrounds[0].classList.add("active")

  setInterval(() => {
    backgrounds[currentBg].classList.remove("active")
    currentBg = (currentBg + 1) % backgrounds.length
    backgrounds[currentBg].classList.add("active")
  }, 8000)
}

// Language selector
function initializeLanguageSelector() {
  // Login form language selector
  languageBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    languageDropdown.classList.toggle("show")
  })

  // Header language selector
  headerLanguageBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    headerLanguageDropdown.classList.toggle("show")
  })

  // Language options
  document.querySelectorAll(".language-option").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault()
      const lang = e.currentTarget.dataset.lang
      changeLanguage(lang)
      languageDropdown.classList.remove("show")
      headerLanguageDropdown.classList.remove("show")
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    languageDropdown.classList.remove("show")
    headerLanguageDropdown.classList.remove("show")
  })
}

// Form initialization
function initializeForm() {
  const nameInput = document.getElementById("nameInput")
  const emailInput = document.getElementById("emailInput")
  const passwordInput = document.getElementById("passwordInput")
  const toggleLink = document.getElementById("toggleLink")

  // Form submission
  authForm.addEventListener("submit", handleFormSubmit)

  // Toggle between login/signup
  toggleLink.addEventListener("click", (e) => {
    e.preventDefault()
    toggleAuthMode()
  })

  // Input validation
  nameInput.addEventListener("blur", () => handleFieldBlur("name"))
  emailInput.addEventListener("blur", () => handleFieldBlur("email"))
  passwordInput.addEventListener("blur", () => handleFieldBlur("password"))

  nameInput.addEventListener("input", (e) => handleInputChange("name", e.target.value))
  emailInput.addEventListener("input", (e) => handleInputChange("email", e.target.value))
  passwordInput.addEventListener("input", (e) => handleInputChange("password", e.target.value))
}

// Main app initialization
function initializeMainApp() {
  const searchForm = document.getElementById("searchForm")
  const logoutBtn = document.getElementById("logoutBtn")
  const genreButtons = document.querySelectorAll(".genre-btn")

  // Search form
  searchForm.addEventListener("submit", handleSearch)

  // Logout
  logoutBtn.addEventListener("click", handleLogout)

  // Genre buttons
  genreButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const genre = e.target.dataset.genre
      document.getElementById("searchInput").value = genre // Set search input to genre
      searchMovies(genre)
    })
  })

  // Load featured movies
  fetchFeaturedMovies()
}

// Language change
function changeLanguage(lang) {
  currentLanguage = lang
  updateLanguage()
}

function updateLanguage() {
  const texts = languages[currentLanguage].texts
  const flag = languages[currentLanguage].flag
  const name = languages[currentLanguage].name

  // Update language selectors
  document.getElementById("currentLanguage").textContent = `${flag} ${name}`
  document.getElementById("headerCurrentLanguage").textContent = `${flag} ${name}`

  // Update login form
  document.getElementById("appTitle").textContent = texts.appName
  document.getElementById("subtitle").textContent = isLogin ? texts.welcome : texts.joinCinema
  document.getElementById("nameInput").placeholder = texts.fullName
  document.getElementById("emailInput").placeholder = texts.emailAddress
  document.getElementById("passwordInput").placeholder = texts.password
  document.getElementById("submitText").textContent = isLogin ? texts.enterCinema : texts.joinMovieFlix
  document.getElementById("toggleLink").textContent = isLogin ? texts.newToMovieFlix : texts.alreadyMember
  document.getElementById("premiumText").textContent = texts.premiumExperience

  // Update main app
  document.getElementById("headerTitle").textContent = texts.appName
  if (currentUser) {
    document.getElementById("headerSubtitle").textContent = texts.welcomeBackUser.replace("{name}", currentUser.name)
  }
  document.getElementById("exitText").textContent = texts.exitCinema
  document.getElementById("searchInput").placeholder = texts.searchPlaceholder
  document.getElementById("searchResultsTitle").textContent = texts.searchResults
  document.getElementById("featuredTitle").textContent = texts.featuredInCinema
  document.getElementById("premiumMoviesText").textContent = texts.premiumMovies
  document.getElementById("cinemaQualityText").textContent = texts.cinemaQuality
  document.getElementById("alwaysOpenText").textContent = texts.alwaysOpen
  document.getElementById("poweredByText").textContent = texts.poweredBy
  document.getElementById("loadingText").textContent = texts.searchingArchives
  document.getElementById("searchErrorText").textContent = texts.searchFailed

  // Update genre buttons
  const genreButtons = document.querySelectorAll(".genre-btn")
  const genreKeys = ["action", "thriller", "sciFi", "horror", "comedy", "drama", "marvel", "dc"]
  genreButtons.forEach((btn, index) => {
    if (genreKeys[index]) {
      btn.textContent = texts.genres[genreKeys[index]]
    }
  })

  // Re-render movie lists to update language-specific texts if already displayed
  if (movies.length > 0) {
    displaySearchResults()
  }
  if (featuredMovies.length > 0) {
    displayFeaturedMovies()
  }
}

// Form validation
function validateName(value) {
  if (!value.trim()) {
    return "Please enter your full name"
  }
  if (value.trim().length < 2) {
    return "Name must be at least 2 characters long"
  }
  return ""
}

function validateEmail(value) {
  if (!value.trim()) {
    return "Please enter your email address"
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value)) {
    return "Please enter a valid email address"
  }
  return ""
}

function validatePassword(value) {
  if (!value) {
    return "Please enter your password"
  }
  if (value.length < 6) {
    return "Password must be at least 6 characters long"
  }
  return ""
}

function handleFieldBlur(field) {
  formTouched[field] = true

  let error = ""
  const value = document.getElementById(field + "Input").value

  switch (field) {
    case "name":
      error = validateName(value)
      break
    case "email":
      error = validateEmail(value)
      break
    case "password":
      error = validatePassword(value)
      break
  }

  formErrors[field] = error
  updateFieldError(field, error)
}

function handleInputChange(field, value) {
  if (formTouched[field]) {
    let error = ""
    switch (field) {
      case "name":
        error = validateName(value)
        break
      case "email":
        error = validateEmail(value)
        break
      case "password":
        error = validatePassword(value)
        break
    }
    formErrors[field] = error
    updateFieldError(field, error)
  }
}

function updateFieldError(field, error) {
  const input = document.getElementById(field + "Input")
  const errorElement = document.getElementById(field + "Error")

  if (error && formTouched[field]) {
    input.classList.add("error")
    errorElement.classList.remove("hidden")
    errorElement.querySelector("span").textContent = error
  } else {
    input.classList.remove("error")
    errorElement.classList.add("hidden")
  }
}

function toggleAuthMode() {
  isLogin = !isLogin
  const nameGroup = document.getElementById("nameGroup")

  if (isLogin) {
    nameGroup.classList.add("hidden")
  } else {
    nameGroup.classList.remove("hidden")
  }

  // Reset form errors
  formErrors = { name: "", email: "", password: "" }
  formTouched = { name: false, email: false, password: false }

  // Clear error displays
  ;["name", "email", "password"].forEach((field) => {
    updateFieldError(field, "")
  })

  updateLanguage()
}

function handleFormSubmit(e) {
  e.preventDefault()

  // Mark all fields as touched
  formTouched = { name: true, email: true, password: true }

  // Validate all fields
  const nameValue = document.getElementById("nameInput").value
  const emailValue = document.getElementById("emailInput").value
  const passwordValue = document.getElementById("passwordInput").value

  const nameError = !isLogin ? validateName(nameValue) : ""
  const emailError = validateEmail(emailValue)
  const passwordError = validatePassword(passwordValue)

  formErrors = {
    name: nameError,
    email: emailError,
    password: passwordError,
  }

  // Update error displays
  updateFieldError("name", nameError)
  updateFieldError("email", emailError)
  updateFieldError("password", passwordError)

  // Check if there are any errors
  const hasErrors = (!isLogin && nameError) || emailError || passwordError

  if (hasErrors) {
    authForm.classList.add("shake")
    setTimeout(() => authForm.classList.remove("shake"), 500)
    return
  }

  // Simulate login
  const submitBtn = document.getElementById("submitBtn")
  const submitText = document.getElementById("submitText")
  const texts = languages[currentLanguage].texts

  submitBtn.disabled = true
  submitText.innerHTML = `
      <svg style="width: 20px; height: 20px; margin-right: 8px; animation: spin 1s linear infinite;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
      ${texts.enteringCinema}
  `

  setTimeout(() => {
    currentUser = {
      email: emailValue,
      name: nameValue || emailValue.split("@")[0],
      language: currentLanguage,
    }

    loginForm.classList.add("hidden")
    mainApp.classList.add("show")
    updateLanguage()
    fetchFeaturedMovies()

    submitBtn.disabled = false
    submitText.textContent = isLogin ? texts.enterCinema : texts.joinMovieFlix
  }, 2000)
}

function handleLogout() {
  currentUser = null
  loginForm.classList.remove("hidden")
  mainApp.classList.remove("show")

  // Reset form
  document.getElementById("authForm").reset()
  formErrors = { name: "", email: "", password: "" }
  formTouched = { name: false, email: false, password: false }
  ;["name", "email", "password"].forEach((field) => {
    updateFieldError(field, "")
  })
}

// Movie search
function handleSearch(e) {
  e.preventDefault()
  const query = document.getElementById("searchInput").value.trim()
  if (query) {
    searchMovies(query)
  } else {
    showError(languages[currentLanguage].texts.enterMovieTitle)
  }
}

async function searchMovies(query) {
  if (isLoading) return

  setLoading(true)
  hideError()

  try {
    const languageCode = getLanguageCode()
    const response = await fetch(
      `${API_CONFIG.TMDB.BASE_URL}/search/movie?api_key=${API_CONFIG.TMDB.API_KEY}&query=${encodeURIComponent(query)}&page=1&language=${languageCode}`,
    )

    if (!response.ok) throw new Error("Search failed")

    const data = await response.json()
    movies = data.results.slice(0, 12)
    displaySearchResults()
  } catch (error) {
    console.error("Search error:", error)
    showError(languages[currentLanguage].texts.searchFailed)
  } finally {
    setLoading(false)
  }
}

async function fetchFeaturedMovies() {
  try {
    const languageCode = getLanguageCode()
    const response = await fetch(
      `${API_CONFIG.TMDB.BASE_URL}/movie/popular?api_key=${API_CONFIG.TMDB.API_KEY}&page=1&language=${languageCode}`,
    )

    if (!response.ok) throw new Error("Failed to fetch")

    const data = await response.json()
    featuredMovies = data.results.slice(0, 8)
    displayFeaturedMovies()
  } catch (error) {
    console.error("Featured movies error:", error)
  }
}

function getLanguageCode() {
  const langMap = {
    en: "en-US",
    ta: "ta-IN",
    te: "te-IN",
    hi: "hi-IN",
  }
  return langMap[currentLanguage] || "en-US"
}

function setLoading(loading) {
  isLoading = loading
  const loadingContainer = document.getElementById("loadingContainer")
  const searchBtn = document.getElementById("searchBtn")

  if (loading) {
    loadingContainer.classList.remove("hidden")
    searchBtn.disabled = true
    searchBtn.innerHTML = `
          <svg style="width: 24px; height: 24px; animation: spin 1s linear infinite;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
      `
  } else {
    loadingContainer.classList.add("hidden")
    searchBtn.disabled = false
    searchBtn.innerHTML = `
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <div class="btn-shine"></div>
      `
  }
}

function showError(message) {
  const errorContainer = document.getElementById("searchError")
  const errorText = document.getElementById("searchErrorText")
  errorText.textContent = message
  errorContainer.classList.remove("hidden")
}

function hideError() {
  const errorContainer = document.getElementById("searchError")
  errorContainer.classList.add("hidden")
}

function displaySearchResults() {
  const searchResults = document.getElementById("searchResults")
  const searchMoviesGrid = document.getElementById("searchMoviesGrid")

  if (movies.length > 0) {
    searchResults.classList.remove("hidden")
    searchMoviesGrid.innerHTML = movies.map((movie, index) => createMovieCard(movie, index)).join("")
  } else {
    searchResults.classList.add("hidden")
  }
}

function displayFeaturedMovies() {
  const featuredMoviesGrid = document.getElementById("featuredMoviesGrid")
  featuredMoviesGrid.innerHTML = featuredMovies.map((movie, index) => createMovieCard(movie, index)).join("")
}

function createMovieCard(movie, index) {
  const texts = languages[currentLanguage].texts
  const posterUrl = movie.poster_path
    ? `${API_CONFIG.TMDB.IMAGE_BASE_URL}w500${movie.poster_path}`
    : "/placeholder.svg?height=750&width=500"
  const backdropUrl = movie.backdrop_path ? `${API_CONFIG.TMDB.IMAGE_BASE_URL}w1280${movie.backdrop_path}` : ""

  return `
      <div class="movie-card" style="animation-delay: ${index * 0.1}s;">
          <div class="movie-poster-container">
              <img class="movie-poster" src="${posterUrl}" alt="${movie.title}" loading="lazy">
              ${backdropUrl ? `<img class="movie-backdrop" src="${backdropUrl}" alt="${movie.title}" loading="lazy">` : ""}
              
              <div class="movie-rating">
                  <svg class="star-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span class="rating-text">${movie.vote_average.toFixed(1)}</span>
              </div>
              
              <div class="movie-overlay">
                  <div class="play-button">
                      <svg class="play-icon" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                      </svg>
                  </div>
              </div>
              
              <div class="movie-strip"></div>
          </div>
          
          <div class="movie-content">
              <h3 class="movie-title">${movie.title}</h3>
              
              <div class="movie-meta">
                  <div class="meta-item">
                      <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span>${new Date(movie.release_date).getFullYear()}</span>
                  </div>
                  <div class="meta-item">
                      <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                      </svg>
                      <span>${movie.vote_count.toLocaleString()}</span>
                  </div>
              </div>
              
              <p class="movie-overview">${movie.overview}</p>
              
              <!-- Removed the "Watch Now" button as requested -->
          </div>
      </div>
  `
}
