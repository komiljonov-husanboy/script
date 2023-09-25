alert('ASSALOMU ALEYKUM   Saytga Xush Kelibsiz !')
alert('shaxsiy malumotlaringizni kiriting!')
var srt = prompt("Ism familiyangiz ?")
var age = prompt("Yoshingiz ?")
var num = prompt("Telefon raqamingiz?")
var lac = prompt("Yashash joyingiz?")
var email = prompt("Email pochtangiz?")
alert('sizning Malumotlaringizni biz saqlamaymiz va tarqatmaymiz bu saytni samarali ishlashiga yordam beradi !')
alert('Rahmat 🙂🙂🙂')
console.log('%cIsm familiyangiz:', 'color: grey; font-weight: bold;font-size:15px;', srt);
console.log('%cYoshingiz:', 'color: grey; font-weight: bold;font-size:15px;', age);
console.log('%cTelefon raqamingiz:', 'color: grey; font-weight: bold;font-size:15px;', num);
console.log('%cYashash joyingiz:', 'color: grey; font-weight: bold;font-size:15px;', lac);
console.log('%cEmail pochta manzilingiz:', 'color: grey; font-weight: bold;font-size:15px;', email);

console.log('%csizning Malumotlaringizni biz saqlamaymiz va tarqatmaymiz Bu saytni samarali ishlashiga yordam beradi !','color:red; font-weight: bold;font-size:15px;')
console.log('%cRahmat 🙂🙂🙂','color:blue; font-weight: bold;font-size:15px;')



    
      

        var htmlqismi = `
            <h2>Ism familiyangiz:</h2>
            <p style="color:white; font-size:25px;">${srt}</p>
            <h2>Yoshingiz:</h2>
            <p style="color:white; font-size:25px;">${age}</p>
            <h2>Telefon raqamingiz:</h2>
            <p style="color:white; font-size:25px;">${num}</p>
            <h2>Yashash joyingiz:</h2>
            <p style="color:white; font-size:25px;">${lac}</p>
            <h2>Email pochta manzilingiz:</h2>
            <p style="color:white; font-size:25px;">${email}</p>
        `;

        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = htmlqismi;
        // outputDiv.classList.add("info");

     
    
