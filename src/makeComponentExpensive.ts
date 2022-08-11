export const makeComponentExpensive = (cost = 10) => {
  const now = performance.now();
  while (performance.now() - now < cost) {}
};

export default makeComponentExpensive;
