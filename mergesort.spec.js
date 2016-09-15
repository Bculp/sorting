describe('Split Array function', function() {
  var array = [3, 4, 2, 0, 1];


  it('is able to split an array into two halves', function() {
  	expect(split(array)).toEqual([[3, 4], [2, 0, 1]]);
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
  });
});




// describe('Bubble Sort', function(){
//   var array;

//   beforeEach(function() {
//   	array = [3, 4, 2, 0, 1];
//   	// spyOn(window, 'bubbleSort').and.callThrough();
//   })

//   it('handles an empty array', function(){
//     expect( bubbleSort([]) ).toEqual( [] );
//   });

//   it('sorts the array', function() {
//   	expect ( bubbleSort(array)).toEqual( [0, 1, 2, 3, 4]);
//   });

//   it('returns the right number of swaps', function() {
//   	spyOn(window,'swap').and.callThrough();
//   	//console.log(array);
//   	bubbleSort(array);
//   	expect (swap.calls.count()).toEqual(8);
//   })

//   it('compares the correct amount of times', function() {
//   	spyOn(window,'compare').and.callThrough();
//   	bubbleSort(array);
//   	expect (compare.calls.count()).toEqual(10);
//   })
//  });
