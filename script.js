var greeting = "Whats your age again?";
var greeting2 = "Do you have your license?";

var age = prompt(greeting);
var license = prompt(greeting2);

if ( age >= 25) 
{
    if (license == "yes") 
    {
        alert("You qualify for insurance and it will be cheaper than if you were younger");
    } else {
        alert("You can't get insurance wo a license");
    }
} else if (age >= 18) {
    if (license == "yes") 
    {
        alert("You qualify for insurance but it'll cost ya");
    } else {
        alert("You can't get insurance wo a license");
    }
}