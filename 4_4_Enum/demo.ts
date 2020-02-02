// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// };

// enum Status {
//   OFFLINE = 1,
//   ONLINE,
//   DELETED
// }
// 如果 ONLINE = 4 则 DELETE 是 5
// console.log(Status); :
// { '1': 'OFFLINE',
//   '2': 'ONLINE',
//   '3': 'DELETED',
//   OFFLINE: 1,
//   ONLINE: 2,
//   DELETED: 3 }

enum Status {
  OFFLINE,
  ONLINE,
  DELETED
}

console.log(Status[0]); // OFFLINE

function getResult(status) {
  if (status === Status.OFFLINE) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted';
  }
  return 'error';
}

const result = getResult(Status.OFFLINE);

console.log(result);
