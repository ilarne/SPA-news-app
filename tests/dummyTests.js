describe("test1", function() {

  it("'String' contain with a 'tr'", function() {
    expect("string").toContain("tr")
  });

  it("array contain element", function() {
    expect([1,2,3]).toContain(2)
  });

});

describe("test2", function() {
  it("2+2 equal 4", function() {
    expect(2+2).isEqualTo(4)
  });

  it("fails false is not true", function() {
    expect(false).isTrue()
  });
});
