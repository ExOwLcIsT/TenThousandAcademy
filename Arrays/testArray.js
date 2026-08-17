const array = ["1", "2", "3"];
array[7] = "test";
console.log(array);


const rtf2 = new Intl.RelativeTimeFormat("ua", { numeric: "auto" });

console.log(rtf2.format(1, "week"));