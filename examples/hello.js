function findMeaning() {
    return 42;
}

console.log(findMeaning());

const mission = process.argv[2];
// get the 3rd argument when calling node[0] hello.js[1] explore[2]

if (mission === 'learn') {
    console.log('TIme to write some Node code!');
} else {
    console.log(`Is ${mission} really more fun?`);
}

// node hello.js explore
// Is explore really more fun?