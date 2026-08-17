async function first() {
  console.log("first");

  await Promise.resolve();

  console.log("first end");
}

function* gen() {
  console.log("gen start");
  yield;
  console.log("gen end");
}

const g = gen();

console.log("script");

process.nextTick(() => {
  console.log("tick");

  Promise.resolve().then(() => {
    console.log("promise in tick");
  });

  setTimeout(() => {
    console.log("timeout in tick");
  }, 0);
});

queueMicrotask(() => {
  console.log("microtask");

  g.next();
});

setTimeout(() => {
  console.log("timeout");

  process.nextTick(() => {
    console.log("tick in timeout");
  });

  Promise.resolve().then(() => {
    console.log("promise in timeout");
  });

}, 0);

setImmediate(() => {
  console.log("immediate");

  g.next();
});

first();

console.log("end");

// script
// first
// end
// tick
// microtask
// gen start
// first end
// timeout
// immediate
// gen end
// promise in tick
// tick in timeout
// promise in timeout 
// timeout in tick