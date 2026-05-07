const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster",    price: 50,  category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor",    price: 150, category: "Electronics" }
];

const isEligible = (product) => {
  return product.category === "Electronics" && product.price > 200;
};

function applyPromo(cart, promoCallback) {
  let discountCount = 0;
  let totalSaving   = 0;

  const updatedCart = cart.map((product) => {
    if (promoCallback(product)) {
      const saving = product.price * 0.10;
      totalSaving   += saving;
      discountCount++;
      return { ...product, price: product.price - saving, isDiscounted: true };
    } else {
      return { ...product, isDiscounted: false };
    }
  });

  console.log(`Promotion applied! ${discountCount} items discounted for $${totalSaving}.`);

  return new Promise((resolve) => {
    setTimeout(() => resolve(updatedCart), 1000);
  });
}

applyPromo(cart, isEligible).then((result) => console.log(result));