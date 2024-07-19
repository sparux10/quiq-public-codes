function updateProduct() {
    const formData = new FormData();
    formData.append('categoury_img', document.getElementById('file').files[0]);
    formData.append('name', 'new data 110')
    formData.append('description', 'super test 03')
    axios.put('http://localhost:8000/api/category/update/13', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwNTA3NDI2LCJpYXQiOjE3MTk2NDM0MjYsImp0aSI6ImJlNDNmM2YzOTM5ZDQwNzdhODQyMmQyMGIzZjUwNzZiIiwidXNlcl9pZCI6Mn0.R1zaa3fhY8UFjDqeAEfFUCe0Fw3tve9jGsr3DdgcGik'
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
