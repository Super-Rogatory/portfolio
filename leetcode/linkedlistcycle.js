class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.size = -1;
    }
    setNextNode(node){
        this.size++;
        this.next = node;
    }
    get listSize(){
        return this.size;
    }
}

let list = new ListNode(5);
list.setNextNode(2);

console.log(list);
var hasCycle = function(head){
    if(list.listSize >= 0) return true;
    return false;
}

console.log(hasCycle(list));