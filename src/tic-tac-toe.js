class TicTacToe {
  constructor() {
    this.X = "x";
    this.O = "o";
    this.currentPlayerSymbol = this.X;
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] == null) {
      this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol =
        this.currentPlayerSymbol == this.X ? this.O : this.X;
    }
  }

  isFinished() {
    return this.getWinner() != null || this.isDraw();
  }

  getWinner() {
    const checkLines = (symbol) =>
      [0, 1, 2].some((line) =>
        this.matrix[line].every((cell) => cell == symbol)
      );
    const checkColumns = (symbol) =>
      [0, 1, 2].some((column) =>
        [0, 1, 2].every((index) => this.matrix[index][column] == symbol)
      );
    const checkFirstDiagonal = (symbol) =>
      [0, 1, 2].every((index) => this.matrix[index][index] == symbol);
    const checkSecondDiagonal = (symbol) =>
      [0, 1, 2].every((index) => this.matrix[index][2 - index] == symbol);
    const checkSymbol = (symbol) =>
      checkLines(symbol) ||
      checkColumns(symbol) ||
      checkFirstDiagonal(symbol) ||
      checkSecondDiagonal(symbol);
    return checkSymbol(this.X) ? this.X : checkSymbol(this.O) ? this.O : null;
  }

  noMoreTurns() {
    return !this.matrix.flat().some((cell) => cell == null);
  }

  isDraw() {
    return this.noMoreTurns() && this.getWinner() == null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
