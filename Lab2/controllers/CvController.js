const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  experience = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experience = JSON.parse(String(experience));

  language = fs.readFileSync("data/language", { encoding: "utf-8" });
  language = JSON.parse(String(language));

  skill = fs.readFileSync("data/skill", { encoding: "utf-8" });
  skill = JSON.parse(String(skill));

  edus = [];
  exp = [];
  lang = [];
  sk = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  for (let key in experience) {
    exp.push(experience[key]);
  }

  for (let key in language) {
    lang.push(language[key]);
  }

  for (let key in skill) {
    sk.push(skill[key]);
  }

  res.render("cv", { name: "Taszid Izaz", educations: edus , experience : exp , language : lang , skill : sk });
};

module.exports = { getCV: getCV };
