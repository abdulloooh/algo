function StopWatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stop watch already started");

    startTime = Date.now();
    running = true;
  };

  this.stop = function () {
    if (!running) throw new Error("Stop watch is not started");

    stopTime = Date.now();
    duration += (Number(stopTime) - Number(startTime)) / 1000;
    running = false;
  };

  this.reset = function () {
    duration = 0;
    running = false;
  };

  //accessible durationValue has to be read-only
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const myStopWatch = new StopWatch();
