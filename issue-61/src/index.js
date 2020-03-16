const { demo_proto } = require('./proto.js');

const payload = {
  id: 1,
  name: 'orangej',
};

const encodedPayload = demo_proto.Payload.encode(payload).finish();

const frame = {
  seqid: 1,
  payload: encodedPayload,
};

const encodedFrame = demo_proto.Frame.encode(frame).finish();

console.log('====================================start');
console.log('已完成encode');
console.log('encodedPayload: ', encodedPayload);
console.log('encodedFrame: ', encodedFrame);
console.log('====================================end');



const decodedFrame = demo_proto.Frame.decode(encodedFrame);
const decodedPayload = demo_proto.Payload.decode(encodedPayload);

console.log('====================================start');
console.log('已完成decode');
console.log('decodedFrame: ', decodedFrame);
console.log('decodedPayload: ', decodedPayload);
console.log('====================================end');