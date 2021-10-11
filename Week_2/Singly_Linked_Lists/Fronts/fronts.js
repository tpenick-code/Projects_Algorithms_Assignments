// function double(arr){
//     for(let i=0; i<arr.length; i++){
//         arr[i]*=2
//     }
//     return arr
// }
// let arr=[1,2,3,4,5]
// double(arr)
// console.log(arr)


//Add Front
class SLL {
    constructor(){
        this.head = null;
    }
    addFront (val){
        let newNode = new SLLNode(val);
        newNode.next = this.head
        this.head = newNode;
        return this.head;
    };
}

//Remove Front
class SLL {
    constructor(){
        this.head = null;
    }

    removeFront() {
        if (this.head ===null){
            return this.head
        }
        let removeNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    };
}

//Front
class SLL {
    constructor(){
        this.head = null;
    }

    front () {
        if (this.head ===null) {
            return null;
        } else {
            return this.head.val;
        }

    };
}