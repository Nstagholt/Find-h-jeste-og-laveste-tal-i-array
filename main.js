function highestandlowest(array){
    let result = []
    let high = null
    let low = null 
    for (let num in array) {
        if (low == null) low = parseInt(array[num]);
        if (low > parseInt(array[num])) low = parseInt(array[num]);
        if (high < parseInt(array[num])) high = parseInt(array[num]);
    }
    result.push(low);
    result.push(high);
    return result;
}

class myClass {
    constructor(array) {
        this.array = array;
    }
    get getValue() {
        return this.highestandlowest();
    }

    highestandlowest() {
        let result = []
        let high = null
        let low = null 
        for (let num in this.array) {
            if (low == null) low = parseInt(this.array[num]);
            if (low > parseInt(this.array[num])) low = parseInt(this.array[num]);
            if (high < parseInt(this.array[num])) high = parseInt(this.array[num]);
        }
        result.push(low);
        result.push(high);
        return result;
    }
}

const hej = new myClass([1,2,3,4,5,6,7,8]);
console.log(hej.getValue);