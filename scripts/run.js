const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ['Todoroki', 'Deku', 'Bakugo'],
    [
      'QmegeHRScc2ogbi6BiS16KJQcHA44Sdh8PNrkvEwmzVjRw', // Images
      'QmbF26tEFDefAJhHmZ45v9KSJMJuQGupmspPE7ay5r8SDw',
      'Qmcks7hYfQLU82xSEzaugpxYmyUJAP12hJMoLEV79U4nr2',
    ],
    [300, 200, 200],
    [100, 80, 150],
    'Shigaraki Tomura',
    'QmZobNtWQyfRXfsL6NQfqLJJZmcQYDRDygfFNFqMV1AiWr',
    10000,
    50
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);
  let txn;

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.getAllPlayers();
  await txn.wait();
  console.log(txn);

  console.log('Done!');
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
