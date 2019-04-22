class Helpers {
  static removeSpaces(str) {
    // replaces spaces with '+' to match giphy syntax
    return (str = str.replace(' ', '+'));
  }
}

export default Helpers;
