// js/auth.js
import { validateName, validateEmail, validatePassword, updateFieldError } from "./utils.js"
import { languages } from "./config.js"

// Internal state for authentication module
let _isLogin = true
let _currentUser = null
let _formErrors = { name: "", email: "", password: "" }
let _formTouched = { name: false, email: false, password: false }

// Callbacks to communicate with the main app (app.js)
let _onLoginCallback = () => {}
let _onLogoutCallback = () => {}
let _updateLanguageCallback = () => {}
let _fetchFeaturedMoviesCallback = () => {}

/**
 * Initializes the authentication module with necessary callbacks from the main app.
 * @param {Function} onLogin - Callback to run on successful login.
 * @param {Function} onLogout - Callback to run on logout.
 * @param {Function} updateLanguage - Callback to update language in the main app.
 * @param {Function} fetchFeaturedMovies - Callback to fetch featured movies in the main app.
 */
export function initAuth(onLogin, onLogout, updateLanguage, fetchFeaturedMovies) {
  _onLoginCallback = onLogin
  _onLogoutCallback = onLogout
  _updateLanguageCallback = updateLanguage
  _fetchFeaturedMoviesCallback = fetchFeaturedMovies
}

// Getters for internal state
export function getIsLogin() {
  return _isLogin
}
export function getCurrentUser() {
  return _currentUser
}
export function getFormErrors() {
  return _formErrors
}
export function getFormTouched() {
  return _formTouched
}

/**
 * Handles the blur event for form input fields to trigger validation.
 * Updates internal formErrors and formTouched states.
 * @param {string} field - The name of the field ('name', 'email', 'password').
 */
export function handleFieldBlur(field) {
  _formTouched[field] = true
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
  _formErrors[field] = error
  updateFieldError(field, error, _formTouched)
}

/**
 * Handles input changes for form fields to provide real-time validation feedback.
 * Updates internal formErrors state if the field has been touched.
 * @param {string} field - The name of the field ('name', 'email', 'password').
 * @param {string} value - The current value of the input.
 */
export function handleInputChange(field, value) {
  if (_formTouched[field]) {
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
    _formErrors[field] = error
    updateFieldError(field, error, _formTouched)
  }
}

/**
 * Toggles between login and signup modes for the authentication form.
 * Resets form validation states and notifies the main app to update language.
 */
export function toggleAuthMode() {
  _isLogin = !_isLogin
  // Reset form errors and touched state
  _formErrors = { name: "", email: "", password: "" }
  _formTouched = { name: false, email: false, password: false }
  ;["name", "email", "password"].forEach((field) => {
    updateFieldError(field, "", { [field]: false }) // Clear errors on UI
  })
  _updateLanguageCallback() // Notify app.js to update language texts
}

/**
 * Handles the submission of the authentication form (login or signup).
 * Performs validation, simulates login, and notifies the main app.
 * @param {Event} e - The form submission event.
 */
export function handleAuthFormSubmit(e) {
  e.preventDefault()

  // Mark all fields as touched
  Object.keys(_formTouched).forEach((key) => (_formTouched[key] = true))

  // Validate all fields
  const nameValue = document.getElementById("nameInput").value
  const emailValue = document.getElementById("emailInput").value
  const passwordValue = document.getElementById("passwordInput").value

  const nameError = !_isLogin ? validateName(nameValue) : ""
  const emailError = validateEmail(emailValue)
  const passwordError = validatePassword(passwordValue)

  _formErrors.name = nameError
  _formErrors.email = emailError
  _formErrors.password = passwordError

  // Update error displays
  updateFieldError("name", nameError, _formTouched)
  updateFieldError("email", emailError, _formTouched)
  updateFieldError("password", passwordError, _formTouched)

  // Check if there are any errors
  const hasErrors = (!_isLogin && nameError) || emailError || passwordError

  if (hasErrors) {
    const authForm = document.getElementById("authForm")
    authForm.classList.add("shake")
    setTimeout(() => authForm.classList.remove("shake"), 500)
    return
  }

  // Simulate login/signup process
  const submitBtn = document.getElementById("submitBtn")
  const submitText = document.getElementById("submitText")
  // We need the current language from app.js, so we assume _updateLanguageCallback can provide it
  const texts = languages[_updateLanguageCallback.currentLanguage].texts

  submitBtn.disabled = true
  submitText.innerHTML = `
        <svg style="width: 20px; height: 20px; margin-right: 8px; animation: spin 1s linear infinite;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        ${texts.enteringCinema}
    `

  setTimeout(() => {
    _currentUser = {
      email: emailValue,
      name: nameValue || emailValue.split("@")[0],
      language: _updateLanguageCallback.currentLanguage, // Use current language from app.js
    }
    _onLoginCallback(_currentUser) // Notify app.js of successful login
    submitBtn.disabled = false
    submitText.textContent = _isLogin ? texts.enterCinema : texts.joinMovieFlix
  }, 2000)
}

/**
 * Handles user logout.
 * Resets internal user state and notifies the main app.
 */
export function handleUserLogout() {
  _currentUser = null
  _onLogoutCallback() // Notify app.js of logout
  // Reset form
  document.getElementById("authForm").reset()
  _formErrors = { name: "", email: "", password: "" }
  _formTouched = { name: false, email: false, password: false }
  ;["name", "email", "password"].forEach((field) => {
    updateFieldError(field, "", { [field]: false })
  })
}
