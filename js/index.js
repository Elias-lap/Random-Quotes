
var Quotes = [
  { qoute: " ” So many books, so little time.. ”",
   author: "--Frank Zappa" },
  { qoute: "  ” A room without books is like a body without a soul.. ”",
   author: '--Marcus Tullius Cicero'},
  { qoute: " ” Be who you are and say what you feel, because those who mind dont matter, and those who matter don't mind' ”",
   author: '--Bernard M. Baruch'},
  { qoute: ` “I've learned that people will forget what you said, people will forget what you did, but people
       will never forget how you made them feel.” `,
       author:`'--Maya Angelou'`},
  { qoute: ` للأَفعالُ أَبلَغُ مِن الأَقوَال.
  
  “Promises should be backed by actions.”`},
  { qoute: `لإسكافي حافي و الحايِك عِريَان.
  
  “The shoemaker is barefoot and the weaver is naked.”`},
  {qoute:`عُصفورٌ في اليَد خَيرٌ مِن عَشَرَة عَلى الشَجَرَة.,
  “A bird in your hand is better than ten on the tree.”



  `},
  {qoute:`تَجري الرِياحُ بِما لا تَشتَهي السُفُن.
  
  “Winds blow counter to what ships want.”`},
  {qoute:`وَمَن يَتَهَيَّب صُعودَ الجِبال يَعِش أَبَدَ الدَهرِ بَيْنَ الحُفَرِ.
  
  “He who is scared of climbing mountains lives among hills forever.”
  
  `}




];
function dispalyQuotes (){

    var num = Math.floor(Math.random() * Quotes.length)
    document.getElementById('dissplay-quote').innerHTML=Quotes[num].qoute
    document.getElementById('Aouthor').innerHTML=Quotes[num].author
}
// QuotesIndex= 0 ;
// function dispalyQuotes(){
//     QuotesIndex= (QuotesIndex + 1) % Quotes.length;