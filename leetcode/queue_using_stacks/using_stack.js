
var MyQueue = function () {
    this.in = [];
    this.out = [];
};


MyQueue.prototype.push = function (x) {
    this.in.push(x);
};


MyQueue.prototype.pop = function () {
    if (this.out.length === 0) {
        while (this.in.length > 0) {
            this.out.push(this.in.pop());
        }
    }
    return this.out.pop();
};


MyQueue.prototype.peek = function () {
    return this.out.length > 0 ? this.out[this.out.length - 1] : this.in[0];
};


MyQueue.prototype.empty = function () {
    return this.in.length === 0 && this.out.length === 0;
};



var myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/