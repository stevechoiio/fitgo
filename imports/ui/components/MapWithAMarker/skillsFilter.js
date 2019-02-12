import { LocationListOfTrainers } from "./fakeData";

const skillsFilter = (selectedTags, fakeData) => {
  fakeData.filter(trainer => {
    trainer.skills.some(skill => selectedTags.includes(skill));
  });
};

console.log(skillsFilter(["yoga"], LocationListOfTrainers));
