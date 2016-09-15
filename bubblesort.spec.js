describe('Bubble Sort', function(){
  var array;

  beforeEach(function() {
  	array = [3, 4, 2, 0, 1];
  	// spyOn(window, 'bubbleSort').and.callThrough();
  })

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts the array', function() {
  	expect ( bubbleSort(array)).toEqual( [0, 1, 2, 3, 4]);
  });

  it('returns the right number of swaps', function() {
  	spyOn(window,'swap').and.callThrough();
  	//console.log(array);
  	bubbleSort(array);
  	expect (swap.calls.count()).toEqual(8);
  })

  it('compares the correct amount of times', function() {
  	spyOn(window,'compare').and.callThrough();
  	bubbleSort(array);
  	expect (compare.calls.count()).toEqual(10);
  })
 });



//spy on swap count and compare count and return if they equal 9 and 10
