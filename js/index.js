const scheduleCont = document.getElementsByClassName("schedule")[0];

const c = (tag, attrs = {}, children = []) => {
  const elem = document.createElement(tag);
  for (const [attr, value] of Object.entries(attrs)) {
    if (attr === "textContent") {
      elem.textContent = value;
    } else {
      elem.setAttribute(attr, value);
    }
  };
  children.forEach(child => {
    elem.appendChild(child);
  });
  return elem;
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satday",  
];

// Converts 24hr time to am/pm time
const timeConvert = (time) => {
  if (!Number.isInteger(+time) || time < 0 || time > 2359) {
    console.error("A non-24hr time was attemped conversion:", time);
    return;
  }
  time = (typeof time === "string") ? time : time.toString();
  const [hr, min, m] = [time.slice(0,2) % 12, time.slice(2), (time.slice(0,2) < 12) ? "am" : "pm"];
  const newTime = `${hr}:${min}${m}`;
  return newTime;
};

const writeTimeRange = (timeRange) => {
  return `${timeConvert(timeRange.start)} - ${timeConvert(timeRange.end)}`;
};

const createSchedule = () => {
  const table = c("table", {class: "schedule"});

  for (const [teacher, classes] of Object.entries(schedule)) {
    const titleRow = c("tr", {class: "newSet"}, [
      c("th", {class: "teacher", colspan: 4, textContent: teacher})
    ]);
    table.appendChild(titleRow);

    classes.forEach((classe, i) => {

      const date =  new Date(`20${classe.dates[0].split(/\./g).reverse().join("-")}T${classe.time.start.toString().slice(0, 2)}:${classe.time.start.toString().slice(2)}:00`);

      const subTitleRow = c("tr", {}, [
	c("th", {class: "day", colspan: 4, textContent: days[date.getDay()] + "s"})
      ]);
      table.appendChild(subTitleRow);

/*
      classe.dates.forEach(date => {
	const dateRow = c("tr", {colspan: 4}, [
	  c("th", {class: "dates", textContent: date.split(/\./g).join("/")})
	]);
	table.appendChild(dateRow);
      });
*/
      const infoRow = c("tr", {class: i===classes.length-1 ? "newSet" : ""}, [
	c("td", {class: "time", textContent: writeTimeRange(classe.time)}),
	c("td", {class: "studio", textContent: classe.studio}),
	c("td", {class: "level", textContent: classe.classType}),
	c("td", {class: "cost", textContent: "$" + classe.cost}),
      ]);
      table.appendChild(infoRow);
    });
  }

  scheduleCont.appendChild(table);
};

createSchedule();