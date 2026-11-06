# Ashwani Decodes — Editorial Landing Page & Content Hub

A modern, high-converting, editorial landing page and content hub for **"Ashwani Decodes"**—a creator platform focused on human psychology, behavioral science, habit loops, and everyday mental reframing (inspired by YouTube: [@ashwani-decodes](http://youtube.com/@ashwani-decodes) and Instagram: [@ashwani_decodes](https://instagram.com/ashwani_decodes)).

---

## 🌿 Visual Aesthetic & Design Philosophy

- **Aesthetic Direction:** Warm, mindful, editorial, and calm—blending the quiet elegance of *Kinfolk magazine* with modern neurobehavioral science.
- **Backgrounds:** Warm oat, sand, and beige (`#FAF8F5`, `#F7F4EE`, `#F5F1EB`) with delicate hairline borders (`#E6E0D6`).
- **Primary Accents:** Earthy sage, deep olive greens, and dark moss (`#3A5A40`, `#588157`, `#283618`).
- **Warm Highlights:** Muted terracotta and caramel (`#C57B57`, `#DDA15E`).
- **Typography:**
  - **Headings & Quotations:** *Fraunces* & *Cormorant Garamond* (warm, humanist optical serifs with graceful italics).
  - **Body & Interface:** *Plus Jakarta Sans* (clean, legible geometric sans-serif).
- **Tactile Paper Grain:** Ambient SVG noise filter providing subtle physical depth without performance overhead.

---

## 🏛️ Website Structure & Core Sections

### 1. Navigation & Brand Wordmark
- **Monogram & Wordmark:** Bespoke geometric mindfulness symbol + "Ashwani Decodes" with the subtitle *"Everyday Psychology"*.
- **Desktop Navigation:** Fast links to Topics, Featured Decodes, 60s Reframer, About Ashwani, and Sunday Digest.
- **Interactive Pocket Library Drawer Button:** Displays live bookmark count of saved reframes and decodes.
- **Direct Creator CTAs:** "Watch on YouTube" (linking to `http://youtube.com/@ashwani-decodes`) and Instagram badge (`@ashwani_decodes`).
- **Responsive Mobile Drawer:** Smooth slide-out menu for mobile viewports.

### 2. Hero Section: The Cognitive Gateway
- **Tagline Badge:** `BEHAVIORAL SCIENCE & EVERYDAY PSYCHOLOGY` with subtle pulsing sage beacon.
- **Headline:** *"Decoding the hidden psychology behind everyday life."*
- **Subhead:** *"Why do we check phones without notifications? Why do we spiral into comparison or overthink at 2 AM? Actionable breakdowns to help you understand your brain instead of fighting it."*
- **Dual CTAs:**
  - `Explore Breakdowns` (smooth anchor scroll down to curated cards)
  - `Watch Latest Shorts` (direct YouTube channel link with play icon)
- **Interactive "Mind Architecture" Hero Card:**
  - Live interactive tabs to simulate **Dopamine Loops**, **Social Comparison**, and **Default Mode Network (DMN)**.
  - Displays real-time metrics (`+180% Anticipation Spike`, `5,000x Peer Exposure`, `70% Silent Rumination`).
  - Outlines the exact trigger and counter-script for each system.

### 3. Content Pillars & Live Search
- **Category Filter Pills:**
  - All Topics (6)
  - Overthinking & Night Anxiety (1)
  - Digital Habits & Dopamine (1)
  - Social Comparison & Self-Worth (2)
  - Modern Relationship Psychology (1)
  - Mindset & Hindi Decodes (1)
- **Real-Time Live Search:** Instant client-side search across titles, summaries, tags, and cognitive mechanisms.

### 4. Featured Decodes Grid (Video & Essay Cards)
1. **"Why Do We Compare Our Life With Others?"**
   - *Tag:* Social Comparison
   - *Summary:* How social media distorts reality and tricks us into comparing our behind-the-scenes with everyone else's highlight reel.
2. **"Why Do We Check Our Phone Without Notifications?"**
   - *Tag:* Dopamine Loops
   - *Summary:* Understanding the variable reward schedule driving subconscious screen-checking.
3. **"Why Do We Overthink at Night?"**
   - *Tag:* Cognitive Quieting
   - *Summary:* Why the Default Mode Network lights up when external distractions fade, and how to wind down.
4. **"Why Does Ignoring Someone Make Them Want You More?"**
   - *Tag:* Attachment & Reactance
   - *Summary:* Psychological reactance and the brain's sudden resistance to abrupt shifts in attention.
5. **"ज्यादा सोचना बंद कैसे करें? (Breaking Mental Spirals)"**
   - *Tag:* Mindset & Hindi Decodes
   - *Summary:* Thought defusion techniques to step out of repetitive cognitive loops.
6. **"The Spotlight Effect: Why Nobody Cares As Much As You Think"**
   - *Tag:* Social Comparison & Self-Worth
   - *Summary:* Egocentric anchoring and the liberating reality of human inattention.
- **Interactive Deep-Dive Modal:**
  - Drop-cap editorial typography.
  - Evolutionary Origin & Ancestral Biology.
  - Modern Cognitive Distortion.
  - 3-Step Actionable Mental Model / Protocol.
  - Direct links to YouTube Short and Instagram Reel.

### 5. Interactive Feature: "The 60-Second Daily Reframer"
- **Interactive Trigger Selector:**
  1. *"Someone left me on read / suddenly got distant."*
  2. *"Feeling like everyone my age is ahead of me."*
  3. *"Trapped in an infinite 15-minute scrolling loop."*
  4. *"Paralyzed by perfectionism before starting a project."*
  5. *"Can't sleep because of a random awkward moment from years ago."*
- **Dynamic 3-Part Output:**
  - **1. Cognitive Mechanism:** What your evolutionary brain is doing under the hood.
  - **2. Healthy Reframe:** An objective, compassionate mental shift.
  - **3. Micro-Action (60 Seconds):** A tangible somatic or environmental step right now.
- **Action Suite:**
  - `Copy Reframe` (copies formatted summary to clipboard with toast notification).
  - `Save to Pocket Reframes` (persists to browser `localStorage` for offline review).
  - `Custom Trigger Input` (type any unique situation to generate a structured cognitive defusion reframe).

### 6. Creator Statement / About Ashwani
- Warm linen portrait container with soft studio lighting.
- Handcrafted quotation:
  > *"We often treat our daily habits and emotional triggers as personal flaws. In reality, they are predictable cognitive scripts. When you decode the pattern, the struggle fades."*
- Three foundational pillars: **No Jargon**, **Empathy First**, **Micro-Action**.
- Official channel badges for YouTube (@ashwani-decodes) and Instagram (@ashwani_decodes).

### 7. Weekly Newsletter: "Sunday Decodes"
- **Headline:** *"Sunday Decodes: One everyday psychological script broken down in 2 minutes."*
- Clean single-field subscription form with instant feedback toast.
- **Interactive Sample Issue Preview Modal:** Full access to read *"Sunday Decode #42: The 20-Minute Dopamine Reset"*.

### 8. My Pocket Library Drawer
- Slide-over drawer reviewing all saved reframes and bookmarked decodes stored in `localStorage`.

---

## 🚀 Running the Project Locally

No build step or heavy dependencies required! Open `index.html` directly in any web browser or run:

### Option 1: Python Built-in Server
```bash
python3 -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Node.js Serve
```bash
npx serve -l 3000 .
```

---

## 📁 File Structure

```
Ashwani_Decodes/
├── index.html          # Semantic HTML5 page with Tailwind CDN & Lucide icons
├── css/
│   └── styles.css      # Editorial styling, paper grain texture, and custom animations
├── js/
│   └── app.js          # Interactive reframer engine, decodes dataset, modals & storage
├── package.json        # NPM scripts for serving locally
└── README.md           # Documentation and design system overview
```
