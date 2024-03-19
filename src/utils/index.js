const getInitialData = () => [
  {
    id: 1,
    title: "NOTE",
    body: "Testing Catatan Successfully",
    createdAt: "2024-03-14T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
