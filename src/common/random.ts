//Get's number between 0 and box count
function GetRandomNumber(boxCount: number) {
  return Math.floor(Math.random() * boxCount);
}

export default GetRandomNumber;
