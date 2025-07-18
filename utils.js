// js/utils.js
import { API_CONFIG, languages } from "./config.js"

/**
 * Validates a full name.
 * @param {string} value - The name to validate.
 * @returns {string} An error message if invalid, otherwise an empty string.
 */
export function validateName(value) {
  if (!value.trim()) {
    return "Please enter your full name"
  }
  if (value.trim().length < 2) {
    return "Name must be at least 2 characters long"
  }
  return ""
}

/**
 * Validates an email address.
 * @param {string} value - The email to validate.
 * @returns {string} An error message if invalid, otherwise an empty string.
 */
export function validateEmail(value) {
  if (!value.trim()) {
    return "Please enter your email address"
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value)) {
    return "Please enter a valid email address"
  }
  return ""
}

/**
 * Validates a password.
 * @param {string} value - The password to validate.
 * @returns {string} An error message if invalid, otherwise an empty string.
 */
export function validatePassword(value) {
  if (!value) {
    return "Please enter your password"
  }
  if (value.length < 6) {
    return "Password must be at least 6 characters long"
  }
  return ""
}

/**
 * Updates the display of a form field's error message.
 * @param {string} field - The ID prefix of the input field (e.g., 'name', 'email').
 * @param {string} error - The error message to display.
 * @param {object} formTouched - The formTouched state object.
 */
export function updateFieldError(field, error, formTouched) {
  const input = document.getElementById(field + "Input")
  const errorElement = document.getElementById(field + "Error")

  if (input && errorElement) {
    // Ensure elements exist
    if (error && formTouched[field]) {
      input.classList.add("error")
      errorElement.classList.remove("hidden")
      errorElement.querySelector("span").textContent = error
    } else {
      input.classList.remove("error")
      errorElement.classList.add("hidden")
    }
  }
}

/**
 * Gets the TMDB language code based on the current app language.
 * @param {string} appLanguage - The current language code of the app.
 * @returns {string} The TMDB language code (e.g., 'en-US', 'ta-IN').
 */
export function getLanguageCode(appLanguage) {
  const langMap = {
    en: "en-US",
    ta: "ta-IN",
    te: "te-IN",
    hi: "hi-IN",
  }
  return langMap[appLanguage] || "en-US"
}

/**
 * Sets the loading state for the search functionality.
 * @param {boolean} loading - True to show loading, false to hide.
 */
export function setLoading(loading) {
  const loadingContainer = document.getElementById("loadingContainer")
  const searchBtn = document.getElementById("searchBtn")

  if (loadingContainer && searchBtn) {
    // Ensure elements exist
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
}

/**
 * Displays an error message in the search section.
 * @param {string} message - The error message to display.
 */
export function showError(message) {
  const errorContainer = document.getElementById("searchError")
  const errorText = document.getElementById("searchErrorText")
  if (errorContainer && errorText) {
    errorText.textContent = message
    errorContainer.classList.remove("hidden")
  }
}

/**
 * Hides the error message in the search section.
 */
export function hideError() {
  const errorContainer = document.getElementById("searchError")
  if (errorContainer) {
    errorContainer.classList.add("hidden")
  }
}

/**
 * Creates an HTML string for a movie card.
 * @param {object} movie - The movie data object.
 * @param {number} index - The index of the movie for animation delay.
 * @param {string} appLanguage - The current language code of the app.
 * @returns {string} The HTML string for the movie card.
 */
export function createMovieCard(movie, index, appLanguage) {
  const texts = languages[appLanguage].texts
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
              
              <!-- "Watch Now" button removed as requested -->
          </div>
      </div>
  `
}
