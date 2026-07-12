function generatePassword(length) {
  // The pool of allowed characters
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let generatedResult = "";

  // Loop as many times as the requested length
  for (let i = 0; i < length; i++) {
    // Generate a random whole number index between 0 and chars.length - 1
    const randomIndex = Math.floor(Math.random() * chars.length);
    
    // Grab the character at that index and add it to our result
    generatedResult += chars[randomIndex];
  }

  return generatedResult;
}

// Define the variable and call the function with a desired length (e.g., 14)
const password = generatePassword(14);

// Log the final concatenated message
console.log("Generated password: " + password);