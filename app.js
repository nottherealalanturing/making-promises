const a = 'not a promise';
const b = 'still not a promise';
let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('Success!');
  }, 250);
});

myFirstPromise.then((successMessage) => {
  console.log('Yay! ' + successMessage);
});

const successCallback = (result) => {
  console.log('Audio file ready at URL: ' + result);
};

const failureCallback = (error) => {
  console.error('Error generating audio file: ' + error);
};

const cbPromise(function(res){
    cbPromise1(res,
      (newRes) => {
        const cbPromise2 =
          (newRes,
          (newRes2) => {
            console.log('Got the final result: ' + newRes2);
          },
          failureCallback);
      },
      failureCallback);
  },
  failureCallback);

thenPromise().then((res)=> res).then((res)=>res).catch(err)
cbPromise('hello');
