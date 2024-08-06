class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBeginning = function(data) {
  let newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
  return this.head;
}

LinkedList.prototype.insertAtEnd = function(data) {
  let newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }
  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = newNode;
  return this.head;
}


LinkedList.prototype.getAt = function(index) {
  let counter = 0;
  let node = this.head;
  while (node) {
    if (counter === index) {
      return node;
    }
    counter++;
    node = node.next;
  }
  return null;
}


LinkedList.prototype.insertAt = function(data, index) {
  if (!this.head) {
    this.head = new Node(data);
    return;
  }
  if (index === 0) {
    this.head = new Node(data, this.head);
    return;
  }
  const previous = this.getAt(index - 1);
  let newNode = new Node(data);
  newNode.next = previous.next;
  previous.next = newNode;

  return this.head
}

LinkedList.prototype.deleteFirstNode = function() {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
  return this.head;
}

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }
}

Stack.prototype.push = function(value) {
  this.linkedList.insertAtBeginning(value);
}

Stack.prototype.pop = function() {
  this.linkedList.deleteFirstNode();
}

Stack.prototype.peek = function() {
  return this.linkedList.head.data;
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack.peek());


function reverseStringUsingStack(s){
  let stack = new Stack();
  for(let i=0; i<s.length; i++){
    stack.push(s[i]);
  }
  let reversedString = '';
  while(stack.linkedList.head){
    reversedString += stack.peek();
    stack.pop();
  }
  return reversedString;
}

console.log(reverseStringUsingStack('hello'));

class Queue {
  constructor() {
      this.queue = [];
  }
  enqueue(item) {
      this.queue.push(item);
  }

  dequeue() {
      if (!this.isEmpty()) {
          return this.queue.shift();
      } else {
          throw new Error("Queue is empty");
      }
  }

  front() {
      if (!this.isEmpty()) {
          return this.queue[0];
      } else {
          throw new Error("Queue is empty");
      }
  }

  isEmpty() {
      return this.queue.length === 0;
  }

  size() {
      return this.queue.length;
  }

  toString() {
      return this.queue.toString();
  }
}


class PrinterQueue {
  constructor() {
      this.queue = new Queue();
  }

  addJob(job) {
      this.queue.enqueue(job);
      console.log(`Added print job: ${job}`);
  }

  processJobs() {
      while (!this.queue.isEmpty()) {
          const job = this.queue.dequeue();
          console.log(`Processing print job: ${job}`);
      }
      console.log("All print jobs have been processed.");
  }
}

const printerQueue = new PrinterQueue();

// Adding print jobs to the queue
printerQueue.addJob("Document1.pdf");
printerQueue.addJob("Photo1.jpg");
printerQueue.addJob("Report.docx");

// Processing all print jobs in the queue
printerQueue.processJobs();


class TreeNode {
  constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
  }
}

class BinaryTree {
  constructor() {
      this.root = null;
  }
}

// Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes
BinaryTree.prototype.insert = function(value) {
  const newNode = new TreeNode(value);
  if (!this.root) {
      this.root = newNode;
  } else {
      this.insertNode(this.root, newNode);
  }
}

BinaryTree.prototype.insertNode = function(node, newNode) {
  if (newNode.value < node.value) {
      if (!node.left) {
          node.left = newNode;
      } else {
          this.insertNode(node.left, newNode);
      }
  } else {
      if (!node.right) {
          node.right = newNode;
      } else {
          this.insertNode(node.right, newNode);
      }
  }
}

BinaryTree.prototype.inOrderTraversal = function(node, callback) {
  if (node !== null) {
      this.inOrderTraversal(node.left, callback);
      callback(node.value);
      this.inOrderTraversal(node.right, callback);
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(18);

binaryTree.inOrderTraversal(binaryTree.root, console.log);


class Graph {
  constructor() {
      this.adjacencyList = {};
  }
}

Graph.prototype.addVertex = function(vertex) {
  if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
  }
}

Graph.prototype.addEdge = function(vertex1, vertex2) {
  if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
  }
}

Graph.prototype.removeEdge = function(vertex1, vertex2) {
  if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
}

Graph.prototype.removeVertex = function(vertex) {
  if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach(v => {
          this.removeEdge(vertex, v);
      });
      delete this.adjacencyList[vertex];
  }
}

Graph.prototype.depthFirstSearch = function(startingNode, callback) {
  const visited = {};
  this.depthFirstSearchHelper(startingNode, visited, callback);
}

Graph.prototype.depthFirstSearchHelper = function(node, visited, callback) {
  visited[node] = true;
  if (this.adjacencyList[node]) {
      callback(node);
      this.adjacencyList[node].forEach(neighbor => {
          if (!visited[neighbor]) {
              this.depthFirstSearchHelper(neighbor, visited, callback);
          }
      });
  }
}
//shortest path between 2 nodes
Graph.prototype.shortestPath = function(startingNode, targetNode) {
  const queue = [startingNode];
  const visited = {};
  const predecessor = {};
  let path = [];
  let node;

  while (queue.length) {
      node = queue.shift();
      if (node === targetNode) {
          while (node !== startingNode) {
              path.unshift(node);
              node = predecessor[node];
          }
          path.unshift(startingNode);
          break;
      }
      if (!visited[node]) {
          visited[node] = true;
          this.adjacencyList[node].forEach(neighbor => {
              queue.push(neighbor);
              predecessor[neighbor] = node;
          });
      }
  }
  return path;
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

graph.depthFirstSearch('A', console.log);

console.log(graph.shortestPath('A', 'F'));

