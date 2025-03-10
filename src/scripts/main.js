AOS.init();

const eventDate = new Date("Jun 12, 2025 19:00:00");
const eventTimeStamp = eventDate.getTime();

const countDown = setInterval(function () {
  const now = new Date();
  const currentTimeStamp = now.getTime();

  const timeUntilEvent = eventTimeStamp - currentTimeStamp;

  const dayInMs = 1000 * 60 * 60 * 24;
  const hourInMs = 1000 * 60 * 60;
  const minuteInMs = 1000 * 60;

  const daysUntilEvent = Math.floor(timeUntilEvent / dayInMs);
  const hoursUntilEvent = Math.floor((timeUntilEvent % dayInMs) / hourInMs);
  const minutesUntilEvent = Math.floor(
    (timeUntilEvent % hourInMs) / minuteInMs
  );
  const secondsUntilEvent = Math.floor((timeUntilEvent % minuteInMs) / 1000);

  document.getElementById(
    "counter"
  ).innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

  if (timeUntilEvent < 0) {
    clearInterval(countDown);
    document.getElementById("counter").innerHTML = "Event expired";
  }
}, 1000);
