const fs = require('fs');

const tryCatch = (f) => {
  try {
    f();
  } catch (e) {
    for(var k of Object.keys(e)){
      console.log(e[k]);
    }
  }
}

(async () => {
/*try{ */
await fs.promises.writeFile('/tmp11/0216k.txt', "test")
/*
}catch(e){
  console.log('-------------------');
  for(var k of Object.keys(e)){
  console.log(e[k]);
  }
  console.log('-------------------');
}
*/
})();
