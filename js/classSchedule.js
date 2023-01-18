const schedule = {
  "Julia": [
    { // Thursdays
      day: 4,
      studio: "TBC",
      classType: "First Steps Barre & Centre",
      cost: 25,
      time: {
	start: 1900,
	end: 2000
      },
      dates: [
	"19.01.23"
      ]
    },
    { // Thursdays
      day: 4,
      studio: "TBC",
      classType: "FS/B Pointe",
      cost: 25,
      time: {
	start: 2000,
	end: 2045
      },
      dates: [
	"19.01.23"
      ]
    }
  ],
  "Ellena": [
    { // Tuesdays
      day: 2,
      studio: "Dance102",
      classType: "B/E",
      cost: 25,
      time: {
	start: 1900,
	end: 2030
      },
      dates: [
	"17.01.23",
	"07.03.23"
      ]
    },
    { // Tuesdays
      day: 2,
      studio: "Dance102",
      classType: "Beginner Pointe",
      cost: 10,
      time: {
	start: 2030,
	end: 2100
      },
      dates: [
	"17.01.23",
	"07.03.23"
      ]
    }
  ],
  "Cathie": [
    { // Tuesdays
      day: 2,
      studio: "Dance102",
      classType: "E",
      cost: 25,
      time: {
	start: 1200,
	end: 1330
      },
      dates: [
	"17.01.23"
      ]
    }
  ],
  "Mitch": [
    { // Mondays
      day: 1,
      studio: "Dance102",
      classType: "B/E",
      cost: 20,
      time: {
	start: 1830,
	end: 2000
      },
      dates: [
	"16.01.23"
      ]
    },
    { // Wednesdays
      day: 3,
      studio: "Dance102",
      classType: "B/E",
      cost: 20,
      time: {
	start: 1830,
	end: 2000
      },
      dates: [
	"16.01.23"
      ]
    }
  ],
  "Fabio": [
    { // Saturdays
      day: 6,
      studio: "TBC",
      classType: "B/I",
      cost: 22,
      time: {
	start: 1030,
	end: 1200
      },
      dates: [
	"21.01.23"
      ]
    }
  ],
  "Vadym": [
    { // Mondays
      day: 1,
      studio: "L.I.K.E.",
      classType: "B",
      cost: 20,
      time: {
	start: 1000,
	end: 1100
      },
      dates: [
	"16.01.23"
      ]
    },
    { // Tuesdays
      day: 2,
      studio: "Dance102",
      classType: "B",
      cost: 20,
      time: {
	start: 1000,
	end: 1130
      },
      dates: [
	"17.01.22"
      ]
    },
    { // Thursdays
      day: 4,
      studio: "Dance102",
      classType: "B",
      cost: 20,
      time: {
	start: 1000,
	end: 1130
      },
      dates: [
	"19.01.23"
      ]
    },
    { // Thursdays
      day: 4,
      studio: "Dance102",
      classType: "Workshop",
      cost: 20,
      time: {
	start: 1145,
	end: 1245
      },
      dates: [
	"19.01.23"
      ]
    }
  ]
};

const studios = {
  "Dance102": {
    address: "575 Pacific Highway, St Leonards",
    mapLink: "https://goo.gl/maps/M5HZtic5qryAez4DA",
    phone: "(02) 9437 3900"
  },
  "Evolution": {
    address: "1/15 Falcon St, Crows Nest",
    mapLink: "https://goo.gl/maps/88ShHQQw6Bd3R2LM7",
    phone: "0433 124 068"
  },
  "L.I.K.E.": {
    address: "6/7 Herbert St, St Leonards",
    mapLink: "https://goo.gl/maps/BDUu8bPE9VRmATW9A",
    phone: "(02) 9436 4599"
  },
  "TBC": {
    address: "Location not yet confirmed."
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

const teachers = {
  "Fenella": {
    fullName: "",
    image: "",
    pricePerClass: 25,
    paymentMethod: "cash"
  },
  "Ellena": {},
  "Fabio": {},
  "Mitch": {}
};