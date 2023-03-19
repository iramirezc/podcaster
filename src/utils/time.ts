export const T24Hours = 24 * 60 * 60 * 1000;

export const isWithin24Hours = (time: number) => {
  const period = Date.now() + T24Hours;

  return time <= period;
};
