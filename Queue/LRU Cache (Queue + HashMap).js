// Concept:

// Use:

// HashMap → O(1) access
// Doubly Linked List (acts like a queue) → track usage order

// Most recently used → front
// Least recently used → back (to remove)

// ⏱ Time: O(1) for get & put


class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new Node(0, 0); // dummy head
        this.tail = new Node(0, 0); // dummy tail

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _add(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        let node = this.map.get(key);
        this._remove(node);
        this._add(node);

        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this._remove(this.map.get(key));
        }

        let node = new Node(key, value);
        this._add(node);
        this.map.set(key, node);

        if (this.map.size > this.capacity) {
            let lru = this.tail.prev;
            this._remove(lru);
            this.map.delete(lru.key);
        }
    }
}

// Example
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1



