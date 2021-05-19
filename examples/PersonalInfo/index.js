

const Run = () => {
   let firstname = prompt("Enter your First Name");
   let lastname = prompt("Enter your Last Name");
   let age = Number( prompt("Enter your Age") );
   let gender = prompt("Enter '0' for Female & '1' for Male ") == "1" ? "male" : "female";
   let favouriteFruits = [];

   let confirmationText = "Do you like fruits ?";
   let confirmationTextUpdated = false;

   while( confirm( confirmationText ) ) {
        var favouriteFruit = prompt("Which Fruit do you like ?");
        favouriteFruits.push( favouriteFruit );

        if( ! confirmationTextUpdated ) {
            confirmationText = "Do you like more fruits ?";
            confirmationTextUpdated = true;
        }
   }

   let personalInfo = {
       firstname,
       lastname,
       age,
       gender,
       favouriteFruits
   }

   alert( JSON.stringify( personalInfo ) );
}

Run();