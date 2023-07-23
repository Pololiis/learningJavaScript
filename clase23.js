// BinarySearch

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
// ¿Cuál es la posición del número 1?
// ¿Cuál es la posición del número 5?
// ¿Cuál es la posición del número 6?
// ¿Cuál es la posición del número 9?
// ¿Cuál es la posición del número 11?

const binarySearch = function (whereToSearch, whatToSearch) {
    let start = 0;
    let end = whereToSearch.length - 1;
    while (start <= end) {
        const index = Math.floor((start + end) / 2);
        const guess = whereToSearch[index];
        if (guess === whatToSearch) {
            return index;
        }
        if (guess > whatToSearch) {
            end = index - 1;
        } else {
            start = index + 1;
        }
    }
    return null;
};

console.log(binarySearch(list, 1)); // 0
console.log(binarySearch(list, 5)); // 4
console.log(binarySearch(list, 6)); // 5
console.log(binarySearch(list, 9)); // 8
console.log(binarySearch(list, 11)); // 10

// BubbleSort + BinarySeach

let list2 = [12,3,5,7,1,22,47,100];

// ¿Cuál es la posición del número 12?
// ¿Cuál es la posición del número 5?
// ¿Cuál es la posición del número 22?
// ¿Cuál es la posición del número 100?

const bubbleSort = (toOrder) => {
    for (let i = 0; i < toOrder.length - 1; i++) {
        for (let j = 0; j < toOrder.length; j++) {
            if (toOrder[j] > toOrder[j + 1]) {
                let aux = toOrder[j];
                toOrder[j] = toOrder[j + 1];
                toOrder[j + 1] = aux;
            }
        }
    }
    return toOrder;
};

const hybridBinarySearch = (whereToSearch, item) => {
    let toSearch = bubbleSort(whereToSearch);
    let low = 0;
    let high = toSearch.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = toSearch[mid];
        if (guess === item) {
            return mid;
        } else {
            if (guess > item) {
                high = mid - 1;
            } else {
                low = mid + 1
            }
        }
    }
    return null;
};

console.log(hybridBinarySearch(list2, 12)); // 4
console.log(hybridBinarySearch(list2, 5)); // 2
console.log(hybridBinarySearch(list2, 22)); // 5
console.log(hybridBinarySearch(list2, 100)); // 7