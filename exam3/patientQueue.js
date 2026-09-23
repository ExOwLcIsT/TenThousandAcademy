function admitPatient(queue, patient) {
  let left = 0;
  let right = queue.length;
  let i = 0;
  while (left < right) {
    i = Math.floor((left + right) / 2);
    if (i === left || i === right) {
      if (queue[left].priority >= patient.priority) {
        i = right;
      } else {
        i = left;
      }
      break;
    }
    if (queue[i].priority > patient.priority) {
      left = i;
    } else {
      right = i;
    }
  }
  queue.splice(i, 0, patient);
}

const queue = [];
admitPatient(queue, { name: "Alice", priority: 3 });
admitPatient(queue, { name: "Bob", priority: 8 });
admitPatient(queue, { name: "Carol", priority: 5 });
admitPatient(queue, { name: "Dave", priority: 1 });

console.log(queue.map((p) => p.priority)); // [8, 5, 3, 1]
