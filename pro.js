const quotes = [
  // 🌱 Motivation & Growth
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "Don’t limit your challenges. Challenge your limits.",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "Growth begins at the end of your comfort zone.",
  "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
  "Dream big. Start small. Act now. — Robin Sharma",
  "Small steps every day lead to big results.",

  // 💡 Wisdom & Reflection
  "Knowing yourself is the beginning of all wisdom. — Aristotle",
  "In the middle of difficulty lies opportunity. — Albert Einstein",
  "What we think, we become. — Buddha",
  "The quieter you become, the more you can hear. — Ram Dass",
  "Don’t raise your voice, improve your argument. — Desmond Tutu",
  "Sometimes you win, sometimes you learn. — John Maxwell",
  "He who has a why to live can bear almost any how. — Nietzsche",
  "Knowledge speaks, but wisdom listens. — Jimi Hendrix",
  "Life is 10% what happens to you and 90% how you react to it. — Charles Swindoll",
  "Be curious, not judgmental. — Walt Whitman",

  // 💪 Success & Work
  "Opportunities don’t happen, you create them. — Chris Grosser",
  "Don’t be busy, be productive.",
  "Success is the sum of small efforts repeated day in and day out. — Robert Collier",
  "If opportunity doesn’t knock, build a door. — Milton Berle",
  "Work hard in silence, let success make the noise.",
  "Your future is created by what you do today, not tomorrow.",
  "Great things never come from comfort zones.",
  "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
  "Do something today that your future self will thank you for.",
  "Winners are not those who never fail, but those who never quit.",

  // 💖 Life & Positivity
  "Happiness is not by chance, but by choice. — Jim Rohn",
  "Make today so awesome that yesterday gets jealous.",
  "The best way to predict the future is to create it. — Peter Drucker",
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "Kindness is free. Sprinkle it everywhere.",
  "Every day may not be good, but there’s something good in every day.",
  "Smile — it’s the simplest thing that can change everything.",
  "Peace begins with a smile. — Mother Teresa",
  "Life is short. Make it sweet.",
  "Wherever life plants you, bloom with grace.",

  // 🌟 Courage & Resilience
  "Courage doesn’t always roar. Sometimes it’s the quiet voice saying, ‘I will try again tomorrow.’ — Mary Anne Radmacher",
  "You were given this life because you are strong enough to live it.",
  "Fall seven times, stand up eight. — Japanese Proverb",
  "Storms make trees take deeper roots. — Dolly Parton",
  "Tough times never last, but tough people do. — Robert H. Schuller",
  "Sometimes you have to get knocked down lower than you’ve ever been to stand up taller than you ever were.",
  "Even the darkest night will end and the sun will rise. — Victor Hugo",
  "Be brave enough to be bad at something new.",
  "Scars remind us of where we’ve been, not where we’re going.",
  "The comeback is always stronger than the setback."
];

function quote_generator() {
    const text  = document.getElementById("quote")
    let index = Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[index]
}
setInterval(quote_generator,3000)