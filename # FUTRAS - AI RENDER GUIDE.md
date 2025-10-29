# fastras - AI RENDER GUIDE

## 🔥 Project Overview
**fastras** is a modern fitness and nutrition learning platform.
Goal: help people improve their health through guided online courses, personalized programs, and coaching.

The visual style should follow the **existing fastras homepage** at  
👉 https://codewithsadee.github.io/fastras/

### 🧩 Design System (inherit from existing site)
- **Color palette**: primary orange (#ff8c00), secondary black (#121212), white background, gray text.
- **Typography**: bold, geometric sans (Montserrat-like).
- **Layout style**: clean sections, large hero banners, rounded cards, generous padding.
- **Imagery**: fitness, nutrition, wellness lifestyle.
- **Tone**: empowering, healthy, friendly.
- **Button style**: large rounded CTA buttons with hover states.
- **Iconography**: thin outline icons, lucide-style.

---

## 🗂️ Pages to Render
Below are all missing pages that AI should render, following fastras business & UX structure.

---

### 1. **All Courses Page**
**Route:** `/courses`

**Goal:** Let users explore all available courses (fitness, nutrition, lifestyle).

**Layout:**
- Hero banner: “Start your journey to a healthier life”
- Filters: Category (Fitness, Nutrition, Women, Men, Kids), Difficulty, Price.
- Grid of course cards (3–4 per row)
  - Thumbnail image
  - Course title
  - Instructor name
  - Duration / Rating / Price
  - “View Details” button
- Pagination or "Load More" button.
- Section: “Why learn with fastras?” (3 benefits cards)
- Footer CTA: “Join 10,000+ learners today!”

---

### 2. **Course Detail Page**
**Route:** `/courses/[slug]`

**Goal:** Provide full info about a single course and encourage purchase.

**Layout:**
- Hero: course banner + title + instructor + price + “Enroll Now” button.
- Section: Course Description (text, bullet points)
- Section: What you’ll learn (list of 4–6 points)
- Section: Course Content (accordion list of lessons)
- Section: Instructor Bio (photo + short description)
- Section: Student Reviews (stars + user comments)
- Sidebar (on desktop):
  - Price
  - Duration
  - Level
  - CTA “Enroll Now”
- Footer CTA: “Start your transformation today!”

---

### 3. **Blog List Page**
**Route:** `/blog`

**Goal:** Educate users and improve SEO via articles.

**Layout:**
- Hero: “Health, Nutrition & Fitness Insights”
- Search bar or filter by topic
- Blog cards grid (image, title, short excerpt, date)
- Sidebar (optional): categories list, “Popular Posts”.
- Newsletter CTA: “Subscribe to get weekly health tips”.

---

### 4. **Blog Detail Page**
**Route:** `/blog/[slug]`

**Goal:** Display one article with clean typography and related content.

**Layout:**
- Title + feature image + author + date
- Rich text content (paragraphs, headings, images, quotes)
- CTA banner at end: “Want to learn more? Explore our courses!”
- Related posts (3 cards)
- Comment section (optional mock)
- Footer

---

### 5. **About Page**
**Route:** `/about`

**Goal:** Introduce fastras brand, mission, and team.

**Layout:**
- Hero: “Empowering healthier lives through learning”
- Section: Our Mission (2-column text + image)
- Section: Our Story (timeline layout)
- Section: Meet the Team (grid of instructors or founders)
- Section: Why Choose fastras (icons + short texts)
- CTA banner: “Join our community today!”

---

### 6. **Contact Page**
**Route:** `/contact`

**Goal:** Allow users to reach fastras support.

**Layout:**
- Hero: “We’d love to hear from you”
- Contact form:
  - Name
  - Email
  - Message
  - “Send Message” button
- Contact info card:
  - Email, phone, location
- Embedded Google Map (placeholder)
- CTA: “Prefer to chat? Join our Telegram group!”

---

### 7. **User Dashboard**
**Route:** `/dashboard`

**Goal:** Hub for logged-in users to access purchased courses.

**Layout:**
- Sidebar:
  - My Courses
  - Profile
  - Settings
  - Logout
- Main content:
  - Welcome message (“Hi, Steven!”)
  - Course progress cards (thumbnail, progress bar, “Continue” button)
  - Stats summary: hours learned, courses completed.
- CTA: “Discover more courses”.

---

### 8. **Course Player Page**
**Route:** `/dashboard/courses/[id]`

**Goal:** Let user watch lessons and track progress.

**Layout:**
- Video player at top
- Lesson list sidebar (highlight current lesson)
- Below video:
  - Lesson description
  - “Mark as Completed” button
  - Discussion/comments mock section
- Progress indicator at top or sidebar.

---

### 9. **Pricing / Membership Page**
**Route:** `/pricing`

**Goal:** Present subscription and bundle plans.

**Layout:**
- Hero: “Choose your plan”
- 3 pricing cards:
  - Basic — $0 / limited
  - Pro — $49 /mo
  - Lifetime — $199 one-time
- Feature comparison table
- CTA: “Start Free Trial”.

---

## 10. Authentication Flow

### `/login`
**Goal:** Let existing users sign in.  
**Layout:** Split screen (left image, right form)

**Fields:**  
- Email  
- Password  
- Remember Me  
- Button: “Login”  
- Link: “Forgot Password?”  
- Divider: “Or continue with”  
- Social login buttons  
- Link: “Don’t have an account? Register”

---

### `/register`
**Goal:** Create a new user.  
**Fields:**  
- Full name  
- Email  
- Password  
- Confirm password  
- Button: “Create Account”  
- Divider + social signup  
- Terms acknowledgment  
- Link: “Already have an account? Login”

---

### `/forgot-password`
**Goal:** Reset password via email.  
**Layout:** Centered card.  
**Fields:**  
- Email  
- Button: “Send Reset Link”  
**UX:**  
Show success message and link back to login.

---

### `/reset-password/[token]`
**Goal:** Let user set a new password.  
**Fields:**  
- New password  
- Confirm password  
- Button: “Set New Password”  
**UX:**  
Show validation feedback and success message.

---

### `/logout`
**Goal:** Confirm before logging out.  
**Layout:**  
- Modal or centered confirmation page  
- Text: “Are you sure you want to log out?”  
- Buttons: Cancel / Logout  

---

### 11. **404 Page**
**Route:** `/404`

**Goal:** Friendly error page that retains user interest.

**Layout:**
- Illustration (person lost in gym)
- Text: “Oops! Page not found.”
- Button: “Go Home”.

---

### 12. **Terms & Privacy Pages**
**Routes:** `/terms`, `/privacy`

**Goal:** Basic legal info for credibility.

**Layout:**
- Simple headings + paragraphs
- Footer links only

---

## 🎨 UX Philosophy Summary
- Always 1 strong CTA per page (Enroll, Subscribe, Contact).
- Keep above-the-fold sections visually inspiring.
- Use short, scannable text blocks.
- Mobile-first layout, strong padding between sections.
- Highlight transformation: before/after mindset, “Start your change today”.

---

## 🧠 AI PROMPT EXAMPLE
> “Render a responsive Next.js page for the fastras project following this markdown structure.  
> Use a clean modern fitness theme (orange + black), hero banners, rounded course cards, and large typography.  
> Follow UX flow and CTA positions exactly as described below.”

---

## ✅ Output Expectation
- 1 UI per page (total ~12 screens)
- Consistent style with fastras homepage.
- Maintain spacing, CTA hierarchy, and typography system.
- Components reusable for Next.js + TypeScript.

---

## 📍 Author’s Intent
This document is prepared for **AI-assisted UI rendering**.  
The result should let a developer (using Next.js + SCSS + TS) easily build out each page component directly from AI-generated layout.

---