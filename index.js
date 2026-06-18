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
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    deliveryAddress: 'Delivery Address',
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
    emailAddress: 'ელ. ფოსტა',
    phoneNumber: 'ტელეფონის ნომერი',
    deliveryAddress: 'მისამართი',
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

  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      let text = t[key];
      // Replace {year} placeholder with the actual current year
      text = text.replace(/\{year\}/g, currentYear);
      el.textContent = text;
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