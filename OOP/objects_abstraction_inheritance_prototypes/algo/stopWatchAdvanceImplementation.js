function StopWatch() {
  /**
   * 2 problems
   * 1: we need to keep our abstraction intact, so no one get access
   *    to our processing variables and modify it
   * 2: We need to make the abstracted variabled accessible to the constructors
   *
   * SOLUTION: Create a read-only variables that return the abstracted values
   *    BUT UNFORTUNATELY, you will not be able to modify them
   *    and end up exposing our varibales whhich is dangerous and bad practise
   *
   * BEST SOLUTION: Probably define a read-only method that:
   *        1: takes two parameter (abstracted variable to modify and its value)
   *        2: Do the modification
   *    THEN, define read-only properties to read back these values
   *
   * BUT AT THE END OF THE DAY, too much complexity and even there is now a leak
   * COs with my implementation, this.updateValues is accessible from outside
   * thou more difficult...lol
   * and user can modify any value easily... So, Abstraction is degraded
   * So, it depends on your Application if you need this or not
   */

  let processValues = {
    startTime: 0,
    stopTime: 0,
    running: false,
    duration: 0,
  };

  Object.defineProperty(this, "startTime", {
    get: function () {
      return processValues.startTime;
    },
  });
  Object.defineProperty(this, "stopTime", {
    get: function () {
      return processValues.stopTime;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return processValues.running;
    },
  });
  Object.defineProperty(this, "duration", {
    get: function () {
      return processValues.duration;
    },
  });

  Object.defineProperty(this, "updateValues", {
    set: function (input) {
      const [ppt, value] = input;
      processValues[ppt] = value;
    },
  });
}

StopWatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch already started");

  this.updateValues = ["startTime", Date.now()];
  this.updateValues = ["running", true];
};

StopWatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not started");

  const stopTime = Date.now();

  const newDuration =
    this.duration + (Number(stopTime) - Number(this.startTime)) / 1000;
  this.updateValues = ["stopTime", Date.now()];
  this.updateValues = ["running", false];
  this.updateValues = ["duration", newDuration];
};

StopWatch.prototype.reset = function () {
  this.updateValues = ["running", false];
  this.updateValues = ["duration", 0];
};

const myStopWatch = new StopWatch();
