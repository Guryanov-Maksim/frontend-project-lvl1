export default (min = 1, max = 50) => (
  Math.floor(Math.random() * (max - min + 1) + min)
);
