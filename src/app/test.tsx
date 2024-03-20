describe("Test", () => {
  it("should render", () => {
    const sum = (a: number, b: number) => a + b;
    expect(sum(1, 2)).toBe(3);
  });
  it("should fail", () => {
    expect(1).toBe(2);
  });
});
