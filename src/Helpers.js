class Helpers {
  // replaces spaces with '+' to match giphy syntax
  static removeSpaces(str) {
    return (str = str.replace(' ', '+'));
  }
}

export default Helpers;
