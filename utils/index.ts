export const formatDate = (date) =>
  new Date(date).toLocaleDateString(["ru-ru"], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
