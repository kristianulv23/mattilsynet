const formatDate = (date) => {
  const day = date.match(/.{4}/g)[0].match(/.{2}/g)[0];
  const month = date.match(/.{4}/g)[0].match(/.{2}/g)[1];
  const year = date.match(/.{4}/g)[1];

  return `${day}.${month}.${year}`
}

export default formatDate;
