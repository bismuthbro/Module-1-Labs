var Sentiment = require('sentiment')

function analyseSentence(sentence)
{
var sentiment = new Sentiment();
var result = sentiment.analyze(sentence);
return result;    // Score: -2, Comparative: -0.666
}

console.log(analyseSentence('Trees are extreme'))