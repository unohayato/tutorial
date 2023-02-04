const person = {
  firstName: "Tarou",
  lastName: "Nipon",
  age: 20,
  gender: "male",
  interest: [
    {
      name: "programing",
      emoji: "💻",
    },

    {
      name: "soccer",
      emoji: "⚽️",
    },
  ],

  greeting: function () {
    console.log("Hi! I'm " + this.firstName + " " + this.lastName);
  },

};

module.exports = person;
