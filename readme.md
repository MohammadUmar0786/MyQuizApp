<!-- Store data -->
1. Store the question
2. Store options
3. Store answer

<!-- How to store data -->

obj1 = {
    "question": "Who test highest test wicket?",
    options: ["Sachin","Virat"....],
    ans:"Sachin"
}

obj2 = .....
Obj3 = .....

=> Each question in above format

const questionBank = [obj1,obj2,obj3....]

=> all abobe obj in an array,so that we can use random logic easily on an array.

=> Let takes all data in these format using chatGpt

 <!-- Steps:-->
=> Write a fn for this random question selection task and include alll below logic in that fn. 
=> Used "Set" for unique questions selection
=> Used "while" loop for 5 selection 
=> Used Math.random for random 5 selection from set of 20 questions
=> Converted that set into array using spread operator as we need array or obj.

=> Now, Our task is to creat all elements inside form via js, not html:

# Important point:
  =>  <input type="radio" name="q1" value="Sachin Tendulkar">Sachin Tendulkar

  => Many of us thinks that above  input filed is till Sachin tendulakr data, but No, the input 
     filed is only till value attribute here:=> <input type="radio" name="q1" value="Sachin Tendulkar">
  => So, Sachin tendulakr is not the part inner html of this input field.    
  => here, Sachin tendulakr is a sepaarte text node, therefore we have to create textnode element in js
     to use write this data value Sachin tendulakr.
  => So, we have created one question in js then other will automatically created using for each.
  => Hence, this is the most optimized approach to do html elements creation part using js,
     which saves our so much time rather then creating so many elements for each questions in this quiz project, so we can use this approch in many good and big projects.
 => here we have used set with math.random to not repeat any random question, but this set way is not 
    most optimized way as if we have number of thousand of big data then this approach also fails,
    hence will use "sort" method

<!-- Sort method-->

=> If we use sort method whthout any comparetor fn in it then it will not properly in our js,
   For example:

   arr =  [10,20,100]
   arr.sort(); --> [10,100,20]  why ?

   => Reason: As we have not used any comparetor fn in sort, it treating values of arr as string ['10','20','100'].
      and comparing there ASCII value, where 1>2, so it comparing 10th first character 1 with 2 of 20th and 1 of 100th, that's why it giving [10,100,20] as result.
   => Solution: have to write a comparetor fn inside --> array.sort()   
   
  => this comparitor fn is nothing, it's a callback fn.
  => it will takes 2 values, let say a, b => array.sort(a,b);
  => this callback fn will return any one of these three value => which are +ve, -ve or 0
  => if, it return +ve value, this means b pele aayega a se, for -ve it treat a phele than b and for 0 jo order tha phele se whi rhega.
  => we need A logic which full fill our critera. 
  So, will use a-b simple logic here in this callback fn.

  => a-b logic:
  => a=10, b=20, 10-20 => -10 means it return -ve value, so 10 means a phelea aayega b se jo ki h 20.
     Similarly, check for 20 & 100, where 20 treat as a and 100 as b, a-b => 20-100 =>-80 which means
     20 phele aayega 100 se, similarly check for last case 100 and 10, 100-10 => 90 which means +ve value, so
     now 10 phele aayga 100 se. So. we have successfully sorted our all values => 10,20,100
     hence, got sorted values of arr => [10,20,100]

     => let arr = [10,20,100];
       arr.sort((a,b) => a-b);  // a,b are optional 
       O/P: [10,20,100]

   <!-- Use sort method to get random 5 question -->  
   <!-- Logic --> 

    questionBank.sort(()=>{
      math.random()-0.5
      return questionBank.slice(0,5);
    })

    => In above code, "questionBank" is an array, where we are using .sort(),
       which will sort the data, and this sort method takes a callback fn where we are giving our logic, we have written math.random()-0.5 which means will get random different set of question where few will have a-b & b-1 value, means we know math.random given 0 to 1 number jab isko minus krenge -0.5 se toh kuch hume +ve aur kuch -ve result milega which means for +ve b will be greater and for -ve 1 will be greator, a and b are argument which we have discussed above while understanding sort, but here we are not writing a,b in our js actual logic code as no need and now .slice will give us only first 5 question which had randomly generated from above math.random()-1 logic., so this is the entrie explaination of this logic.

    => But, iss way m toh time complexity aur bekaar aarhi h: nlogn, so what method we will use ?
    => Solution: We have a simple algortithm which is "Fisher" algorithm.   
    => Will use this alogorithm:

   <!-- Fisher Algorithm --> // Time Complexity: O(n) exact.
                         0  1  2  3  4  5  6  7  8  9
   let we have a array: [10,13,19,15,12,21,18,25,23,24];

   => Let assume ki Math.random() se hume koi number mila ek 15,
   => so, ab yhe 15 select hone k baad hume isko last position pr jo element h
      usse replace kr denge aur usko jo ki h 24 isko hum 15 ki jgh rkh denge and 
      ab uss 15 ko bhaar kr denge math.random k selection se, kese hoga bhaar?
      bhaar hoga length -- krke, jese hum length use krte hn Math.random()* length, so ab next time length ki size kam ho jaayegi isse wo same element wapis se select bhi nhi hoga
      aur humara kaam done, this is the "Fisher-Algorithm".

   # Most optimized way by using fisher algorithm

    const arr = [];
    let length = questionBank.length;

    for(let i=0; i<5; i++){
    const index = Math.floor(Math.random()*length);
    arr.push(questionBank[index]);

       //swap
    [questionBank[index],questionBank[index-1]] = [questionBank[index-1],questionBank[index]];
    length--;
    }

   # Best Tip: Always run and check small parts of code rather than checking after complete completion, as it's very difficult to debug whole project code at a time. 




