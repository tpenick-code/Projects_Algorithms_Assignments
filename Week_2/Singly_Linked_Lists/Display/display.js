// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;              
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }
//     findSum() {
//             //We first have to tell our train attendant that we want them to start at the front of the train
//             runner=self.head
//             sum=0
//             //Since a Linked List does not know how many nodes is within it, we will not be able to use a for loop to             iterate, instead we'll use a while
//             //Also we need to tell them when to stop otherwise they will just run off the end of the train
//             while(runner !== null){
//                 //Since the runner is set to the current node, its value will be equal to the value of the node they                 are currently on
//                  sum+=runner.value
//                 //Tell our attendant to move to the next car
//                 runner=runner.next
//             }
//             return sum
//         }
// }

//Display
class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    display() {
        let myList = "";
        if (this.head ===null){
            return "";
        }
        myList +=this.head.data;
        let runner = this.head.next;
        while (runner != null){
            myList += "," + runner.data;
            runner = runner.next
        }
        return myList;
    }

}
