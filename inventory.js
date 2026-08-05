// Step 1: Declare empty inventory
let inventory = [];

// Step 2: Find product index
function findProductIndex(productName) {
  productName = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      return i;
    }
  }
  return -1; // not found
}

// Step 3: Add product
function addProduct(product) {
  let index = findProductIndex(product.name);
  if (index !== -1) {
    // product exists → update quantity
    inventory[index].quantity += product.quantity;
    console.log(product.name + " " + inventory[index].quantity + " updated");
  } else {
    // product not found → add new
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity
    });
    console.log(product.name + " added to inventory");
  }
}

// Step 4: Remove product
function removeProduct(productName, quantity) {
  let index = findProductIndex(productName);
  if (index === -1) {
    console.log(productName + " not found");
    return;
  }

  let product = inventory[index];

  if (product.quantity < quantity) {
    console.log("Not enough " + product.name + " available, remaining pieces: " + product.quantity);
  } else {
    product.quantity -= quantity;
    if (product.quantity === 0) {
      inventory.splice(index, 1); // remove product completely
      console.log(product.name + " removed from inventory");
    } else {
      console.log("Remaining " + product.name + " pieces: " + product.quantity);
    }
  }
}
