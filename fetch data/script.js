const url = "https://youtu.be/omewjiYaZZU?si=vR0yY4g9fOKlVOpS"

fetch(url)
.then(data => console.log(data))






/* function updateProduct() {
    const formData = new FormData();
    formData.append('category_img', document.getElementById('file').files[0]);
    formData.append('name', 'new data 110')
    formData.append('description', 'super test 03')
    axios.put('http://localhost:8000/api/category/update/13', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : 'Bearer token is a secret bro!'
        }
    })
    .then(response => {
        console.log(response);
        // Handle success
    })
    .catch(error => {
        console.error(error);
        // Handle error
    });
    console.log(formData)
}
 */