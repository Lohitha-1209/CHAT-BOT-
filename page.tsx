"use client"
import { useState, useEffect } from "react"
import type React from "react"

import {
  Search,
  Star,
  Calendar,
  Play,
  Heart,
  User,
  Mail,
  Lock,
  LogOut,
  Film,
  Award,
  RefreshCw,
  Sparkles,
  Volume2,
  Users,
  Zap,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Import language files
import { englishTexts } from "./languages/english"
import { tamilTexts } from "./languages/tamil"
import { teluguTexts } from "./languages/telugu"
import { hindiTexts } from "./languages/hindi"

// Types
interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
  vote_average: number
  vote_count: number
  runtime?: number
  genres?: Array<{ id: number; name: string }>
}

interface AppUser {
  email: string
  name: string
  language: string
}

interface LanguageTexts {
  appName: string
  welcome: string
  welcomeBack: string
  joinCinema: string
  enterCinema: string
  joinMovieFlix: string
  enteringCinema: string
  fullName: string
  emailAddress: string
  password: string
  newToMovieFlix: string
  alreadyMember: string
  premiumExperience: string
  welcomeBackUser: string
  exitCinema: string
  searchPlaceholder: string
  searchResults: string
  featuredInCinema: string
  premiumMovies: string
  cinemaQuality: string
  alwaysOpen: string
  watchNow: string
  poweredBy: string
  searchFailed: string
  enterMovieTitle: string
  searchingArchives: string
  genres: {
    action: string
    thriller: string
    sciFi: string
    horror: string
    comedy: string
    drama: string
    marvel: string
    dc: string
  }
}

// Language selector
const languages = [
  { code: "en", name: "English", flag: "🇺🇸", texts: englishTexts },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳", texts: tamilTexts },
  { code: "te", name: "తెలుగు", flag: "🇮🇳", texts: teluguTexts },
  { code: "hi", name: "हिंदी", flag: "🇮🇳", texts: hindiTexts },
]

// Cinematic Background with Movie Scenes
const CinematicBackground = () => {
  const [currentBg, setCurrentBg] = useState(0)

  const movieBackgrounds = [
    "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", // Avengers
    "https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg", // Batman
    "https://image.tmdb.org/t/p/original/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg", // Interstellar
    "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg", // Blade Runner
    "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg", // Inception
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % movieBackgrounds.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Movie Background Images */}
      {movieBackgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Dark Cinema Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Film Strip Animation */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-film-strip" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent animate-film-strip-reverse" />

      {/* Floating Cinema Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400/10 animate-float-cinema"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          >
            🎬
          </div>
        ))}
      </div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
    </div>
  )
}

// Premium Card Component
const CinemaCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/50 to-red-600/50 rounded-xl blur opacity-20 group-hover:opacity-60 transition duration-1000" />
      <div className="relative bg-black/40 backdrop-blur-xl border border-yellow-400/20 rounded-xl shadow-2xl">
        {children}
      </div>
    </div>
  )
}

// Language Selector Component
const LanguageSelector = ({
  currentLanguage,
  onLanguageChange,
}: {
  currentLanguage: string
  onLanguageChange: (langCode: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="bg-black/40 text-white border-gray-600 hover:bg-black/60 hover:border-yellow-400 px-4 py-2"
      >
        <Globe className="w-4 h-4 mr-2" />
        {languages.find((lang) => lang.code === currentLanguage)?.flag}{" "}
        {languages.find((lang) => lang.code === currentLanguage)?.name}
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-xl border border-yellow-400/20 rounded-lg shadow-2xl z-50 min-w-[150px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code)
                setIsOpen(false)
              }}
              className="w-full px-4 py-3 text-left text-white hover:bg-yellow-400/20 hover:text-yellow-400 transition-colors flex items-center space-x-3 first:rounded-t-lg last:rounded-b-lg"
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// Login Component with Custom Form Validation
const CinemaLogin = ({
  onLogin,
  currentLanguage,
  onLanguageChange,
}: {
  onLogin: (user: AppUser) => void
  currentLanguage: string
  onLanguageChange: (langCode: string) => void
}) => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)

  // Form validation states
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  })

  const texts = languages.find((lang) => lang.code === currentLanguage)?.texts || englishTexts

  // Validation functions
  const validateName = (value: string) => {
    if (!value.trim()) {
      return "Please enter your full name"
    }
    if (value.trim().length < 2) {
      return "Name must be at least 2 characters long"
    }
    return ""
  }

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return "Please enter your email address"
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address"
    }
    return ""
  }

  const validatePassword = (value: string) => {
    if (!value) {
      return "Please enter your password"
    }
    if (value.length < 6) {
      return "Password must be at least 6 characters long"
    }
    return ""
  }

  // Handle field blur for validation
  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }))

    let error = ""
    switch (field) {
      case "name":
        error = validateName(name)
        break
      case "email":
        error = validateEmail(email)
        break
      case "password":
        error = validatePassword(password)
        break
    }

    setErrors((prev) => ({ ...prev, [field]: error }))
  }

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case "name":
        setName(value)
        if (touched.name) {
          setErrors((prev) => ({ ...prev, name: validateName(value) }))
        }
        break
      case "email":
        setEmail(value)
        if (touched.email) {
          setErrors((prev) => ({ ...prev, email: validateEmail(value) }))
        }
        break
      case "password":
        setPassword(value)
        if (touched.password) {
          setErrors((prev) => ({ ...prev, password: validatePassword(value) }))
        }
        break
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      password: true,
    })

    // Validate all fields
    const nameError = !isLogin ? validateName(name) : ""
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
    })

    // Check if there are any errors
    const hasErrors = (!isLogin && nameError) || emailError || passwordError

    if (hasErrors) {
      // Shake animation for form
      const form = e.currentTarget as HTMLFormElement
      form.classList.add("animate-shake")
      setTimeout(() => form.classList.remove("animate-shake"), 500)
      return
    }

    setLoading(true)

    setTimeout(() => {
      const user: AppUser = {
        email,
        name: name || email.split("@")[0],
        language: currentLanguage,
      }
      onLogin(user)
      setLoading(false)
    }, 2000)
  }

  // Reset errors when switching between login/signup
  const toggleMode = () => {
    setIsLogin(!isLogin)
    setErrors({ name: "", email: "", password: "" })
    setTouched({ name: false, email: false, password: false })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Language Selector */}
        <div className="flex justify-end mb-6">
          <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
        </div>

        <CinemaCard className="animate-fade-in-cinema">
          <CardHeader className="text-center pb-8">
            {/* Cinema Logo */}
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center mb-6 relative overflow-hidden">
              <Film className="w-12 h-12 text-black animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
            </div>

            <CardTitle className="text-4xl font-bold text-white mb-3 tracking-wider">
              <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                {texts.appName}
              </span>
            </CardTitle>
            <p className="text-gray-300 text-lg">{isLogin ? texts.welcome : texts.joinCinema}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mt-4 rounded-full" />
          </CardHeader>

          <CardContent className="space-y-6 px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder={texts.fullName}
                      value={name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={`pl-12 bg-black/20 border-gray-600 text-white placeholder:text-gray-400 focus:bg-black/30 focus:border-yellow-400 h-14 text-lg transition-all duration-300 ${
                        errors.name && touched.name ? "border-red-500 focus:border-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.name && touched.name && (
                    <div className="flex items-center space-x-2 text-red-400 text-sm animate-fade-in-cinema">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder={texts.emailAddress}
                    value={email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={`pl-12 bg-black/20 border-gray-600 text-white placeholder:text-gray-400 focus:bg-black/30 focus:border-yellow-400 h-14 text-lg transition-all duration-300 ${
                      errors.email && touched.email ? "border-red-500 focus:border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.email && touched.email && (
                  <div className="flex items-center space-x-2 text-red-400 text-sm animate-fade-in-cinema">
                    <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="password"
                    placeholder={texts.password}
                    value={password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    onBlur={() => handleBlur("password")}
                    className={`pl-12 bg-black/20 border-gray-600 text-white placeholder:text-gray-400 focus:bg-black/30 focus:border-yellow-400 h-14 text-lg transition-all duration-300 ${
                      errors.password && touched.password ? "border-red-500 focus:border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.password && touched.password && (
                  <div className="flex items-center space-x-2 text-red-400 text-sm animate-fade-in-cinema">
                    <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                    <span>{errors.password}</span>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-black font-bold h-14 text-lg tracking-wide relative overflow-hidden disabled:opacity-70"
              >
                {loading ? (
                  <div className="flex items-center">
                    <RefreshCw className="w-5 h-5 animate-spin mr-2" />
                    {texts.enteringCinema}
                  </div>
                ) : (
                  <span>{isLogin ? texts.enterCinema : texts.joinMovieFlix}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
              </Button>
            </form>

            <div className="text-center">
              <button onClick={toggleMode} className="text-gray-400 hover:text-yellow-400 transition-colors text-lg">
                {isLogin ? texts.newToMovieFlix : texts.alreadyMember}
              </button>
            </div>

            <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                <span className="text-gray-400">{texts.premiumExperience}</span>
              </div>
            </div>
          </CardContent>
        </CinemaCard>
      </div>
    </div>
  )
}

// Premium Movie Card
const PremiumMovieCard = ({ movie, texts }: { movie: Movie; texts: LanguageTexts }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.svg?height=750&width=500"

  const backdropUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : null

  return (
    <CinemaCard
      className="group hover:scale-105 transition-all duration-500 animate-fade-in-cinema"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        {/* Movie Poster/Backdrop */}
        <div className="aspect-[2/3] relative">
          {isHovered && backdropUrl ? (
            <img
              src={backdropUrl || "/placeholder.svg"}
              alt={movie.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          ) : (
            <img
              src={posterUrl || "/placeholder.svg"}
              alt={movie.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=750&width=500"
                setImageLoaded(true)
              }}
            />
          )}

          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <RefreshCw className="w-8 h-8 text-yellow-400 animate-spin" />
            </div>
          )}
        </div>

        {/* Premium Rating Badge */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-1 border border-yellow-400/30">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-bold">{movie.vote_average.toFixed(1)}</span>
        </div>

        {/* Premium Play Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="bg-yellow-400/20 backdrop-blur-sm rounded-full p-6 transform scale-75 group-hover:scale-100 transition-transform duration-500 border border-yellow-400/50">
            <Play className="w-10 h-10 text-yellow-400 fill-current" />
          </div>
        </div>

        {/* Film Strip Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <CardContent className="p-6 bg-gradient-to-b from-black/60 to-black/80">
        <h3 className="font-bold text-white text-xl mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(movie.release_date).getFullYear()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{movie.vote_count.toLocaleString()}</span>
          </div>
        </div>

        <p className="text-sm text-gray-300 line-clamp-3 mb-6 leading-relaxed">{movie.overview}</p>

        <Button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-black font-bold h-12 relative overflow-hidden">
          <Play className="w-5 h-5 mr-2" />
          {texts.watchNow}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
        </Button>
      </CardContent>
    </CinemaCard>
  )
}

// Main Cinema App
const CinemaApp = ({
  user,
  onLogout,
  onLanguageChange,
}: {
  user: AppUser
  onLogout: () => void
  onLanguageChange: (langCode: string) => void
}) => {
  // API Configuration
  const API_CONFIG = {
    TMDB: {
      API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY || "4e44d9029b1270a757cddc766a1bcb63",
      BASE_URL: "https://api.themoviedb.org/3",
      IMAGE_BASE_URL: "https://image.tmdb.org/t/p/",
    },
    YOUTUBE: {
      API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "",
      BASE_URL: "https://www.googleapis.com/youtube/v3",
    },
  }

  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([])

  const texts = languages.find((lang) => lang.code === user.language)?.texts || englishTexts

  const API_KEY = API_CONFIG.TMDB.API_KEY
  const BASE_URL = API_CONFIG.TMDB.BASE_URL

  const searchMovies = async (query?: string) => {
    const searchTerm = query || searchQuery
    if (!searchTerm.trim()) {
      setError(texts.enterMovieTitle)
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}&page=1&language=${user.language === "en" ? "en-US" : user.language === "ta" ? "ta-IN" : user.language === "te" ? "te-IN" : "hi-IN"}`,
      )

      if (!response.ok) throw new Error("Search failed")

      const data = await response.json()
      setMovies(data.results.slice(0, 12))
    } catch (err) {
      setError(texts.searchFailed)
    } finally {
      setLoading(false)
    }
  }

  const fetchFeaturedMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1&language=${user.language === "en" ? "en-US" : user.language === "ta" ? "ta-IN" : user.language === "te" ? "te-IN" : "hi-IN"}`,
      )
      if (!response.ok) throw new Error("Failed to fetch")

      const data = await response.json()
      setFeaturedMovies(data.results.slice(0, 8))
    } catch (err) {
      console.error("Error fetching featured movies:", err)
    }
  }

  useEffect(() => {
    fetchFeaturedMovies()
  }, [user.language])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchMovies()
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Premium Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in-cinema">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center relative overflow-hidden">
              <Film className="w-8 h-8 text-black" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent tracking-wider">
                {texts.appName}
              </h1>
              <p className="text-gray-300 text-lg">{texts.welcomeBackUser.replace("{name}", user.name)}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector currentLanguage={user.language} onLanguageChange={onLanguageChange} />
            <Button
              onClick={onLogout}
              variant="outline"
              className="bg-black/40 text-white border-gray-600 hover:bg-black/60 hover:border-yellow-400 px-6 py-3"
            >
              <LogOut className="w-5 h-5 mr-2" />
              {texts.exitCinema}
            </Button>
          </div>
        </div>

        {/* Premium Search */}
        <CinemaCard className="mb-12 animate-slide-in-cinema">
          <CardContent className="p-8">
            <form onSubmit={handleSearch} className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <Input
                  type="text"
                  placeholder={texts.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 bg-black/20 border-gray-600 text-white placeholder:text-gray-400 focus:bg-black/30 focus:border-yellow-400 h-16 text-lg"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-black font-bold px-8 h-16 relative overflow-hidden"
              >
                {loading ? <RefreshCw className="w-6 h-6 animate-spin" /> : <Search className="w-6 h-6" />}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
              </Button>
            </form>

            {/* Genre Quick Search */}
            <div className="flex flex-wrap gap-3">
              {Object.entries(texts.genres).map(([key, value]) => (
                <Button
                  key={key}
                  onClick={() => {
                    setSearchQuery(value)
                    searchMovies(value)
                  }}
                  variant="outline"
                  size="sm"
                  className="bg-black/20 text-gray-300 border-gray-600 hover:bg-yellow-400/20 hover:text-yellow-400 hover:border-yellow-400"
                >
                  {value}
                </Button>
              ))}
            </div>

            {error && (
              <div className="mt-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-200 text-center animate-shake">
                {error}
              </div>
            )}
          </CardContent>
        </CinemaCard>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-16">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin mx-auto mb-6" />
              <p className="text-gray-300 text-xl">{texts.searchingArchives}</p>
            </div>
          </div>
        )}

        {/* Search Results */}
        {movies.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Zap className="w-8 h-8 mr-3 text-yellow-400" />
              {texts.searchResults} ({movies.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {movies.map((movie, index) => (
                <div key={movie.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <PremiumMovieCard movie={movie} texts={texts} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Movies */}
        {featuredMovies.length > 0 && (
          <div className="animate-fade-in-cinema">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 mr-3 text-yellow-400" />
              {texts.featuredInCinema}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredMovies.map((movie, index) => (
                <div key={movie.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <PremiumMovieCard movie={movie} texts={texts} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cinema Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 animate-fade-in-cinema">
          <CinemaCard>
            <CardContent className="p-8 text-center">
              <Film className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
              <h3 className="text-3xl font-bold text-white mb-3">50,000+</h3>
              <p className="text-gray-400 text-lg">{texts.premiumMovies}</p>
            </CardContent>
          </CinemaCard>

          <CinemaCard>
            <CardContent className="p-8 text-center">
              <Volume2 className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
              <h3 className="text-3xl font-bold text-white mb-3">4K HDR</h3>
              <p className="text-gray-400 text-lg">{texts.cinemaQuality}</p>
            </CardContent>
          </CinemaCard>

          <CinemaCard>
            <CardContent className="p-8 text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-pulse" />
              <h3 className="text-3xl font-bold text-white mb-3">24/7</h3>
              <p className="text-gray-400 text-lg">{texts.alwaysOpen}</p>
            </CardContent>
          </CinemaCard>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 animate-fade-in-cinema">
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg">
            {texts.poweredBy} <Heart className="inline w-5 h-5 text-red-500 animate-pulse" /> TMDB API
          </p>
        </div>
      </div>
    </div>
  )
}

// Main App
export default function App() {
  const [user, setUser] = useState<AppUser | null>(null)
  const [currentLanguage, setCurrentLanguage] = useState("en")

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode)
    if (user) {
      setUser({ ...user, language: langCode })
    }
  }

  return (
    <div className="min-h-screen relative">
      <CinematicBackground />
      {!user ? (
        <CinemaLogin onLogin={setUser} currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
      ) : (
        <CinemaApp user={user} onLogout={() => setUser(null)} onLanguageChange={handleLanguageChange} />
      )}
    </div>
  )
}
