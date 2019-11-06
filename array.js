const Memory = require('./memory')
let memory = new Memory()

class Array {
    constructor() {
        this.length = 0
        this.ptr = memory.allocate(this.length)
        this._capacity = 0
    }
    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }
        memory.set(this.ptr + this.length, value)
        this.length++
    }
    _resize(size) {
        const tmpPtr = this.ptr
        this.ptr = memory.allocate(size)
        if (this.ptr == null) {
            throw new Error('No memory left')
        }
        memory.copy(this.ptr, tmpPtr, this.length)
        memory.free(tmpPtr)
        this._capacity = size
    }
    insert(index, value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }
        if (index < 0 || index >= this.length) {
            throw new Error('Error: index out of bounds')
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
    }
    pop(){
        if (this.length === 0){
            throw new Error('Array cannot be empty')
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Error: index out of bounds')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Error: index out of bounds')
        }
        return memory.get(this.ptr + index)
    }
}
Array.SIZE_RATIO = 3