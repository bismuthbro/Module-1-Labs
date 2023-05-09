var Sentiment = require('sentiment');
function sentenceSentiment()
{
var sentiment = new Sentiment();
var result = sentiment.analyze('Cats are stupid.');
console.dir(result);
}
 // Score: -2, Comparative: -0.666
console.log(sentenceSentiment())