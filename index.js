function scuberGreetingForFeet(feetLimit){
 if (feetLimit <= 400){ 
 return  "This one is on me!" 
 } else if (feetLimit >=400 && feetLimit <=2000)
{ return "That will be twenty bucks."}
 else if (feetLimit >2000, feetLimit <2500)
 { return "I will gladly take your thirty bucks." }
  else if (feetLimit >2500)
  {return "No can do."}
}

function ternaryCheckCity(destination){
  return destination === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(response){
  switch(response){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default:
      return 'Bye.'
}
}