const baseyianForm = (review_count, rating) => {
  return (review_count * rating) / (review_count + 1);
};

const baseyianSort = (a, b) => {
  if (
    baseyianForm(a.review_count, a.rating) <
    baseyianForm(b.review_count, b.rating)
  )
    return -1;
  if (
    baseyianForm(a.review_count, a.rating) >
    baseyianForm(b.review_count, b.rating)
  )
    return 1;
  return 0;
};

const sort = (a, b) => {
  if (a.rating < b.rating) return -1;
  if (a.rating > b.rating) return 1;
  return 0;
};

module.exports = { sort, baseyianSort };
