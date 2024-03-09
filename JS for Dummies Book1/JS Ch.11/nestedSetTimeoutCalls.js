//Way NOT to do it

function doProcessing() {
  var timeout;
  timeout = setTimeout(() => {
    console.log(`Doing first thing`);
    timeout = setTimeout(() => {
      console.log(`Step2`);
      timeout = setTimeout(() => {
        console.log(`Step3`);
        setTimeout(() => {
          console.log(`Last thing`);
        }, 300);
      }, 1000);
    }, 2500);
  }, 3000);
}

//Way to do it

const promisifiedSetTimeout = function (ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

async function doProcessingAsync() {
  await promisifiedSetTimeout(3000);
  console.log(`Doing first thing`);
  await promisifiedSetTimeout(2500);
  console.log(`Step2`);
  await promisifiedSetTimeout(1000);
  console.log(`Step3`);
  await promisifiedSetTimeout(300);
  console.log(`Last thing`);
}

doProcessingAsync();
