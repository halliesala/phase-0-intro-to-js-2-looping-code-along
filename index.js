// Code your solutions in this file
function writeCards(names) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(anInt) {
    for (let i = anInt; i >= 0; i--) {
        console.log(i)
    }
}

