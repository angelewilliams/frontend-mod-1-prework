/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  /*
  incrementNumberOfLikes(){
    this.numberOfLikes = (this.numberOfLikes + 1)
  }*/
  incrementNumberOfLikes(addLike, removeLike){
   if (addLike === true && removeLike === false) {this.numberOfLikes = this.numberOfLikes +1
   }
   else if (addLike ===true && removeLike === true) {this.numberOfLikes = this.numberOfLikes
   }
   else if  (addLike ===false && removeLike === true) {this.numberOfLikes = this.numberOfLikes -1}

   else [this.numberOfLikes = this.numberOfLikes]
  }

  addComments(newComment) {
    this.comments.push(newComment);
  }
};

var tweet1 = new Tweet ("Kermit the Frog", "It's not easy being green", "June 8th, 1970 2:00 PM", 400000, ["I agree! -Oscar the Grouch", "I love being Purple!-Patrick Star"]);
var tweet2 = new Tweet ("Fred Rogers", "It's a beautiful day in the neighborhood", "February 19, 1968 3:00 PM", 500000, ["It sure is!", "Hello Neighbor"]);
var tweet3 = new Tweet ("Spongebob Squarepants", "I live in the pinapple under the sea.", "May 1, 1999 5:00 PM", 450000, ["Wake me up when I care -Squidward"]);

console.log(tweet1);
console.log(tweet2);
console.log(tweet3);

tweet2.incrementNumberOfLikes(true, false);
console.log(tweet2);

tweet3.addComments("Arrr ya ready? -Pirate Guy");
console.log(tweet3);
