export const firstLast = (items) => {
  if (items.length === 0) {
    return `No items!`;
  } else if (items.length === 1) {
    return `Only item: ${items[0]}`;
  } else return `First: ${items[0]}, Last: ${items[items.length - 1]}`;
};

// ['a','b','c','d','e'] To test this we minus
