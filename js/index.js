const scheduleCont = document.getElementsByClassName("schedule")[0];

const c = (tag, attrs = {}, children = []) => {
  const elem = document.createElement(tag);
  for (const [attr, value] of Object.entries(attrs)) {
    if (["textContent", "innerHTML", "outerHTML"].includes(attr)) {
      elem[attr] = value;
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
  "Saturday",  
];

// Equates arrays of strings
const arrayOfStrEq = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.error("Non-array passed to array equator", arr1, arr2);
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i=0; i<arr1.length; i++) {
    if (typeof arr1[i] !== "string") {
      console.error("Non-string-array", arr1);
      return false;
    }
    if (typeof arr2[i] !== "string") {
      console.error("Non-string-array", arr2);
      return false;
    }
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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


const createScheduleTeacher = () => {
  const table = c("table", {class: "schedule"});

  let i = -1;
  for (const [teacher, classes] of Object.entries(schedule)) {
    i++;
    const titleRow = c("tr", {class: "newSet"}, [
      c("th", {class: "teacher", colspan: 4, textContent: teacher, style: `background-color:hsl(${i * 0}deg 100% 88%)`})
    ]);
    table.appendChild(titleRow);

    classes.forEach((classe, i) => {
      if (classes[i-1]?.day !== classe.day || !arrayOfStrEq(classes[i-1]?.dates, classe.dates)) {
        let datesStr = days[classe.day] + "s" + "&emsp;<span class='noBold'>(";
        datesStr += (classe.dates.length === 1) ? `from ${classe.dates[0].split(/\./g).join("/")}` : `${classe.dates[0].split(/\./g).join("/")} to ${classe.dates[classe.dates.length-1].split(/\./g).join("/")}`;
        datesStr += ")</span>";

        const subTitleRow = c("tr", {}, [
	  c("th", {class: "day", colspan: 4, innerHTML: datesStr})
        ]);
        table.appendChild(subTitleRow);
      }
      const infoRow = c("tr", {class: i===classes.length-1 ? "newSet" : ""}, [
	c("td", {class: "time", textContent: writeTimeRange(classe.time)}),
	c("td", {class: "studio", innerHTML: `<a href="${studios[classe.studio].mapLink}" target="_blank">${classe.studio}</a>`, title: studios[classe.studio].address}),
	c("td", {class: "level", textContent: classe.classType}),
	c("td", {class: "cost", textContent: "$" + classe.cost}),
      ]);
      table.appendChild(infoRow);
    });
  }

  scheduleCont.appendChild(table);
};

createScheduleTeacher();