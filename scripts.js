// Data from ChatGpt:
const questionBank = [
    { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },
    { question: "Which country won the first ICC Cricket World Cup?", options: ["Australia", "England", "West Indies", "India"], answer: "West Indies" },
    { question: "Who is known as the 'God of Cricket'?", options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"], answer: "Sachin Tendulkar" },
    { question: "What is the highest individual score in ODI cricket?", options: ["264", "200", "237", "275"], answer: "264" },
    { question: "Which bowler has taken the most wickets in Test cricket?", options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"], answer: "Muttiah Muralitharan" },
    { question: "Which Indian player is known as the 'Hitman'?", options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Shikhar Dhawan"], answer: "Rohit Sharma" },
    { question: "Who won the ICC Cricket World Cup 2011?", options: ["India", "Sri Lanka", "Australia", "England"], answer: "India" },
    { question: "Who holds the record for the fastest century in ODI cricket?", options: ["AB de Villiers", "Chris Gayle", "Shahid Afridi", "Virat Kohli"], answer: "AB de Villiers" },
    { question: "Which country is known as the Proteas in cricket?", options: ["South Africa", "Australia", "England", "New Zealand"], answer: "South Africa" },
    { question: "Who has the most sixes in international cricket?", options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "Shahid Afridi"], answer: "Chris Gayle" },
    { question: "Which team has won the most ICC Cricket World Cups?", options: ["Australia", "India", "West Indies", "England"], answer: "Australia" },
    { question: "Who is the youngest player to score a century in international cricket?", options: ["Shahid Afridi", "Virat Kohli", "Sachin Tendulkar", "Rashid Khan"], answer: "Shahid Afridi" },
    { question: "Which cricket stadium is the largest in the world?", options: ["Narendra Modi Stadium", "MCG", "Lord's", "Eden Gardens"], answer: "Narendra Modi Stadium" },
    { question: "Who is the fastest bowler in cricket history?", options: ["Shoaib Akhtar", "Brett Lee", "Shaun Tait", "Mitchell Starc"], answer: "Shoaib Akhtar" },
    { question: "Which player has the highest batting average in Test cricket?", options: ["Don Bradman", "Steve Smith", "Kane Williamson", "Jacques Kallis"], answer: "Don Bradman" },
    { question: "Who is the captain of the Indian cricket team in 2023?", options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Hardik Pandya"], answer: "Rohit Sharma" },
    { question: "Which bowler has the best bowling figures in ODI cricket?", options: ["Chaminda Vaas", "Muttiah Muralitharan", "Glenn McGrath", "Anil Kumble"], answer: "Chaminda Vaas" },
    { question: "Which country is known as the Black Caps in cricket?", options: ["New Zealand", "South Africa", "England", "West Indies"], answer: "New Zealand" },
    { question: "Who is the highest run-scorer in T20 internationals?", options: ["Virat Kohli", "Rohit Sharma", "Babar Azam", "Chris Gayle"], answer: "Virat Kohli" },
    { question: "Which cricket ground is known as the 'Home of Cricket'?", options: ["Lord's", "MCG", "Eden Gardens", "The Oval"], answer: "Lord's" }
];

// Function
function RandomQuestion(){

    // Most optimized way using fisher algorithm
    const arr = [];
    let length = questionBank.length;

    for(let i=0; i<5; i++)
    {
        const index = Math.floor(Math.random()*length);
        arr.push(questionBank[index]);

       //swap
    [questionBank[index],questionBank[length-1]] = [questionBank[length-1],questionBank[index]];
    length--;
    }
    return arr;
}

// Form access & creating all element inside that form
const form = document.querySelector('form');

// Question from our above data
const problem = RandomQuestion() // call 

// for each on our data array
//obj =>  { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },{ question: "Which country won the first ICC Cricket World Cup?", options: ["Australia", "England", "West Indies", "India"], answer: "West Indies" },

// Correct(Original ans)
const Correct_ans = {};

problem.forEach((obj,index )=> {
    // issi k andar  apna element creation part aayega

    const div_element = document.createElement('div');
    div_element.className = 'question mb-3 p-3 rounded-lg';   
    
    // Correct ans value:
    Correct_ans[`q${index+1}`] = obj['answer']

    const para = document.createElement('p');
    para.innerText = `${index+1}. ${obj.question}` // or obj['question']   // index=> used for question numbering
    div_element.appendChild(para)

    // Create 4 labels for 4 options & get each option value from obj and getting vaue from options using foreach
    obj.options.forEach((data)=>{

        const label = document.createElement('label');
        label.className = 'hover:bg-white';
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index+1}`;
        input.value = data;
        label.appendChild(input);  //input ko label m daalna
        label.appendChild(document.createTextNode(data))  // It's a option m data like: Sachin tendulakr, not used innerhtml as it's not part of input filed.
        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));       
    })   
    form.appendChild(div_element);   
});

    const btn = document.createElement('button');
    btn.type = 'submit';
        btn.innerHTML = 'Submit';
        btn.className = 'h-10 w-full border bg-sky-500 hover:bg-sky-700 rounded-xl text-white text-xl font-semibold';
        form.appendChild(btn);

    const btn2 = document.createElement('button');
    btn2.type = 'reset';
        btn2.innerHTML = 'Reset';
        btn2.className = 'h-10 w-full border bg-red-500 hover:bg-red-700 rounded-xl text-white text-xl font-semibold mt-2';
        form.appendChild(btn2); 

        const result = document.getElementById("result");
        form.appendChild(result);  // 👈 this ensures result is the last element (issue fixed with help of chatgpt)
        
// Check the submiited form logic (Already done in part A of this project):
    form.addEventListener('submit', ((event)=>{
    event.preventDefault();
    const data = new FormData(form);

    let Total_correct = 0;

    for(let [key,value] of data.entries()){ // data.entries => array of key-value, [key,value]--> Destructure
        
        if(value===Correct_ans[key]){
            Total_correct++;
        }
    }
    
    // Myself logic (Yes it's funny, but logically it's lso important for me)
    let helping_verb = "is";
    if(Total_correct>1){
        helping_verb = "are";
    }

// Some cool result effect
const result = document.getElementById("result");
result.className = "mt-4 p-4 rounded-xl text-center font-semibold text-xl"; // base styles

if (Total_correct === 5) {
    result.classList.add("bg-green-500", "text-white", "shadow-lg");
    result.innerText = `🎉 Perfect! ${Total_correct} / 5 ${helping_verb} correct!`;
} else if (Total_correct >= 3) {
    result.classList.add("bg-yellow-400", "text-black", "shadow-lg");
    result.innerText = `👍 Good job! ${Total_correct} / 5 ${helping_verb} correct`;
} else {
    result.classList.add("bg-red-500", "text-white", "shadow-lg");
    result.innerText = `😢 Only ${Total_correct} / 5 ${helping_verb} correct, try again!`;
}

// Reset
form.addEventListener('reset',((e)=>{
    result.innerHTML=""
    result.className =""
}))
}))




