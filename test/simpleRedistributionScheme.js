const SRS = artifacts.require("./SimpleRedistributionScheme.sol");

contract("SimpleRedistributionScheme", accounts => {
  it("...should store the value 89.", async () => {
    const srs = await SRS.deployed();

    // Get stored value
    const total = await srs.totalRaised;

    // Set value of 89
    await srs.contribute({ value: 10000, from: accounts[0] });

    assert.equal(total, total + 10000, "The value 89 was not stored.");
  });
});
