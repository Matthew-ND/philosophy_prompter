/*
NOTES
**Description**
    -Philosophy Prompter
    -Introducing "Philosophy Prompter" - an application designed to randomly generate philosophical questions, conditions and ways to communicate your responses. With Philosophy Prompter, you can challenge yourself to explore deep philosophical concepts and think critically about the world around you. The application generates questions that will make you ponder the meaning of life, ethics, and morality, and provides unique conditions that will require you to approach the question from a specific perspective.
-Philisophical Question
    -Are humans more important than animals?
    -Can you ever honestly know another person?
    -Are you currently dreaming? How do you know?
    -Do memories exist even if you forget them?
    -Are hot dogs tacos?
    -What would you say if you had five minutes to defend the human race in front of a group of aliens who were going to obliterate humanity? 
    -What is the purpose of humor?
    -If immortality were possible, would you want to be immortal?
    -If time travel was possible, would it be ethical, unethical or neutral to partake?
 -Condition
    -Just share your view with a friend... maybe it will turn into a deep conversation. At least its not small talk... right?
    -Don't answer. Ask your friend... and never stop asking questions.
    -YOU'RE WRONG! You must argue the opposite!
    -YOU'RE RIGHT! Don't listen to your friends opinion. Yours is the only one that matters.
    -State your answer as a question? How annoying?
 -Delivery
    -Text
    -Call
    -Video Call 
    -Pictionary (draw.chat) 

EXECUTION

-arr (question)
-arr (conditon) 
-arr (delivery)

-function
    -takes an arr
    -returns a random output on the arr (.length)

-function = final output (calling this will output final result)
    TO BE WORKED ON LATER

-call function
*/

const question = [
    'Are humans more important than animals?',
    'Can you ever honestly know another person?',
    'Are you currently dreaming? How do you know?',
    'Do memories exist even if you forget them?',
    'Are hot dogs tacos?',
    'What would you say if you had five minutes to defend the human race in\n front of a group of aliens who were going to obliterate humanity?',
    'What is the purpose of humor?',
    'If immortality were possible, would you want to be immortal?',
    'If time travel was possible, would it be ethical, \nunethical or neutral to partake?'
];

const condition = [
    'Just share your view with a friend... maybe it will turn into \na deep conversation. At least its not small talk... right?',
    'Don\'t answer. Ask your friend... and never stop asking questions.',
    'YOU\'RE WRONG! You must argue the opposite!',
    'YOU\'RE RIGHT! Don\'t listen to your friends opinion. Yours\n is the only one that matters.',
    'State your answer as a question? How annoying?'
];

const delivery = [
    'Text',
    'Call',
    'Video Call',
    'Pictionary (draw.chat)'
];

const getRandomIndex = arr => {
    return arr[Math.floor(Math.random() * arr.length - 1)];
};

const philosophyPrompter = () => {
    console.log(`~PHILOSOPHY PROMPTER~`);
    console.log(`QUESTION: ${getRandomIndex(question)}`);
    console.log(`CONDITION: ${getRandomIndex(condition)}`);
    console.log(`DELIVERY: ${getRandomIndex(delivery)}`);
}

philosophyPrompter();