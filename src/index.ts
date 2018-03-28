import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((request, response) => {
  console.log(request.foo);
  console.log(request.user);
});
