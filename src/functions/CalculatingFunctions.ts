import { LoadoutType, LoadoutEntryType } from "../App";

export const calculateLoadout = (
  barWeight: number,
  targetWeight: string,
  availablePlates: number[]
): LoadoutType => {
  console.log("triggered");

  let calcWeight = (+targetWeight - barWeight) / 2;
  const sortedPlates = availablePlates.sort((a, b) => b - a);
  let resultArr: LoadoutType = [];

  sortedPlates.forEach((plate) => {
    let newEntry: LoadoutEntryType = {
      plate: plate,
      amountPerSide: 0,
    };

    if (calcWeight >= plate) {
      let plateAmount = Math.floor(calcWeight / plate);
      newEntry.amountPerSide = plateAmount;

      calcWeight -= plate * plateAmount;
    }
    resultArr.push(newEntry);
  });

  return resultArr;
};
