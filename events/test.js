const EventEmitter = require("events");

class OrderProcessor extends EventEmitter {
  process(order) {
    this.emit("started", order.id);

    try {
      // якась логіка обробки
      const result = { ...order, status: "done" };
      this.emit("completed", result);
    } catch (err) {
      this.emit("error", err);
    }
  }
}

const processor = new OrderProcessor();

processor.on("started", (id) =>
  console.log(`Обробка замовлення ${id} почалась`),
);
processor.on("completed", (order) => console.log("Завершено:", order));
processor.on("error", (err) => console.error("Помилка:", err.message));

processor.process({ id: 42 });

function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

// Function to be throttled
function printMessage() {
  console.log("Function executed at", new Date().toLocaleTimeString());
}

// Create throttled version
const throttledPrint = throttle(printMessage, 5000);

// Call it repeatedly
setInterval(throttledPrint, 1000);
