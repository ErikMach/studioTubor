const schedule = {
  "Fenella": [
    { // Mondays
      studio: "Dance102",
      classType: "B/E",
      cost: "",
      time: {
	start: 1000,
	end: 1130
      },
      dates: [
	"31.10.22",
	"07.11.22",
	"14.11.22"
      ]
    },
    { // Thursdays
      studio: "Dance102",
      classType: "First Steps Centre & Pointe",
      cost: "",
      time: {
	start: 1900,
	end: 2100
      },
      dates: [
	"03.11.22",
	"10.11.22",
	"17.11.22"
      ]
    }
  ],

  "Mitch": [
    { // Mondays
      studio: "Dance102",
      classType: "B/E",
      cost: 20,
      time: {
	start: 1915,
	end: 2045
      },
      dates: [
	"07.11.22",
	"14.11.22",
	"21.11.22",
	"28.11.22",
	"05.12.22",
	"12.12.22",
	"19.12.22",
	"26.12.22"
      ]
    },
    { // Wednesdays
      studio: "Dance102",
      classType: "B/E",
      cost: 20,
      time: {
	start: 1830,
	end: 2000
      },
      dates: [
	"02.11.22",
	"09.11.22",
	"16.11.22",
	"23.11.22",
	"30.11.22",
	"07.12.22",
	"14.12.22",
	"21.12.22",
	"28.12.22"
      ]
    },
  ]
};

const studios = {
  "Dance102": {
    address: "575 Pacific Highway, St Leonards",
    mapLink: "https://goo.gl/maps/M5HZtic5qryAez4DA",
    phone: "(02) 9437 3900"
  },
  "Evolution Performance Centre": {
    address: "1/15 Falcon St, Crows Nest",
    mapLink: "https://maps.app.goo.gl/JsF8RcD1rySwb6Kj6",
    phone: "0433 124 068"
  }
};

const classTypes = {
  "B": {
    fullName: "Beginner",
    description: "For dancers with solid base knowledge"
  },
  "B/E": {
    fullName: "Beginner/Elementry",
    description: "For medium-ability dancers"
  }
};