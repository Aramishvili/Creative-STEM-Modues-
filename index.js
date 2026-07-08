// Enhanced smooth scrolling with offset
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Adjusted for taller fixed header (approx 80px) + breathing room
        const offsetTop = targetElement.offsetTop - 100;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
});

// Parallax/Rotation effect for hero image
window.addEventListener('scroll', () => {
  const img = document.getElementById('arduino');
  if (!img) return; // Guard clause

  const scrollY = window.scrollY;
  // Slower, smoother rotation (divide by 10)
  img.style.transform = `rotate(${scrollY / 6}deg)`;
});

// ===== LANGUAGE SWITCHER =====
const translations = {
  en: {
    logo: 'STEM Kits 🚀',
    kits: 'Kits',
    parents: 'Parents',
    downloads: 'Downloads',
    order: 'Order Now',
    heroTitle: 'Spark Creativity with Electronics!',
    heroSubtitle: 'Fun, safe, and educational Arduino kits for future inventors. No coding required to start!',
    heroBtn: 'Explore Kits',
    kitsTitle: 'Our Kits for Kids',
    kitsSubtitle: 'Everything needed to build, learn, and play.',
    bestseller: 'Bestseller',
    soundKitTitle: '🎤 Sound & Light Kit',
    soundKitDesc: 'Explore sound-activated electronics! Clap, speak, and watch your circuits come to life.',
    whatsInside: "What's Inside:",
    soundKitItem1: '🔌 Arduino Uno',
    soundKitItem2: '🎤 Microphone',
    soundKitItem3: '💡 LEDs & Resistors',
    soundKitItem4: '🔋 Power Pack',
    motionKitItem1: '🔌 Arduino Uno',
    motionKitItem2: '🟩 Breadboard',
    motionKitItem3: '🟨 PIR Sensor',
    motionKitItem4: '💡 LEDs & Resistors',
    optionSoundKit: 'Sound Kit',
    optionMotionKit: 'Motion Detector Kit',
    viewTutorial: 'View Tutorial',
    buyNow: 'Buy Now',
    newBadge: 'New',
    motionKitTitle: '👀 Motion Detector Kit',
    motionKitDesc: 'Build a smart security system! Detect movement and trigger alarms or lights.',
    parentsTitle: "Parents' Corner",
    parentsSubtitle: "Why STEM education matters for your child's future.",
    logicalThinking: 'Logical Thinking',
    logicalThinkingDesc: 'Coding and circuits help develop structured problem-solving skills.',
    collaboration: 'Collaboration',
    collaborationDesc: 'Our projects are great for teamwork and parent-child bonding time.',
    futureSkills: 'Future Skills',
    futureSkillsDesc: 'Prepare them for a tech-driven world with hands-on experience.',
    madeWithLove: 'Made with Love',
    madeWithLoveDesc: 'Proudly designed and assembled in Georgia. Safe & Beginner friendly.',
    downloadsTitle: 'Downloads for Parents',
    downloadsSubtitle: 'Get the software and resources you need to help them succeed.',
    arduinoIde: 'Arduino IDE',
    sampleCode: 'Sample Code',
    orderTitle: 'Order Your Kit',
    fullName: 'Full Name',
    fullNamePlaceholder: 'John Doe',
    emailAddress: 'Email Address',
    emailAddressPlaceholder: 'john@example.com',
    phoneNumber: 'Phone Number',
    phoneNumberPlaceholder: '+995 500 ...',
    deliveryAddress: 'Delivery Address',
    deliveryAddressPlaceholder: 'City, Street, Apt...',
    selectKit: 'Select Kit',
    quantity: 'Quantity',
    placeOrder: 'Place Order',
    paymentInfo: 'Payment Info',
    bankOfGeorgia: 'Bank of Georgia',
    recipient: 'Recipient: STEM Kits for Kids',
    cashOnDelivery: '🚚 Cash on Delivery available!',
    footerText: '© {year} STEM Kits for Kids — Made with ❤️ in Georgia',
  },
  ka: {
    logo: 'STEM ნაკრებები 🚀',
    kits: 'ნაკრებები',
    parents: 'მშობლების კუთხე',
    downloads: 'ჩამოტვირთვები',
    order: 'შეკვეთა',
    heroTitle: 'გამოაღვიძეთ თქვენი კრეატიულობა ელექტრონიკით!',
    heroSubtitle: 'სახალისო, უსაფრთხო და საგანმანათლებლო ხასიათის Arduino ნაკრებები მომავალი გამომგონებლებისთვის. პროექტების დასაწყებად პროგრამირება არ არის საჭირო!',
    heroBtn: 'ნაკრებების ნახვა',
    kitsTitle: 'ნაკრებები ბავშვებისთვის',
    kitsSubtitle: 'ყველაფერი რაც საჭიროა ნაკრების ასაწყობად, სასწავლად და სათამაშოდ.',
    bestseller: 'ბესტსელერი',
    soundKitTitle: '🎤 ხმის და სინათლის სენსორების ნაკრები',
    soundKitDesc: 'აღმოაჩინე ხმით გააქტიურებადი ელექტრონიკა! დაუკარი ტაში, ილაპარაკე და ნახე როგორ ცოცხლდებიან შენი სქემები.',
    whatsInside: 'რა არის შიგნით:',
    soundKitItem1: '🔌 Arduino Uno',
    soundKitItem2: '🎤 მიკროფონი',
    soundKitItem3: '💡 LED-ები და რეზისტორები',
    soundKitItem4: '🔋 კვების ბლოკი',
    motionKitItem1: '🔌 Arduino Uno',
    motionKitItem2: '🟩 ბრედბორდი',
    motionKitItem3: '🟨 PIR სენსორი',
    motionKitItem4: '💡 LED-ები და რეზისტორები',
    optionSoundKit: 'ხმის სენსორის ნაკრები',
    optionMotionKit: 'მოძრაობის დეტექტორის ნაკრები',
    viewTutorial: 'ტუტორიალის ნახვა',
    buyNow: 'ყიდვა',
    newBadge: 'ახალი',
    motionKitTitle: '👀 მოძრაობის დეტექტორის ნაკრები',
    motionKitDesc: 'ააწყე ჭკვიანი უსაფრთხოების სისტემა! აღმოაჩინე მოძრაობა და ჩართე განგაში ან განათება.',
    parentsTitle: 'მშობლების კუთხე',
    parentsSubtitle: 'რატომ არის მნიშვნელოვანი STEM განათლება თქვენი ბავშვის მომავლისთვის.',
    logicalThinking: 'ლოგიკური აზროვნება',
    logicalThinkingDesc: 'პროგრამირება და ელექტრონულ სქემებთან მუშაობა ხელს უწყობს მრავალწახნაგოვანი პრობლემების გადაჭრის უნარების განვითარებას.',
    collaboration: 'თანამშრომლობა',
    collaborationDesc: 'ჩვენი პროექტები შესანიშნავია გუნდური მუშაობისთვის და მშობლებს აძლევს შესაძლებლობას შვილებთან ერთად დროის გასატარებლად.',
    futureSkills: 'მომავალზე ორიენტირებული უნარები',
    futureSkillsDesc: 'აღჭურვეთ ბავშვები ტექნოლოგიური სამყაროსთვის საჭირო პრაქტიკული გამოცდილებით.',
    madeWithLove: 'სიყვარულით შექმნილი',
    madeWithLoveDesc: 'ვამაყობთ, რომ შექმნილი და აწყობილია საქართველოში. მოწყობილობები უსაფრთხოა და დამწყებთათვის ადვილად გამოსაყენებელი.',
    downloadsTitle: 'მშობლებო ჩამოტვირთეთ საჭირო რესურსები',
    downloadsSubtitle: 'ჩამოტვირთეთ პროგრამები და რესურსები, რომლებიც დაგეხმარებათ წარმატების მიღწევაში.',
    arduinoIde: 'Arduino IDE',
    sampleCode: 'კოდის ნიმუში',
    orderTitle: 'შეუკვეთე ნაკრები',
    fullName: 'სრული სახელი',
    fullNamePlaceholder: 'სახელი გვარი',
    emailAddress: 'ელ. ფოსტა',
    emailAddressPlaceholder: 'john@example.com',
    phoneNumber: 'ტელეფონის ნომერი',
    phoneNumberPlaceholder: '+995 555 ...',
    deliveryAddress: 'მისამართი',
    deliveryAddressPlaceholder: 'ქალაქი, ქუჩა, ბინა...',
    selectKit: 'აირჩიე ნაკრები',
    quantity: 'რაოდენობა',
    placeOrder: 'შეკვეთის დადასტურება',
    paymentInfo: 'გადახდისთვის საჭირო ინფორმაცია',
    bankOfGeorgia: 'საქართველოს ბანკი',
    recipient: 'მიმღები: STEM ნაკრებები ბავშვებისთვის',
    cashOnDelivery: '🚚 გადახდა განხორციელდება მიწოდების დროს!',
    footerText: '© {year} STEM ნაკრებები ბავშვებისთვის — შექმნილია ❤️-ით საქართველოში',
  },
};

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  const currentYear = new Date().getFullYear();

  // Translate all elements with data-i18n attribute (textContent)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      let text = t[key];
      // Replace {year} placeholder with the actual current year
      text = text.replace(/\{year\}/g, currentYear);
      el.textContent = text;
    }
  });

  // Translate placeholder attributes using data-i18n-placeholder key
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update toggle button state
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.setAttribute('data-lang', lang);
    if (lang === 'en') {
      toggle.innerHTML = '<span class="active-lang">EN</span> | ქა';
    } else {
      toggle.innerHTML = 'EN | <span class="active-lang">ქა</span>';
    }
  }

  // Save preference
  localStorage.setItem('preferred-lang', lang);
}

function toggleLanguage() {
  const toggle = document.getElementById('langToggle');
  if (!toggle) return;
  const currentLang = toggle.getAttribute('data-lang') || 'en';
  const newLang = currentLang === 'en' ? 'ka' : 'en';
  applyLanguage(newLang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  const savedLang = localStorage.getItem('preferred-lang') || 'en';
  applyLanguage(savedLang);

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', toggleLanguage);
  }
});