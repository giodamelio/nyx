import ipfsApi from 'ipfs-api';

const ipfs = ipfsApi('localhost', 5001);

ipfs.cat('QmVdqk9w4eLXSLt9CHVhsmidAng3GweFGPyMqPedWz4gd1', function(err, result) {
  if (err) {
    console.error(err);
  }

  if(result.readable) {
    console.log('Streaming...');
    result.pipe(process.stdout);
  } else {
    console.log(result);
  }
});

