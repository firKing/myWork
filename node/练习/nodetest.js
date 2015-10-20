
process.nextTick(function(){
    console.log('nextTick-1');
});
setImmediate(function () {
   console.log('setImmediate-1');
});
setImmediate(function () {
   console.log('setImmediate-2');
   process.nextTick(function () {
        console.log('insert');
   })
});
setImmediate(function () {
   console.log('setImmediate-3');
   process.nextTick(function () {
        console.log('insert-2');
   })
});

process.nextTick(function(){
    console.log('nextTick-2');
});

console.log('out');