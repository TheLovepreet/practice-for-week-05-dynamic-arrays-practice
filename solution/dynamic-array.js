class DynamicArray {

  constructor( capacity,length, defaultSize=4,arr = []) {

    // Your code here
    this.defaultSize = defaultSize;
    this.length = length || 0;
    this.capacity = capacity || this.defaultSize;
    this.data = {
      length : this.capacity || 0
    }
  }

  read(index) {

    // Your code here
    for(let key in this.data){
      if(index < this.length){
        return (this.data[key[0]] + index*this.data.length) 
      }
      return undefined;
    }



  }

  unshift(val) {

    // Your code here
    for(let i = 1; i <= this.data.length-1; i++){
      this.data[i+1] = this.data[i];
    }
    this.data[0] = val;
    console.log(this.data)
  this.length++;

}
}


module.exports = DynamicArray;