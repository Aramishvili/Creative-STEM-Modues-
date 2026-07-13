const steps = document.querySelectorAll('.step');
const progressBar = document.getElementById('progress-bar');
const nextBtn = document.getElementById('nextBtn');
let currentStep = 0;

nextBtn.addEventListener('click', () => {
  steps[currentStep].classList.remove('active');
  currentStep++;
  if (currentStep < steps.length) {
    steps[currentStep].classList.add('active');
    progressBar.style.width = (currentStep / (steps.length - 1)) * 100 + '%';
  }
  if (currentStep === steps.length - 1) {
    nextBtn.style.display = 'none'; // hide button at the end
  }
});

// ===== LANGUAGE SWITCHER (Tutorial) =====
const translations = {
  en: {
    home: '🏠 Home',
    tutorial: 'Tutorial',
    headerTitle: 'Arduino Fun Kits for Kids',
    headerSubtitle: 'Learn electronics through play and creativity!',
    tutorialsTitle: 'Tutorials',
    tutorialsSubtitle: 'Follow the steps below to build your project:',
    step1: 'Step 1: Connect Arduino to your breadboard.',
    step2: 'Step 2: Insert the microphone module into the breadboard.',
    step3: 'Step 3: Connect jumper wires from the module to Arduino pins.',
    step4: 'Step 4: Add LEDs and resistors to the breadboard.',
    step5: 'Step 5: Upload the sample code in Arduino IDE.',
    stepDone: '🎉 Done! Your LEDs now blink with sound.',
    goToHomepage: '🏠 Go to Homepage',
    nextStep: 'Next Step ➡️',
    soundTutorialTitle: '🎤 Sound & Light Tutorial',
    soundTutorialSubtitle: 'Learn to make LEDs blink with sound using a microphone module!',
    sStep1: 'Step 1: Connect Arduino to your breadboard.',
    sStep2: 'Step 2: Insert the microphone module into the breadboard.',
    sStep3: 'Step 3: Connect jumper wires from the module to Arduino pins.',
    sStep4: 'Step 4: Add LEDs and resistors to the breadboard.',
    sStep5: 'Step 5: Upload the sample code in Arduino IDE.',
    sStepDone: '🎉 Done! Your LEDs now blink with sound.',
    motionTutorialTitle: '👀 Motion Detector Tutorial',
    motionTutorialSubtitle: 'Build a smart motion detector that lights up when movement is detected!',
    mStep1Title: 'Step 1: Setup Your Workspace',
    mStep1Desc: 'Place your Arduino Uno and breadboard on a flat surface. Make sure you have all components ready.',
    mStep2Title: 'Step 2: Insert PIR Motion Sensor',
    mStep2Desc: 'Carefully insert the PIR motion sensor module into the breadboard. The sensor has three pins: VCC, GND, and OUT.',
    mStep3Title: 'Step 3: Connect Power Wires',
    mStep3Desc: 'Connect the VCC pin to Arduino 5V and GND pin to Arduino GND using jumper wires.',
    mStep4Title: 'Step 4: Connect Signal Wire',
    mStep4Desc: 'Connect the OUT pin of the PIR sensor to digital pin 2 on the Arduino using a jumper wire.',
    mStep5Title: 'Step 5: Add LED Circuit',
    mStep5Desc: 'Connect an LED and resistor to digital pin 13. Remember: LED long leg (anode) to resistor, short leg (cathode) to ground.',
    mStep6Title: 'Step 6: Upload the Code',
    mStep6Desc: 'Open Arduino IDE, copy the motion detection code, and upload it to your Arduino board.',
    mStep7Title: 'Step 7: Test Your Motion Detector',
    mStep7Desc: 'Power up your Arduino and wait 10-60 seconds for the PIR sensor to calibrate. Then wave your hand in front of it!',
    mStepDoneTitle: '🎉 Congratulations!',
    mStepDoneDesc: 'Your motion detector is working! The LED should light up whenever movement is detected. Try different distances and movements.',
  },
  ka: {
    home: '🏠 მთავარი',
    tutorial: 'ტუტორიალი',
    headerTitle: 'Arduino სახალისო ნაკრებები ბავშვებისთვის',
    headerSubtitle: 'ისწავლე ელექტრონიკა თამაშით და კრეატიულობის ელემენტები!',
    tutorialsTitle: 'ტუტორიალები',
    tutorialsSubtitle: 'მიჰყევით ქვემოთ მოცემულ ნაბიჯებს თქვენი პროექტის ასაწყობად:',
    step1: 'ნაბიჯი 1: დააკავშირეთ Arduino თქვენს დაფასთან.',
    step2: 'ნაბიჯი 2: ჩაამაგრეთ მიკროფონის მოდული დაფაზე.',
    step3: 'ნაბიჯი 3: შეაერთეთ ჯამპერ მავთულები მოდულიდან Arduino-ს პინებთან.',
    step4: 'ნაბიჯი 4: დაამატეთ LED ნათურები და რეზისტორები დაფაზე.',
    step5: 'ნაბიჯი 5: ატვირთეთ კოდის ნიმუში Arduino IDE-ში.',
    stepDone: '🎉 მზადაა! თქვენი LED ნათურები ახლა ხმაზე ციმციმებენ.',
    goToHomepage: '🏠 მთავარ გვერდზე დაბრუნება',
    nextStep: 'შემდეგი ნაბიჯი ➡️',
    soundTutorialTitle: '🎤 ხმის და სინათლის მოდულების ნაკრების ტუტორიალი',
    soundTutorialSubtitle: 'ისწავლეთ როგორ აანთოთ LED ნათურები ხმაზე - მიკროფონის მოდულის გამოყენებით!',
    sStep1: 'ნაბიჯი 1: დააკავშირეთ Arduino თქვენს დაფასთან.',
    sStep2: 'ნაბიჯი 2: ჩაამაგრეთ მიკროფონის მოდული დაფაზე.',
    sStep3: 'ნაბიჯი 3: შეაერთეთ ჯამპერ მავთულები მოდულიდან Arduino-ს პინებთან.',
    sStep4: 'ნაბიჯი 4: დაამატეთ LED ნათურები და რეზისტორები დაფაზე.',
    sStep5: 'ნაბიჯი 5: ატვირთეთ კოდის ნიმუში Arduino IDE-ში.',
    sStepDone: '🎉 მზადაა! თქვენი LED ნათურები ახლა ხმაზე ციმციმებენ.',
    motionTutorialTitle: '👀 მოძრაობის დეტექტორის ნაკრების ტუტორიალი',
    motionTutorialSubtitle: 'ააწყეთ ჭკვიანი მოძრაობის დეტექტორი, რომელიც ნათურას აანთებს მოძრაობის აღმოჩენისას!',
    mStep1Title: 'ნაბიჯი 1: მოამზადეთ სამუშაო სივრცე',
    mStep1Desc: 'მოათავსეთ Arduino Uno და დაფა ბრტყელ ზედაპირზე. დარწმუნდით, რომ ყველა კომპონენტი მზად გაქვთ.',
    mStep2Title: 'ნაბიჯი 2: ჩაამაგრეთ PIR მოძრაობის სენსორი',
    mStep2Desc: 'ფრთხილად ჩაამაგრეთ PIR მოძრაობის სენსორის მოდული დაფაზე. სენსორს აქვს სამი პინი: VCC, GND და OUT.',
    mStep3Title: 'ნაბიჯი 3: შეაერთეთ კვების მავთულები',
    mStep3Desc: 'შეაერთეთ სენსორის VCC პინი Arduino 5V პინთან და GND პინი Arduino GND პინთან ჯამპერ მავთულების გამოყენებით.',
    mStep4Title: 'ნაბიჯი 4: შეაერთეთ სიგნალის (OUT) მავთული',
    mStep4Desc: 'შეაერთეთ PIR სენსორის OUT პინი Arduino-ს ციფრულ პინ 2-თან ჯამპერ მავთულის გამოყენებით.',
    mStep5Title: 'ნაბიჯი 5: დაამატეთ LED წრედი',
    mStep5Desc: 'შეაერთეთ LED და რეზისტორი Arduino-ს ციფრულ პინ 13-თან. დაიმახსოვრეთ: LED ნათურის გრძელი ფეხი (ანოდი) რეზისტორთან, მოკლე ფეხი (კათოდი) დამიწებასთან (ანუ GND).',
    mStep6Title: 'ნაბიჯი 6: ატვირთეთ კოდი',
    mStep6Desc: 'გახსენით Arduino IDE, დააკოპირეთ მოძრაობის დეტექტორის კოდი და ჩასვით Arduino IDE-s პროგრამის ფაილში და ატვირთეთ არდუინოზე.',
    mStep7Title: 'ნაბიჯი 7: ტესტირება',
    mStep7Desc: 'ჩართეთ Arduino და დაელოდეთ 10-60 წამი PIR სენსორის კალიბრაციას. შემდეგ ხელი აამოძრავეთ სენსორის წინ!',
    mStepDoneTitle: '🎉 გილოცავთ!',
    mStepDoneDesc: 'თქვენი მოძრაობის დეტექტორი მუშაობს! LED ნათურა ახლა უნდა ანათებდეს ყოველთვის, როცა მოძრაობას დააფიქსირებს. შეამოწმეთ სხვადასხვა მანძილი და მოძრაობა.',
  },
};

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update toggle button state
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.setAttribute('data-lang', lang);
    toggle.textContent = lang === 'en' ? 'ქა' : 'EN';
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