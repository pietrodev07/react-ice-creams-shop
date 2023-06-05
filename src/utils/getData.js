const getData = async (url, setIsLoading, setIsError, setIceCreams, setIceCreamsSelected, setCategories) => {

  setIsLoading(true);
  setIsError(false);

  try {

    const response = await fetch(url);
    const result = await response.json();

    const categories = Array.from(new Set(result.data.map(category => category.category)));
    categories.unshift("all");

    setIceCreams(result.data);
    setIceCreamsSelected(result.data);
    setCategories(categories);
    setIsLoading(false);

  } catch (error) {

    setIsError(true);
    setIsLoading(false);

  }

}

export default getData