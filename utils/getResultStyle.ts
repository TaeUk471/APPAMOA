export const getResultStyle = (result: number) => {
  if (result < 60) {
    return { color: "red", message: "Severity" };
  } else if (result < 80) {
    return { color: "orange", message: "Caution" };
  } else {
    return { color: "green", message: "Stable" };
  }
};
