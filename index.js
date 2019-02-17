class Stack{
    constructor(){
        this.list={},
        this.size=0
    }
    push(value){
       this.list[++this.size]=value;
        return value
    }
    pop(){
        let value=this.list[this.size]
        delete this.list[this.size--]
        return value
    }
    getSize(){
        return this.size;
    }
    peek(){
        return this.list[this.size];
    }
    isEmpty(){
        return (this.size===0)?true:false;
    }
}


let MyStack=new Stack();



console.log(MyStack)

//checking stack is empty or not
console.log(MyStack.isEmpty());//true
console.log(MyStack)

//pushing elements into stack
MyStack.push("a")
MyStack.push("b")
MyStack.push("c")
MyStack.push("d")
console.log(MyStack)

//checking stack is empty or not
console.log(MyStack.isEmpty())//false

//checking current size of stack
console.log(MyStack.getSize())


//removing element from the top of stack. or pop
MyStack.pop();//d
MyStack.pop();//c
console.log(MyStack)

//Returns the element on the top of the stack, but does not remove it
console.log(MyStack.peek());//b
console.log(MyStack)

//removing element from the top of stack. or pop
MyStack.pop();//b
MyStack.pop();//a
console.log(MyStack)

//checking current size of stack
console.log(MyStack.getSize())

//checking stack is empty or not
MyStack.isEmpty();//true
console.log(MyStack)








