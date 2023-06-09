const list = [1,3,4,7,8,9,10,15,18,19,22,25,28,35,37,40,48]

const binarySearch = (list,number) => {
    let smallestNumber = 0; 
    let higherNumber = list.length - 1;

    while (smallestNumber <= higherNumber){
        let middle = Math.round((higherNumber + smallestNumber)/2);
        let guess = list[middle];
        if(guess == number){
            return ('Number ' + number + ' position: ' + middle);
        } else if(guess < number){
            smallestNumber = middle + 1;
        } else {
            higherNumber = middle - 1;
        }
    }
 return 'This number is not in the list.';
} 
console.log(binarySearch(list, 16))
console.log(binarySearch(list, 15))