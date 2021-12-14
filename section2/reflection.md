## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
  When tackling something independently or alone, I often wait too long to ask a question and find myself getting stubbornly stuck in the mud. However, I have noticed that if I am excited and in a group and haven't fully grasped a concept, I'll blurt out a bunch a questions before considering the scope or whether I have the means to answer it myself. I think it may come from the feeling that I should ask while people are around instead of disrupting them later.  

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
    The element of not know if I was on the right track was uncomfortable. I enjoyed comparing resources
    and seeing different ways that different sources presented. For example, on the functions.js exercise, I had a syntax error and was trying to figure out how to apply concatenation for my
    answer and there were keywords like `.concat` being used. It was helpful to practice navigating the
    different formats I thought. Also stepping away for a moment helped me have fresh eyes when I was
    tinkering with my code and ultimately syntax on a few of the exercises.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
  Conditional statements can help determine what happens next, including whether some code is run or not. The flow can be if/then/else - If a condition is met, then something (determined by the code) happens, else your code does something different or skips the other steps had the condition been met.
  A daily life example could be that if I hear a knock on the door, then I will open the door. Else I probably would leave it shut and not even think about the door. A web application that this applies to could be cooking.nytimes.com: if I am logged in, then it shows me my recipe box and suggestions. Else (if I am not logged in), it will show me a pop up window that prompts me to either login or to subscribe.

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
  You can add multiple `if` statements through if/else if/else if statements. The program goes through each statement until one meets the criteria set and then ignores any remaining code. It's almost like a raffle ticket drawing for a prize when a bunch of people have left already, the person pulling the ticket and reading them will keep checking until someone has the winning ticket, then the prize is awarded and the raffle drawing has ended.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
  You can use 'logical operators' and specifically `&&` which will only return (evaluate?) true when both conditions are met. For checking one of two conditions you can use `||` which is how to test with 'logical or' and so if either of the conditions are true, it will run.

1. What questions do you still have about `if` statements and/or functions?
  This is more of a js question, why is 3 == '3' return true but 'snowy' == 'Snowy' returns false? Just syntax? (I know that 3 === '3' will evaluate false since it takes the data type into consideration)
  What are the best practices with comparing many different levels of a if else sequence?
  What are the use cases for using `==` versus `===`?
  How do you make sure that your input for certain `if` statements fits within your data types?
    For example, with the puppy example if someone set the dog's age to -.5 it would return puppy. Should I have written a condition for that situation? How many conditions are considered overkill?
