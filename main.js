let letterSearch = [ 'shakar', 'banan', 'anor', 'aziza', 'gul', 'said',  'mars it' , 'odina' , 'genrta', 'malibu XL' , 'sunnatbe' , ''];

let nbilan = [];
let nsiz = [];

for (let word of letterSearch) {
    if (word.includes('n')) {
        nbilan.push(word);
    } else {
        nsiz.push(word);
    }
}

console.log("So'zlarda 'n' harfi bor:", nbilan);
console.log("So'zlarda 'n' harfi yo'q:", nsiz);