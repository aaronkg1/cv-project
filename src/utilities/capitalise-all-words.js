import _ from "lodash";

function capitalise(string) {
  const splitString = string.toLowerCase().split(" ");
  const capitalisedArray = [];

  for (let i = 0; i < splitString.length; i++) {
    const capitalisedWord = _.capitalize(splitString[i]);
    capitalisedArray.push(capitalisedWord);
  }
  return capitalisedArray.join(" ");
}

export default capitalise;
