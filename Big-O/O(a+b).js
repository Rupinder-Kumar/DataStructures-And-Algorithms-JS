function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(box => {
        console.log(box);
    });
    boxes2.forEach(box => {
        console.log(box);
    });
}

// O(a+b)
compressBoxesTwice([1, 2, 3, 4, 5], [6, 7]);