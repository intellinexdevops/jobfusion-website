class RandomColor {
  private static colors: string[] = [
    "#00BF6310",
    "#325FBF10",
    "#595AD310",
    "#FD942610",
  ];
  static generate(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
}

export default RandomColor;
