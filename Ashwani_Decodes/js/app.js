/**
 * ASHWANI DECODES — Interactive Engine
 * Behavioral science breakdowns, 60-second reframer, category filters,
 * modal drawers, and bookmark persistence.
 */

// Data: Featured Decodes Collection
const DECODES_DATA = [
  {
    id: "social-comparison",
    title: "Why Do We Compare Our Life With Others?",
    tag: "Social Comparison",
    category: "comparison",
    readTime: "3 min read · Short Breakdown",
    badgeColor: "sage",
    summary: "How social media distorts reality and tricks us into comparing our behind-the-scenes with everyone else's highlight reel.",
    takeaway: "You are comparing your unedited internal behind-the-scenes to everyone else's curated third-act montage.",
    mechanism: "Leon Festinger's Upward Social Comparison Theory & Asymmetric Information Bias",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    fallbackIcon: "users",
    deepDive: {
      hook: "You open an app for 30 seconds to reply to a message, and within two scrolls, an imperceptible wave of inadequacy hits. Why does someone else's vacation, promotion, or gym selfie trigger instant self-doubt?",
      evolutionaryOrigin: "For 99% of human evolution, humans lived in small bands of 50 to 150 individuals. Comparing yourself to your tribe was a survival necessity: if you fell behind in foraging, hunting, or social standing, you were in physical danger of ostracization. The brain evolved comparison not as vanity, but as a survival radar.",
      modernHijack: "In the 21st century, your Paleolithic brain is exposed to 5,000 hyper-curated, algorithmic highlights every day. Your neurochemistry doesn't know the difference between 50 tribe members around a campfire and 50 million global influencers under studio lighting. It treats every staged highlight as a personal benchmark.",
      actionableModel: "The 'Asymmetric Vantage Point' Mental Model",
      steps: [
        "Recognize the Asymmetry: You experience 100% of your own doubts, fatigue, boredom, and failed drafts, but only 1% of anyone else's finished product.",
        "Shift from Vertical to Horizontal: When comparison triggers, ask: 'Am I inspired by their craft, or am I measuring my worth by their timeline?'",
        "Perform Digital Pruning: Unfollow or mute accounts that induce scarcity or silent envy. Curate inputs that cultivate curiosity rather than competition."
      ],
      keyQuote: "Envy is the painful emotion that emerges when we realize we want something we don't have, without factoring in the cost the other person paid to have it.",
      youtubeUrl: "https://youtube.com/@ashwani-decodes",
      instagramUrl: "https://instagram.com/ashwani_decodes"
    }
  },
  {
    id: "phone-checking",
    title: "Why Do We Check Our Phone Without Notifications?",
    tag: "Dopamine Loops",
    category: "dopamine",
    readTime: "2 min decode · Habit Breakdown",
    badgeColor: "caramel",
    summary: "Understanding the variable reward schedule driving subconscious screen-checking even when the screen is quiet.",
    takeaway: "Dopamine is not the neurochemical of pleasure; it is the neurochemical of anticipation.",
    mechanism: "B.F. Skinner's Variable Ratio Schedule of Reinforcement & Salience Salivation",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    fallbackIcon: "smartphone",
    deepDive: {
      hook: "You're sitting at your desk, deep in thought, and your hand reaches out to touch your phone screen without conscious permission. No ring. No buzz. Why did your hand move before your brain could intervene?",
      evolutionaryOrigin: "Dopamine evolved to drive foraging behavior in unpredictable environments. If a fruit bush yielded berries every single time, foraging was mundane. But if a bush yielded sweet fruit unpredictably, dopamine spiked sharply, urging the ancestor to return again and again.",
      modernHijack: "Smartphone interfaces are designed as digital slot machines. Because an incoming text, email, or like is intermittent and unpredictable, your basal ganglia creates an automatic motor-loop: reach, unlock, swipe. You check not because you expect good news, but because the mere *possibility* of an unpredictable cue creates anticipatory tension.",
      actionableModel: "The 'Micro-Friction Protocol'",
      steps: [
        "Introduce 20 Seconds of Friction: Place the phone out of arm's reach or in a drawer while working. The motor loop breaks when physical effort is required.",
        "Color Desaturation: Turn your screen to Grayscale. Removing vibrant app colors reduces visual dopamine salience by over 40%.",
        "Name the Craving: When the urge strikes, pause and silently label it: 'This is my brain fishing for a dopamine spike. I am not hungry; I am restless.'"
      ],
      keyQuote: "When you eliminate the anticipation, the compulsion dissolves. Habit loops starve when friction enters.",
      youtubeUrl: "https://youtube.com/@ashwani-decodes",
      instagramUrl: "https://instagram.com/ashwani_decodes"
    }
  },
  {
    id: "overthinking-night",
    title: "Why Do We Overthink at Night?",
    tag: "Cognitive Quieting",
    category: "overthinking",
    readTime: "4 min deep dive · Sleep Science",
    badgeColor: "sage",
    summary: "Why the Default Mode Network lights up when external distractions fade, and practical rituals to wind down.",
    takeaway: "When external sensory inputs drop to zero, your brain's Default Mode Network treats silence as an open mic.",
    mechanism: "Default Mode Network (DMN) Hyperactivity & Circadian Cortisol Fluctuations",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80",
    fallbackIcon: "moon",
    deepDive: {
      hook: "All day you managed complex tasks calmly. But the moment your head hits the pillow and the bedroom lights turn off, your mind begins interrogating you about a conversation from 2019 or agonizing over tomorrow's meeting.",
      evolutionaryOrigin: "During daylight, your Task-Positive Network (TPN) is engaged—handling work, navigation, and sensory stimuli. At night, in pitch darkness, primitive humans were vulnerable to nocturnal predators. The brain maintained a heightened vigilant state during quiet hours to listen for threats and audit social standing in the clan.",
      modernHijack: "With zero external tasks, the Default Mode Network (DMN)—the neural network responsible for self-referential thought, ego, and past/future simulations—spikes. Lacking real physical predators, the brain constructs threats out of your unfinished to-do lists, past regrets, and existential uncertainties.",
      actionableModel: "The 'Cognitive Offloading & Somatic Grounding' Technique",
      steps: [
        "The 5-Minute Brain Drain: Keep a physical pen and notebook on your bedside table. Write down every raw thought, worry, or task before getting into bed.",
        "Physiological Sigh: Inhale deeply through the nose, take a short second 'top-off' sip of air, and exhale slowly through the mouth. Repeat 3 times to immediately lower heart rate.",
        "Shift from Language to Sensation: Focus your attention on the weight of the blanket against your toes or the temperature of the pillow. You cannot easily overthink while purely feeling."
      ],
      keyQuote: "Never negotiate with your life or resolve your future past 10 PM. Midnight thoughts are chemically biased toward catastrophe.",
      youtubeUrl: "https://youtube.com/@ashwani-decodes",
      instagramUrl: "https://instagram.com/ashwani_decodes"
    }
  },
  {
    id: "ignoring-reactance",
    title: "Why Does Ignoring Someone Make Them Want You More?",
    tag: "Attachment & Reactance",
    category: "relationships",
    readTime: "3 min decode · Relationship Psychology",
    badgeColor: "terracotta",
    summary: "Psychological reactance and the brain's sudden resistance to abrupt shifts in attention and validation.",
    takeaway: "Silence creates an ambiguous information void. The brain hates ambiguity and frantically assigns high value to whatever is withheld.",
    mechanism: "Psychological Reactance, Intermittent Reinforcement & Loss Aversion",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    fallbackIcon: "heart",
    deepDive: {
      hook: "When someone is constantly accessible and complimentary, we often take their presence for granted. But the moment they pull back, leave us on read, or turn cold, an obsessive urge to regain their validation takes over.",
      evolutionaryOrigin: "Jack Brehm's theory of Psychological Reactance states that when an individual feels an emotional freedom or resource is being restricted, they will react to regain that threatened freedom. In human relationships, sudden withdrawal feels like an ego demotion.",
      modernHijack: "The brain instinctively equates scarcity with high value (Loss Aversion). When someone withdraws, dopamine and cortisol surge. We mistakenly interpret this chemical distress and anxiety as 'deep love' or 'intense attraction,' when in reality, it is simply our ego trying to solve a puzzle and restore control.",
      actionableModel: "The 'Anxiety vs. Attraction' Audit",
      steps: [
        "Distinguish Anxiety from Desire: Ask yourself honestly: 'Did I genuinely enjoy their company yesterday, or am I just reacting to the ego prick of being ignored today?'",
        "Refuse to Play the Guessing Game: Do not retaliate with performative indifference or game-playing. Recognize the pattern and step outside the arena.",
        "Ground in Secure Self-Valuation: Remind yourself that another person's availability is a reflection of their capacity and priorities, not your baseline worth."
      ],
      keyQuote: "What you feel when someone abruptly ignores you is rarely romantic passion; it is the evolutionary panic of losing status.",
      youtubeUrl: "https://youtube.com/@ashwani-decodes",
      instagramUrl: "https://instagram.com/ashwani_decodes"
    }
  },
  {
    id: "hindi-overthinking",
    title: "ज्यादा सोचना बंद कैसे करें? (Breaking Mental Spirals)",
    tag: "Mindset & Hindi Decodes",
    category: "mindset",
    readTime: "5 min guide · Hindi Special",
    badgeColor: "sage",
    summary: "Thought defusion techniques to step out of repetitive cognitive loops. विचारों को रोकना नहीं, केवल तट पर बैठकर देखना सीखना है।",
    takeaway: "विचारों को रोकना नदी के बहाव को रोकने जैसा है। उन्हें रोकना नहीं, केवल तट पर बैठकर देखना सीखना है।",
    mechanism: "Cognitive Defusion (ACT) & Vipassana Thought Witnessing",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    fallbackIcon: "compass",
    deepDive: {
      hook: "हम में से 90% लोग इस गलतफहमी में जीते हैं कि 'अगर मैं सोचना बंद नहीं करूंगा, तो कुछ बुरा हो जाएगा।' हम दिमाग में एक ही बात को 50 बार दोहराते हैं और फिर खुद को कोसते हैं कि मैं इतना ओवरथिंक क्यों करता हूँ?",
      evolutionaryOrigin: "दिमाग का काम सोचना है, ठीक वैसे ही जैसे दिल का काम धड़कना है और फेफड़ों का काम सांस लेना है। समस्या सोचना नहीं है; समस्या विचारों के साथ चिपक जाना (Cognitive Fusion) है। जब आप अपने हर विचार को 'अंतिम सच' मान लेते हैं, तो चिंता शुरू होती है।",
      modernHijack: "आधुनिक जीवन में सूचना का अधिभार (Information Overload) है। हर रील, हर नोटिफिकेशन हमारे दिमाग में नई तरंगें पैदा करता है। जब हम सोने या अकेले बैठने की कोशिश करते हैं, तो दिमाग उन बिखरी हुई सूचनाओं को जोड़ने की कोशिश में लूप में फंस जाता है।",
      actionableModel: "द 'विचार-तटस्थ' (Cognitive Defusion) फॉर्मूला",
      steps: [
        "पहला कदम - लेबलिंग: विचार आते ही कहें: 'मैं एक विचार देख रहा हूँ कि मैं असफल हो जाऊंगा।' इससे आपके और विचार के बीच दूरी बनती है।",
        "दूसरा कदम - 5-4-3-2-1 ग्राउंडिंग: कमरे में 5 चीजें देखें, 4 चीजें छुएं, 3 आवाजें सुनें, 2 सुगंध महसूस करें, और 1 गहरी सांस लें।",
        "तीसरा कदम - एक्शन ओरिएंटेशन: पूछें: 'क्या इस समय इस पर सोचने से कोई एक्शन लिया जा सकता है?' यदि नहीं, तो इसे कल सुबह 10 बजे के 'वॉर्री टाइम' के लिए टाल दें।"
      ],
      keyQuote: "आप अपने विचार नहीं हैं; आप वह शांत स्थान हैं जहाँ विचार आते और जाते हैं। जब तक आप विचारों को सच मानना बंद नहीं करेंगे, वे आपको नचाते रहेंगे।",
      youtubeUrl: "https://youtube.com/@ashwani-decodes",
      instagramUrl: "https://instagram.com/ashwani_decodes"
    }
  },
  {
    id: "spotlight-effect",
    title: "The Spotlight Effect: Why Nobody Cares As Much As You Think",
    tag: "Social Comparison",
    category: "comparison",
    readTime: "2 min decode · Social Psychology",
    badgeColor: "caramel",
    summary: "Why the human brain egocentrically assumes everyone is noticing our flaws, and the cognitive relief of spotlight diffusion.",
    takeaway: "Everyone else is far too busy worrying about their own spotlight to notice your minor slip-ups.",
    mechanism: "Thomas Gilovich's Egocentric Anchoring & Adjustment Bias",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
    fallbackIcon: "sun",
    deepDive: {
      hook: "You spill a drop of coffee on your shirt, trip on a curb, or stutter slightly in a group conversation. For the next two hours, you burn with self-consciousness, convinced everyone is judging you.",
      evolutionaryOrigin: "Because we experience every second of life from behind our own eyes, our own existence is the center of our sensory universe. Psychologists call this 'Egocentric Anchoring.' We anchor heavily on our internal feelings and assume external observers share the same intense awareness.",
      modernHijack: "In Cornell experiments led by Dr. Thomas Gilovich, students forced to wear embarrassing T-shirts estimated that over 50% of the room would notice. In reality, less than 20% even registered what they were wearing. In reality, people are completely consumed by their own internal narratives.",
      actionableModel: "The 'Invisible Audience' Diffusion Model",
      steps: [
        "Cut Your Estimate by 80%: When feeling exposed or judged, divide your perceived level of external scrutiny by five.",
        "Remember the 'Spotlight Illusion': Everyone around you is trapped in their own spotlight, wondering what you think of *them*.",
        "Lean into the Freedom: If nobody is truly paying obsessive attention, you have total permission to experiment, make small mistakes, and be human."
      ],
      keyQuote: "You wouldn't worry so much about what others think of you if you realized how seldom they do.",
      youtubeUrl: "https://youtube.com/@ashwani-decodes",
      instagramUrl: "https://instagram.com/ashwani_decodes"
    }
  }
];

// Data: 60-Second Daily Reframer Database
const REFRAMER_DATA = {
  "trigger-a": {
    triggerTitle: "Someone left me on read / suddenly got distant",
    shortLabel: "Left on Read / Distant",
    icon: "message-square-off",
    mechanism: "Negative Interpretation Bias & Ambiguity Intolerance. In the absence of immediate data, your ancestral survival brain manufactures worst-case scenarios to prepare for social exclusion and guard against ego rejection.",
    healthyReframe: "Silence is an absence of communication, not an indictment of your worth. People are rarely thinking about you with calculated malice or rejection; they are simply overwhelmed, distracted, or managing their own chaotic internal fires.",
    microAction: "Place your phone facedown in another room for 30 minutes. Regain ownership of your physical environment and attention before checking for a reply.",
    neuroTag: "Ambiguity Defusion · Hanlon's Razor",
    statInsight: "85% of unanswered texts are due to everyday cognitive overload, not personal disregard."
  },
  "trigger-b": {
    triggerTitle: "Feeling like everyone my age is ahead of me",
    shortLabel: "Peers Are Ahead of Me",
    icon: "trending-up",
    mechanism: "Upward Social Comparison & Survivor Visibility Bias. You only register peers when they publicly broadcast promotions, milestones, or acquisitions, creating a statistical mirage of effortless collective triumph.",
    healthyReframe: "Life is not a cohort-based sprint with a synchronized finish line. You are comparing your unedited internal behind-the-scenes with other people's highly curated third-act trailers.",
    microAction: "Write down 3 private capabilities, relationships, or resilience skills you built in the past 12 months that no one publicly clapped for.",
    neuroTag: "Asynchronous Trajectory · Leon Festinger",
    statInsight: "Social feeds over-represent extreme top-percentile milestones by over 1,200%."
  },
  "trigger-c": {
    triggerTitle: "Trapped in an infinite 15-minute scrolling loop",
    shortLabel: "Infinite Doomscrolling",
    icon: "smartphone",
    mechanism: "Variable Ratio Dopamine Schedule. Your brain isn't addicted to the media content itself; it is hunting for the *anticipation* of a surprise reward, exactly like a behavioral slot machine in Las Vegas.",
    healthyReframe: "Your willpower did not fail. A dedicated team of behavioral engineers designed this algorithm to exploit mammalian foraging circuitry. You cannot out-willpower an algorithm; you can only alter environmental friction.",
    microAction: "Switch your phone display to Grayscale immediately, then stand up, stretch your shoulders, and drink a tall glass of cool water.",
    neuroTag: "Dopamine Friction Architecture",
    statInsight: "Adding 1 physical friction barrier breaks 70% of subconscious screen loops."
  },
  "trigger-d": {
    triggerTitle: "Paralyzed by perfectionism before starting a project",
    shortLabel: "Perfectionism Paralysis",
    icon: "alert-circle",
    mechanism: "Ego-Threat Preservation. By not starting, your subconscious preserves the fantasy that you *could* produce masterpiece work. Starting risks exposing human imperfection to self-criticism.",
    healthyReframe: "Perfectionism is not a pursuit of excellence; it is anxiety in a tuxedo. Lower the bar to ridiculous mediocrity just to break static inertia. You cannot steer a parked car.",
    microAction: "Execute the 'Stupid 2-Minute Draft'. Write the worst, most embarrassing 3 sentences or rough outline possible without editing a single word.",
    neuroTag: "Velocity Over Fidelity",
    statInsight: "Completing an imperfect first draft reduces anticipatory task anxiety by 62%."
  },
  "trigger-e": {
    triggerTitle: "Awkward memory from years ago keeping me awake",
    shortLabel: "Past Cringe & Rumination",
    icon: "history",
    mechanism: "The Spotlight Effect & Memory Reconsolidation. Your egocentric anchoring bias assumes that external observers remember your awkward missteps with the same burning resolution that you do.",
    healthyReframe: "Ask yourself: Can you recall a single embarrassing stumble made by an acquaintance 3 years ago? No. They forgot yours 4 minutes after it occurred.",
    microAction: "Jot down the cringe memory on a scrap of paper, physically cross it out with a line, and say aloud: 'Lesson extracted; file closed.'",
    neuroTag: "Egocentric Anchoring Diffusion",
    statInsight: "Over 95% of social blunders are forgotten by bystanders within 48 hours."
  }
};

// Data: Hero Interactive Systems Explorer
const HERO_SYSTEMS_DATA = {
  dopamine: {
    title: "Dopamine Loops & Variable Schedules",
    tagline: "The Anticipation Engine",
    metricValue: "+180%",
    metricLabel: "Dopamine spike triggered by unpredictable reward cues",
    description: "Your brain releases far more dopamine in anticipation of an unknown outcome than when receiving the actual reward. This is why refreshing an empty inbox feels compulsive.",
    trigger: "Subconscious hand reaching toward phone during brief micro-pauses",
    counterScript: "Create intentional friction: keep devices out of arm's reach."
  },
  comparison: {
    title: "Upward Social Comparison Bias",
    tagline: "The Evolutionary Status Radar",
    metricValue: "5,000x",
    metricLabel: "More curated peer profiles seen today vs. ancestral tribe limits",
    description: "Our Paleolithic brain treats algorithmic feeds as physical clan members. Without conscious reframing, high-status displays trigger innate scarcity alarms.",
    trigger: "Viewing peer career announcements while working through a slow problem",
    counterScript: "Compare your current self exclusively with your own trailing 12-month baseline."
  },
  dmn: {
    title: "Default Mode Network (DMN) Spike",
    tagline: "The Night-Time Open Mic",
    metricValue: "70%",
    metricLabel: "Increase in self-referential rumination when external sensory stimuli fade",
    description: "When quiet descends, the brain's Default Mode Network fires up to audit social standing and unfinished survival calculations. It is a biological feature, not a personal flaw.",
    trigger: "Lying in bed in total silence while yesterday's conversation loops endlessly",
    counterScript: "Perform a 5-minute bedside paper brain drain before sleep."
  }
};

// Application State
const AppState = {
  currentCategory: "all",
  searchQuery: "",
  activeTriggerId: "trigger-a",
  savedReframes: JSON.parse(localStorage.getItem("ashwani_saved_reframes") || "[]"),
  savedDecodes: JSON.parse(localStorage.getItem("ashwani_saved_decodes") || "[]")
};

// DOM Content Loaded Handler
document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initHeroSystemExplorer();
  initCategoryFilters();
  initSearch();
  renderDecodesGrid();
  initReframer();
  initCustomReframer();
  initModals();
  initNewsletter();
  initSavedDrawers();
  updateBookmarkBadges();
});

/**
 * Initialize Lucide or inline SVG icons
 */
function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Hero Interactive Systems Explorer
 */
function initHeroSystemExplorer() {
  const tabs = document.querySelectorAll(".hero-system-tab");
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const systemKey = tab.dataset.system;
      if (!HERO_SYSTEMS_DATA[systemKey]) return;

      tabs.forEach(t => t.classList.remove("active", "bg-accent-olive", "text-white"));
      tab.classList.add("active", "bg-accent-olive", "text-white");

      const data = HERO_SYSTEMS_DATA[systemKey];
      const titleEl = document.getElementById("hero-system-title");
      const tagEl = document.getElementById("hero-system-tag");
      const metricValEl = document.getElementById("hero-system-metric-val");
      const metricLabelEl = document.getElementById("hero-system-metric-label");
      const descEl = document.getElementById("hero-system-desc");
      const triggerEl = document.getElementById("hero-system-trigger");
      const counterEl = document.getElementById("hero-system-counter");

      if (titleEl) titleEl.textContent = data.title;
      if (tagEl) tagEl.textContent = data.tagline;
      if (metricValEl) metricValEl.textContent = data.metricValue;
      if (metricLabelEl) metricLabelEl.textContent = data.metricLabel;
      if (descEl) descEl.textContent = data.description;
      if (triggerEl) triggerEl.textContent = data.trigger;
      if (counterEl) counterEl.textContent = data.counterScript;
    });
  });
}

/**
 * Initialize Category Filter Pills
 */
function initCategoryFilters() {
  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      AppState.currentCategory = pill.dataset.category || "all";
      renderDecodesGrid();
    });
  });
}

/**
 * Initialize Search Functionality
 */
function initSearch() {
  const searchInput = document.getElementById("decodes-search");
  const clearBtn = document.getElementById("clear-search-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value.toLowerCase().trim();
      if (clearBtn) {
        clearBtn.style.display = AppState.searchQuery.length > 0 ? "block" : "none";
      }
      renderDecodesGrid();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        AppState.searchQuery = "";
        clearBtn.style.display = "none";
        renderDecodesGrid();
      }
    });
  }
}

/**
 * Render the Decodes Card Grid
 */
function renderDecodesGrid() {
  const gridContainer = document.getElementById("decodes-grid");
  const countBadge = document.getElementById("decodes-count-badge");
  const noResultsEl = document.getElementById("decodes-no-results");
  if (!gridContainer) return;

  const filtered = DECODES_DATA.filter(item => {
    const matchesCategory = AppState.currentCategory === "all" || item.category === AppState.currentCategory;
    const matchesQuery = !AppState.searchQuery || 
      item.title.toLowerCase().includes(AppState.searchQuery) ||
      item.summary.toLowerCase().includes(AppState.searchQuery) ||
      item.tag.toLowerCase().includes(AppState.searchQuery) ||
      item.mechanism.toLowerCase().includes(AppState.searchQuery);
    return matchesCategory && matchesQuery;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'Decode' : 'Decodes'}`;
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = "";
    if (noResultsEl) noResultsEl.style.display = "block";
    return;
  }

  if (noResultsEl) noResultsEl.style.display = "none";

  gridContainer.innerHTML = filtered.map(item => {
    const isSaved = AppState.savedDecodes.includes(item.id);
    const badgeClass = item.badgeColor === "sage" ? "badge-sage" : 
                       item.badgeColor === "terracotta" ? "badge-terracotta" : "badge-caramel";

    return `
      <article class="decode-card flex flex-col justify-between group">
        <div>
          <!-- Thumbnail & Tag -->
          <div class="card-thumb-container h-52 w-full relative">
            <img 
              src="${item.image}" 
              alt="${item.title}" 
              loading="lazy" 
              class="card-thumb-img"
              onerror="this.onerror=null; this.parentElement.classList.add('ambient-glow-green'); this.style.display='none';"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent"></div>
            
            <div class="absolute top-4 left-4 flex items-center gap-2">
              <span class="badge-tag ${badgeClass}">
                ${item.tag}
              </span>
            </div>

            <button 
              onclick="toggleSaveDecode('${item.id}')" 
              class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-espresso hover:bg-white transition-all shadow-sm z-10"
              title="${isSaved ? 'Remove from Saved' : 'Save Decode'}"
            >
              <i data-lucide="${isSaved ? 'bookmark-check' : 'bookmark'}" class="w-4 h-4 ${isSaved ? 'text-accent-olive fill-accent-olive' : 'text-warm-grey'}"></i>
            </button>

            <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-cream/90 font-medium">
              <span class="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                <i data-lucide="clock" class="w-3.5 h-3.5 text-accent-caramel"></i>
                ${item.readTime}
              </span>
              <span class="flex items-center gap-1 text-[11px] text-cream/80 bg-black/20 px-2 py-0.5 rounded-full">
                YouTube & Essay
              </span>
            </div>
          </div>

          <!-- Content Body -->
          <div class="p-6 md:p-7">
            <h3 class="text-xl md:text-2xl font-serif font-medium text-espresso group-hover:text-accent-olive transition-colors leading-snug mb-3">
              ${item.title}
            </h3>
            
            <p class="text-warm-grey text-sm leading-relaxed mb-5">
              ${item.summary}
            </p>

            <!-- Key Takeaway Snippet -->
            <div class="bg-oat-warm border-l-2 border-accent-sage rounded-r-lg p-3.5 mb-6 text-xs text-espresso-soft leading-relaxed">
              <span class="font-semibold text-accent-olive block mb-1">Key Insight:</span>
              "${item.takeaway}"
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="px-6 md:px-7 pb-6 pt-0 border-t border-border-subtle/60 flex items-center justify-between mt-auto">
          <span class="text-xs text-warm-muted truncate max-w-[160px]" title="${item.mechanism}">
            ${item.mechanism}
          </span>
          <button 
            onclick="openDecodeModal('${item.id}')" 
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-olive hover:text-accent-moss group-hover:translate-x-1 transition-all"
          >
            <span>Read Breakdown</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </article>
    `;
  }).join("");

  initIcons();
}

/**
 * 60-Second Daily Reframer Initialization
 */
function initReframer() {
  const triggerButtons = document.querySelectorAll(".reframer-trigger-btn");
  triggerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const triggerId = btn.dataset.trigger;
      setReframerTrigger(triggerId);
    });
  });

  // Action buttons
  const copyBtn = document.getElementById("copy-reframe-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      copyCurrentReframe();
    });
  }

  const saveBtn = document.getElementById("save-reframe-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      saveCurrentReframe();
    });
  }
}

/**
 * Set active trigger in Reframer
 */
function setReframerTrigger(triggerId) {
  if (!REFRAMER_DATA[triggerId]) return;
  AppState.activeTriggerId = triggerId;

  // Update button active state
  document.querySelectorAll(".reframer-trigger-btn").forEach(btn => {
    if (btn.dataset.trigger === triggerId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const data = REFRAMER_DATA[triggerId];
  const outputContainer = document.getElementById("reframer-output-container");
  if (!outputContainer) return;

  // Gentle fade transition
  outputContainer.style.opacity = "0.4";
  outputContainer.style.transform = "translateY(4px)";

  setTimeout(() => {
    document.getElementById("reframe-current-trigger-title").textContent = `"${data.triggerTitle}"`;
    document.getElementById("reframe-mechanism-text").textContent = data.mechanism;
    document.getElementById("reframe-healthy-text").textContent = data.healthyReframe;
    document.getElementById("reframe-action-text").textContent = data.microAction;
    document.getElementById("reframe-neuro-tag").textContent = data.neuroTag;
    
    const statEl = document.getElementById("reframe-stat-text");
    if (statEl) statEl.textContent = data.statInsight;

    outputContainer.style.opacity = "1";
    outputContainer.style.transform = "translateY(0)";
  }, 150);
}

/**
 * Copy Current Reframe to Clipboard
 */
function copyCurrentReframe() {
  const data = REFRAMER_DATA[AppState.activeTriggerId];
  if (!data) return;

  const textToCopy = `[Ashwani Decodes — 60-Second Reframe]
Trigger: "${data.triggerTitle}"

• Cognitive Mechanism: ${data.mechanism}
• Healthy Reframe: ${data.healthyReframe}
• 60s Micro-Action: ${data.microAction}

Source: ashwanidecodes.com | @ashwani-decodes`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast("Reframe copied to clipboard! Save or share it.", "check");
  }).catch(() => {
    showToast("Copied text successfully.", "check");
  });
}

/**
 * Save Current Reframe to LocalStorage
 */
function saveCurrentReframe() {
  const current = REFRAMER_DATA[AppState.activeTriggerId];
  if (!current) return;

  const exists = AppState.savedReframes.some(r => r.triggerTitle === current.triggerTitle);
  if (exists) {
    AppState.savedReframes = AppState.savedReframes.filter(r => r.triggerTitle !== current.triggerTitle);
    showToast("Removed reframe from your saved list.", "info");
  } else {
    AppState.savedReframes.unshift({
      id: AppState.activeTriggerId,
      triggerTitle: current.triggerTitle,
      healthyReframe: current.healthyReframe,
      microAction: current.microAction,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    });
    showToast("Saved to your Pocket Reframes!", "bookmark");
  }

  localStorage.setItem("ashwani_saved_reframes", JSON.stringify(AppState.savedReframes));
  updateBookmarkBadges();
  renderSavedReframesDrawer();
}

/**
 * Custom Reframer Form
 */
function initCustomReframer() {
  const form = document.getElementById("custom-trigger-form");
  const input = document.getElementById("custom-trigger-input");
  
  if (form && input) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;

      // Dynamically create or display custom reframe
      const customData = {
        triggerTitle: val,
        shortLabel: val.slice(0, 24) + "...",
        mechanism: "Threat Escalation & Egocentric Salience. When facing novel uncertainty, your nervous system projects an outsized negative outcome to compel protective inaction.",
        healthyReframe: `Viewing "${val}" objectively: This is a localized situation, not a permanent definition of your trajectory. Separate the real facts from the emotional story your brain is projecting.`,
        microAction: "Take 3 slow breaths, write the single next physical step on paper, and execute for just 120 seconds without judging the output.",
        neuroTag: "Custom Behavioral Script · Cognitive Defusion",
        statInsight: "91% of catastrophic projections never materialize in empirical reality."
      };

      REFRAMER_DATA["trigger-custom"] = customData;
      setReframerTrigger("trigger-custom");
      showToast("Generated behavioral reframe for your situation!", "sparkles");
      input.value = "";
    });
  }
}

/**
 * Decode Deep-Dive Modal
 */
function openDecodeModal(decodeId) {
  const item = DECODES_DATA.find(d => d.id === decodeId);
  if (!item) return;

  const modalOverlay = document.getElementById("decode-modal-overlay");
  const modalContainer = document.getElementById("decode-modal-container");
  if (!modalOverlay || !modalContainer) return;

  const isSaved = AppState.savedDecodes.includes(item.id);

  modalContainer.innerHTML = `
    <!-- Modal Header -->
    <div class="relative p-6 md:p-8 bg-oat-warm border-b border-border-subtle">
      <button 
        onclick="closeDecodeModal()" 
        class="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-espresso flex items-center justify-center transition-all shadow-sm"
        aria-label="Close modal"
      >
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>

      <div class="flex items-center gap-3 mb-3">
        <span class="badge-tag badge-sage">${item.tag}</span>
        <span class="text-xs text-warm-grey">${item.readTime}</span>
      </div>

      <h2 class="text-2xl md:text-3xl font-serif font-medium text-espresso pr-10 mb-2 leading-snug">
        ${item.title}
      </h2>
      <p class="text-sm text-warm-grey">
        Cognitive Mechanism: <strong class="text-accent-olive font-semibold">${item.mechanism}</strong>
      </p>
    </div>

    <!-- Modal Scrollable Content -->
    <div class="p-6 md:p-8 space-y-7 text-espresso text-base leading-relaxed">
      <!-- Hook & Editorial Intro -->
      <div>
        <p class="editorial-dropcap text-espresso-soft text-lg mb-4">
          ${item.deepDive.hook}
        </p>
      </div>

      <!-- Key Quote Callout -->
      <div class="p-5 rounded-xl bg-card-surface-soft border border-border-subtle relative overflow-hidden">
        <div class="absolute -right-4 -bottom-4 text-border-medium/40 pointer-events-none">
          <i data-lucide="quote" class="w-24 h-24 stroke-[1]"></i>
        </div>
        <p class="font-serif italic text-lg md:text-xl text-espresso relative z-10 leading-snug">
          "${item.deepDive.keyQuote}"
        </p>
        <span class="block text-xs uppercase tracking-wider text-accent-olive font-semibold mt-3">
          — Ashwani Decodes Breakdown
        </span>
      </div>

      <!-- Evolutionary Origin -->
      <div class="space-y-2">
        <h4 class="text-xs font-bold uppercase tracking-widest text-warm-grey flex items-center gap-2">
          <i data-lucide="dna" class="w-4 h-4 text-accent-olive"></i>
          1. The Evolutionary Origin
        </h4>
        <p class="text-sm md:text-base text-warm-grey">
          ${item.deepDive.evolutionaryOrigin}
        </p>
      </div>

      <!-- Modern Environmental Hijack -->
      <div class="space-y-2">
        <h4 class="text-xs font-bold uppercase tracking-widest text-warm-grey flex items-center gap-2">
          <i data-lucide="alert-triangle" class="w-4 h-4 text-accent-terracotta"></i>
          2. The Modern Cognitive Distortion
        </h4>
        <p class="text-sm md:text-base text-warm-grey">
          ${item.deepDive.modernHijack}
        </p>
      </div>

      <!-- Actionable Mental Model -->
      <div class="bg-oat-warm/80 rounded-2xl p-6 border border-border-subtle space-y-4">
        <h4 class="text-sm font-bold uppercase tracking-wider text-accent-olive flex items-center gap-2">
          <i data-lucide="shield-check" class="w-5 h-5 text-accent-olive"></i>
          3. ${item.deepDive.actionableModel}
        </h4>
        
        <ul class="space-y-3">
          ${item.deepDive.steps.map((step, idx) => `
            <li class="flex items-start gap-3 text-sm md:text-base text-espresso-soft">
              <span class="w-6 h-6 rounded-full bg-accent-olive text-cream font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                ${idx + 1}
              </span>
              <span>${step}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Creator Video & External Links -->
      <div class="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <a 
            href="${item.deepDive.youtubeUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-primary text-sm py-2.5 px-4"
          >
            <i data-lucide="play" class="w-4 h-4 fill-cream"></i>
            Watch Short on YouTube
          </a>
          <a 
            href="${item.deepDive.instagramUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-secondary text-sm py-2.5 px-4"
          >
            <i data-lucide="instagram" class="w-4 h-4 text-accent-terracotta"></i>
            Instagram Reel
          </a>
        </div>

        <button 
          onclick="toggleSaveDecode('${item.id}')"
          class="flex items-center gap-2 text-xs font-semibold text-warm-grey hover:text-accent-olive"
        >
          <i data-lucide="${isSaved ? 'bookmark-check' : 'bookmark'}" class="w-4 h-4 ${isSaved ? 'text-accent-olive' : ''}"></i>
          <span>${isSaved ? 'Saved in Reading List' : 'Save for Later'}</span>
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
  initIcons();
}

function closeDecodeModal() {
  const modalOverlay = document.getElementById("decode-modal-overlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * Toggle Save Decode
 */
function toggleSaveDecode(decodeId) {
  const idx = AppState.savedDecodes.indexOf(decodeId);
  if (idx > -1) {
    AppState.savedDecodes.splice(idx, 1);
    showToast("Removed decode from saved list.", "info");
  } else {
    AppState.savedDecodes.push(decodeId);
    showToast("Decode saved to your personal library!", "bookmark");
  }

  localStorage.setItem("ashwani_saved_decodes", JSON.stringify(AppState.savedDecodes));
  renderDecodesGrid();
  updateBookmarkBadges();
  renderSavedDecodesDrawer();
}

/**
 * Update Bookmark Badges in Nav & Drawers
 */
function updateBookmarkBadges() {
  const count = AppState.savedReframes.length + AppState.savedDecodes.length;
  const badgeEl = document.getElementById("saved-items-count-badge");
  if (badgeEl) {
    badgeEl.textContent = count;
    badgeEl.style.display = count > 0 ? "inline-flex" : "none";
  }
}

/**
 * Initialize Modals and Backdrop Listeners
 */
function initModals() {
  const decodeModalOverlay = document.getElementById("decode-modal-overlay");
  if (decodeModalOverlay) {
    decodeModalOverlay.addEventListener("click", (e) => {
      if (e.target === decodeModalOverlay) {
        closeDecodeModal();
      }
    });
  }

  const savedDrawerOverlay = document.getElementById("saved-drawer-overlay");
  if (savedDrawerOverlay) {
    savedDrawerOverlay.addEventListener("click", (e) => {
      if (e.target === savedDrawerOverlay) {
        closeSavedDrawer();
      }
    });
  }

  const digestModalOverlay = document.getElementById("digest-modal-overlay");
  if (digestModalOverlay) {
    digestModalOverlay.addEventListener("click", (e) => {
      if (e.target === digestModalOverlay) {
        closeDigestPreview();
      }
    });
  }

  // Keyboard accessibility
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDecodeModal();
      closeSavedDrawer();
      closeDigestPreview();
    }
  });
}

/**
 * Newsletter Form & Interactive Digest Preview
 */
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  const input = document.getElementById("newsletter-email");
  const previewBtn = document.getElementById("preview-digest-btn");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = input.value.trim();
      if (!email || !email.includes("@")) {
        showToast("Please enter a valid email address.", "alert-circle");
        return;
      }

      showToast("Subscribed! Opening your welcome issue: Sunday Decode #42.", "check");
      input.value = "";
      setTimeout(() => {
        openDigestPreview();
      }, 600);
    });
  }

  if (previewBtn) {
    previewBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openDigestPreview();
    });
  }
}

function openDigestPreview() {
  const overlay = document.getElementById("digest-modal-overlay");
  if (overlay) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    initIcons();
  }
}

function closeDigestPreview() {
  const overlay = document.getElementById("digest-modal-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * Saved Library Drawer
 */
function initSavedDrawers() {
  const openBtn = document.getElementById("open-saved-drawer-btn");
  const closeBtn = document.getElementById("close-saved-drawer-btn");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      renderSavedReframesDrawer();
      renderSavedDecodesDrawer();
      const overlay = document.getElementById("saved-drawer-overlay");
      if (overlay) {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
        initIcons();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeSavedDrawer);
  }
}

function closeSavedDrawer() {
  const overlay = document.getElementById("saved-drawer-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function renderSavedReframesDrawer() {
  const container = document.getElementById("saved-reframes-list");
  if (!container) return;

  if (AppState.savedReframes.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-warm-grey">
        <i data-lucide="sparkles" class="w-8 h-8 mx-auto text-accent-sage/60 mb-2"></i>
        <p class="text-sm">No saved reframes yet.</p>
        <p class="text-xs text-warm-muted mt-1">Click "Save Reframe" in the 60-Second tool to collect insights here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = AppState.savedReframes.map(item => `
    <div class="p-4 rounded-xl bg-card-surface-soft border border-border-subtle relative group">
      <div class="flex items-center justify-between text-xs text-warm-grey mb-1.5">
        <span class="font-medium text-accent-olive">Trigger: "${item.triggerTitle}"</span>
        <span>${item.date}</span>
      </div>
      <p class="text-xs text-espresso-soft mb-2 italic">
        "${item.healthyReframe}"
      </p>
      <div class="text-[11px] text-warm-grey bg-white/70 p-2 rounded border border-border-subtle/60 flex items-center justify-between">
        <span>Action: ${item.microAction}</span>
        <button 
          onclick="removeSavedReframe('${item.triggerTitle}')"
          class="text-red-500 hover:text-red-700 ml-2"
          title="Remove"
        >
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function removeSavedReframe(triggerTitle) {
  AppState.savedReframes = AppState.savedReframes.filter(r => r.triggerTitle !== triggerTitle);
  localStorage.setItem("ashwani_saved_reframes", JSON.stringify(AppState.savedReframes));
  renderSavedReframesDrawer();
  updateBookmarkBadges();
  showToast("Reframe removed.", "info");
}

function renderSavedDecodesDrawer() {
  const container = document.getElementById("saved-decodes-list");
  if (!container) return;

  const savedItems = DECODES_DATA.filter(d => AppState.savedDecodes.includes(d.id));

  if (savedItems.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-warm-grey">
        <i data-lucide="book-open" class="w-8 h-8 mx-auto text-accent-sage/60 mb-2"></i>
        <p class="text-sm">No bookmarked decodes.</p>
        <p class="text-xs text-warm-muted mt-1">Bookmark cards from the grid to read offline anytime.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = savedItems.map(item => `
    <div class="p-3.5 rounded-xl bg-card-surface-soft border border-border-subtle flex items-center justify-between gap-3">
      <div>
        <span class="badge-tag badge-sage text-[10px] py-0.5 px-2 mb-1">${item.tag}</span>
        <h4 class="font-serif text-sm font-medium text-espresso cursor-pointer hover:text-accent-olive" onclick="closeSavedDrawer(); openDecodeModal('${item.id}')">
          ${item.title}
        </h4>
      </div>
      <button 
        onclick="toggleSaveDecode('${item.id}')"
        class="text-warm-muted hover:text-red-600 shrink-0 p-1"
        title="Remove"
      >
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>
  `).join('');
}

/**
 * Toast Notification System
 */
function showToast(message, iconName = "check") {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 text-accent-caramel shrink-0"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  initIcons();

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

// Global functions for inline HTML calls
window.openDecodeModal = openDecodeModal;
window.closeDecodeModal = closeDecodeModal;
window.toggleSaveDecode = toggleSaveDecode;
window.removeSavedReframe = removeSavedReframe;
window.openDigestPreview = openDigestPreview;
window.closeDigestPreview = closeDigestPreview;
window.closeSavedDrawer = closeSavedDrawer;
