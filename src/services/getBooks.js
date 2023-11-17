export const getBooks = async () => {
  const result = await fetch('');
  if (result.ok) {
    console.log('При получении списка книг возникла ошибка');
  }

  return result.json();
};
