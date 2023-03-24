//Arr include possible outputs
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

//Function to randomly select from an arr
const getRandomIndex = arr => {
    return arr[Math.floor(Math.random() * arr.length - 1)];
};

//Generates output
const philosophyPrompter = () => {
    let message = ['~PHILOSOPHY PROMPTER~'];
    message.push(`QUESTION: ${getRandomIndex(question)}`);
    message.push(`CONDITION: ${getRandomIndex(condition)}`);
    message.push(`DELIVERY: ${getRandomIndex(delivery)}`)
    return message.join('\n');
}


console.log(philosophyPrompter());