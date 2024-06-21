// Import the buildModule function from the @nomicfoundation/hardhat-ignition/modules package.
// This function is used to define and build deployment modules for Hardhat.
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// Define a new deployment module named "TokenModule" using the buildModule function.
// The buildModule function takes two arguments:
// 1. The name of the module ("TokenModule").
// 2. A callback function that defines the contents of the module (moduleBuilder).
const TokenModule = buildModule("TokenModule", (moduleBuilder) => {
  // Within the callback function, define a new contract deployment named "Token".
  // The moduleBuilder.contract function registers the "Token" contract for deployment.
  const token = moduleBuilder.contract("Token");

  // Return an object containing the token deployment definition.
  // This allows other parts of the deployment script to access the deployed "Token" contract.
  return { token };
});

// Export the TokenModule object so it can be used in other parts of the Hardhat deployment scripts.
module.exports = TokenModule;
