var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var numsFilter = nums.filter(n => {
    return n > 50;
})

console.log(numsFilter);

var nomes = ["Ana", "Carla", "João", "Pedro"];

var nomesComO = nomes.filter(n => {
    return n.toLowerCase().includes("o");
})

console.log(nomesComO);