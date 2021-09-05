export default function apiService(searchQuery, page, perPage) {
  const myKey = "22353815-5fa21056c210e4ef7062efe69";
  //console.log("page", page, searchQuery);
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${myKey}`
  ).then((response) => response.json());
}
