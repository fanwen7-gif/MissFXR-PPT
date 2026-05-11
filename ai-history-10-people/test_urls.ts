import https from 'https';

const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/8/84/Geoffrey_Hinton_at_UBC.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/25/Yann_LeCun_-_2018_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/13/Fei-Fei_Li_2018.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/19/Demis_Hassabis_Royal_Society.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/64/Ilya_Sutskever_2023.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c4/Jensen_Huang_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8a/Sam_Altman_in_2023.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Andrej_Karpathy.jpg'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(url.split('/').pop() + ': ' + res.statusCode);
  });
});
