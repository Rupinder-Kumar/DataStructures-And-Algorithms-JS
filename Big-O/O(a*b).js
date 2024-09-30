function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(box1 => {
        boxes2.forEach(box2 => {
            console.log(`${box1} ${box2}`);
        });
    });
}

// O(a*b)
compressBoxesTwice([1, 2, 3, 4, 5], [6, 7]);