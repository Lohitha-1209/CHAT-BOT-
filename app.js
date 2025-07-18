// js/app.js
import { API_CONFIG, languages } from "./config.js"
import { updateFieldError, getLanguageCode, setLoading, showError, hideError, createMovieCard } from "./utils.js"
import {
  initAuth,
  handleFieldBlur as authHandleFieldBlur,
  handleInputChange as authHandleInputChange,
  toggleAuthMode as authToggleAuthMode,
  handleAuthFormSubmit,
  handleUserLogout,
} from "./auth.js"

// Global state for the application
let currentUser = null
let currentLanguage = "en" // Default language
let isLogin = true // Default auth mode (login)
let movies = []
let featuredMovies = []
const isLoading = false // Global loading state for API calls

// DOM elements
const loginForm = document.getElementById("loginForm")
const mainApp = document.getElementById("mainApp")
const authForm = document.getElementById("authForm")
const languageBtn = document.getElementById("languageBtn")
const languageDropdown = document.getElementById("languageDropdown")
const headerLanguageBtn = document.getElementById("headerLanguageBtn")
const headerLanguageDropdown = document.getElementById("headerLanguageDropdown")
const searchForm = document.getElementById("searchForm")
const logoutBtn = document.getElementById("logoutBtn")
const genreButtons = document.querySelectorAll(".genre-btn")

// --- Callbacks for Auth Module ---
const onLogin = (user) => {
  currentUser = user
  loginForm.classList.add("hidden")
  mainApp.classList.add("show")
  updateLanguage() // Update main app UI with user's language
  fetchFeaturedMovies() // Load initial movies for the logged-in user
}

const onLogout = () => {
  currentUser = null
  loginForm.classList.remove("hidden")
  mainApp.classList.remove("show")
  // Reset form after logout
  authForm.reset()
  // Clear any displayed errors
  ;["name", "email", "password"].forEach((field) => {
    updateFieldError(field, "", { [field]: false })
  })
}

const getAppLanguage = () => currentLanguage // Helper for auth module to get current language

// --- Initialization Functions ---

/**
 * Initializes the cinematic background animation.
 */
function initializeBackgroundAnimation() {
  const backgrounds = document.querySelectorAll(".bg-image")
  let currentBg = 0

  // Show first background
  if (backgrounds.length > 0) {
    backgrounds[0].classList.add("active")
  }

  setInterval(() => {
    if (backgrounds.length > 0) {
      backgrounds[currentBg].classList.remove("active")
      currentBg = (currentBg + 1) % backgrounds.length
      backgrounds[currentBg].classList.add("active")
    }
  }, 8000)
}

/**
 * Initializes event listeners for language selection dropdowns.
 */
function initializeLanguageSelector() {
  if (languageBtn) {
    languageBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      languageDropdown.classList.toggle("show")
    })
  }

  if (headerLanguageBtn) {
    headerLanguageBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      headerLanguageDropdown.classList.toggle("show")
    })
  }

  document.querySelectorAll(".language-option").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.preventDefault()
      const lang = e.currentTarget.dataset.lang
      changeLanguage(lang)
      if (languageDropdown) languageDropdown.classList.remove("show")
      if (headerLanguageDropdown) headerLanguageDropdown.classList.remove("show")
    })
  })

  document.addEventListener("click", () => {
    if (languageDropdown) languageDropdown.classList.remove("show")
    if (headerLanguageDropdown) headerLanguageDropdown.classList.remove("show")
  })
}

/**
 * Initializes event listeners for the authentication form.
 */
function initializeForm() {
  const nameInput = document.getElementById("nameInput")
  const emailInput = document.getElementById("emailInput")
  const passwordInput = document.getElementById("passwordInput")
  const toggleLink = document.getElementById("toggleLink")

  if (authForm) {
    authForm.addEventListener("submit", handleAuthFormSubmit)
  }

  if (toggleLink) {
    toggleLink.addEventListener("click", (e) => {
      e.preventDefault()
      isLogin = !isLogin // Update local state
      authToggleAuthMode() // Notify auth module to update its internal state and UI
      updateLanguage() // Update UI texts based on new mode
    })
  }

  // Input validation event listeners
  if (nameInput) nameInput.addEventListener("blur", () => authHandleFieldBlur("name"))
  if (emailInput) emailInput.addEventListener("blur", () => authHandleFieldBlur("email"))
  if (passwordInput) passwordInput.addEventListener("blur", () => authHandleFieldBlur("password"))

  if (nameInput) nameInput.addEventListener("input", (e) => authHandleInputChange("name", e.target.value))
  if (emailInput) emailInput.addEventListener("input", (e) => authHandleInputChange("email", e.target.value))
  if (passwordInput) passwordInput.addEventListener("input", (e) => authHandleInputChange("password", e.target.value))
}

/**
 * Initializes event listeners for the main application interface.
 */
function initializeMainApp() {
  if (searchForm) {
    searchForm.addEventListener("submit", handleSearch)
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleUserLogout)
  }

  genreButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const genre = e.target.dataset.genre
      const searchInput = document.getElementById("searchInput")
      if (searchInput) searchInput.value = genre // Set search input to genre
      searchMovies(genre)
    })
  })

  // Load featured movies on app start (after login)
  fetchFeaturedMovies()
}

/**
 * Changes the current language of the application.
 * @param {string} lang - The language code (e.g., 'en', 'ta').
 */
function changeLanguage(lang) {
  currentLanguage = lang
  if (currentUser) {
    currentUser.language = lang // Update user's language if logged in
  }
  updateLanguage() // Re-render UI with new language
}

/**
 * Updates all language-dependent UI elements based on the currentLanguage.
 */
function updateLanguage() {
  const texts = languages[currentLanguage].texts
  const flag = languages[currentLanguage].flag
  const name = languages[currentLanguage].name

  // Update language selectors
  if (document.getElementById("currentLanguage"))
    document.getElementById("currentLanguage").textContent = `${flag} ${name}`
  if (document.getElementById("headerCurrentLanguage"))
    document.getElementById("headerCurrentLanguage").textContent = `${flag} ${name}`

  // Update login form texts
  if (document.getElementById("appTitle")) document.getElementById("appTitle").textContent = texts.appName
  if (document.getElementById("subtitle"))
    document.getElementById("subtitle").textContent = isLogin ? texts.welcome : texts.joinCinema
  if (document.getElementById("nameInput")) document.getElementById("nameInput").placeholder = texts.fullName
  if (document.getElementById("emailInput")) document.getElementById("emailInput").placeholder = texts.emailAddress
  if (document.getElementById("passwordInput")) document.getElementById("passwordInput").placeholder = texts.password
  if (document.getElementById("submitText"))
    document.getElementById("submitText").textContent = isLogin ? texts.enterCinema : texts.joinMovieFlix
  if (document.getElementById("toggleLink"))
    document.getElementById("toggleLink").textContent = isLogin ? texts.newToMovieFlix : texts.alreadyMember
  if (document.getElementById("premiumText"))
    document.getElementById("premiumText").textContent = texts.premiumExperience

  // Update main app texts
  if (document.getElementById("headerTitle")) document.getElementById("headerTitle").textContent = texts.appName
  if (document.getElementById("headerSubtitle") && currentUser) {
    document.getElementById("headerSubtitle").textContent = texts.welcomeBackUser.replace("{name}", currentUser.name)
  }
  if (document.getElementById("exitText")) document.getElementById("exitText").textContent = texts.exitCinema
  if (document.getElementById("searchInput"))
    document.getElementById("searchInput").placeholder = texts.searchPlaceholder
  if (document.getElementById("searchResultsTitle"))
    document.getElementById("searchResultsTitle").textContent = texts.searchResults
  if (document.getElementById("featuredTitle"))
    document.getElementById("featuredTitle").textContent = texts.featuredInCinema
  if (document.getElementById("premiumMoviesText"))
    document.getElementById("premiumMoviesText").textContent = texts.premiumMovies
  if (document.getElementById("cinemaQualityText"))
    document.getElementById("cinemaQualityText").textContent = texts.cinemaQuality
  if (document.getElementById("alwaysOpenText"))
    document.getElementById("alwaysOpenText").textContent = texts.alwaysOpen
  if (document.getElementById("poweredByText")) document.getElementById("poweredByText").textContent = texts.poweredBy
  if (document.getElementById("loadingText"))
    document.getElementById("loadingText").textContent = texts.searchingArchives
  if (document.getElementById("searchErrorText"))
    document.getElementById("searchErrorText").textContent = texts.searchFailed

  // Update genre buttons
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

/**
 * Handles the search form submission.
 * @param {Event} e - The form submission event.
 */
function handleSearch(e) {
  e.preventDefault()
  const query = document.getElementById("searchInput").value.trim()
  if (query) {
    searchMovies(query)
  } else {
    showError(languages[currentLanguage].texts.enterMovieTitle)
  }
}

/**
 * Fetches movies from the TMDB API based on a query.
 * @param {string} query - The search query.
 */
async function searchMovies(query) {
  if (isLoading) return

  setLoading(true)
  hideError()

  try {
    const languageCode = getLanguageCode(currentLanguage)
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

/**
 * Fetches popular/featured movies from the TMDB API.
 */
async function fetchFeaturedMovies() {
  try {
    const languageCode = getLanguageCode(currentLanguage)
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

/**
 * Displays the search results in the UI.
 */
function displaySearchResults() {
  const searchResults = document.getElementById("searchResults")
  const searchMoviesGrid = document.getElementById("searchMoviesGrid")

  if (searchResults && searchMoviesGrid) {
    if (movies.length > 0) {
      searchResults.classList.remove("hidden")
      searchMoviesGrid.innerHTML = movies.map((movie, index) => createMovieCard(movie, index, currentLanguage)).join("")
    } else {
      searchResults.classList.add("hidden")
    }
  }
}

/**
 * Displays the featured movies in the UI.
 */
function displayFeaturedMovies() {
  const featuredMoviesGrid = document.getElementById("featuredMoviesGrid")
  if (featuredMoviesGrid) {
    featuredMoviesGrid.innerHTML = featuredMovies
      .map((movie, index) => createMovieCard(movie, index, currentLanguage))
      .join("")
  }
}

// --- Main App Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize auth module with callbacks to app.js
  initAuth(onLogin, onLogout, updateLanguage, fetchFeaturedMovies)

  initializeBackgroundAnimation()
  initializeLanguageSelector()
  initializeForm()
  initializeMainApp()
  updateLanguage() // Initial language setup
})
