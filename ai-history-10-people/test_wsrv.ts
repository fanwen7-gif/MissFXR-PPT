import https from 'https';

const url = 'https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/8/84/Geoffrey_Hinton_at_UBC.jpg';

https.get(url, (res) => {
  console.log('Status: ' + res.statusCode);
});
