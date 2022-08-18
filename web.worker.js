self.addEventListener('message', (event) => {
  // console.log(event);
});

self.postMessage('worker is alive');
