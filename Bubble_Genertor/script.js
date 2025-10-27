// Bubble generator

document.addEventListener('click',(event) => {
   const circle = document.createElement('div')
   circle.className = 'circle'
   circle.textContent = "Hi"
   document.body.appendChild(circle);

    //set bg color
   const color = ["#FF5733","#33FF57","#3357FF","#FF33A6","#FFD133","#33FFF5","#8E44AD","#FF6F61","#16A085","#2ECC71","#E67E22","#3498DB","#9B59B6","#E74C3C","#1ABC9C","#F1C40F","#7F8C8D","#D35400","#C0392B","linear-gradient(to right, #ff512f, #dd2476)"];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)]

    //set message
    const messages = ["Hi", "Hello", "Hey", "Welcome", "Yo", "Hola", "Hi there", "Greetings", "What's up", "Howdy", "Namaste", "Heya", "Bonjour", "Ciao", "Sup", "Good day", "Salutations", "Ahoy", "Hiya", "Wassup"];
    circle.textContent = messages[Math.floor(Math.random()*messages.length)];

    //set position
    const x = event.clientX;
    const y = event.clientY;
    circle.style.left = `${x-25}px` //25 to center circle
    circle.style.top =  `${y-25}px`

   //remove after 5s
   setTimeout(() => {
    circle.remove
   },5000);

})