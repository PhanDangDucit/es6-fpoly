function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', 'to', 'code', ...fragment];
    return sentence;
}
console.log("spreadOut: ", spreadOut());