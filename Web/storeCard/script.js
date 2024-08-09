fetch("https://google.com")
.then(res => res.json() )
.then(data => console.log(data))






















/* const selected = [
    { color_id: 2, size_id: 1 },
    { color_id: 3, size_id: 2 },
    { color_id: 5, size_id: 10 }
]

const form = new FormData();
form.append("name", "amine");
form.append("age", 15);
form.append("cs", JSON.stringify(selected));

fetch("http://127.0.0.1:8000/api/", {
    method: 'POST',
    body: form,
    "Content-Type": "application/json"
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

 */





/* fetch("http://localhost:8000/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        const results = data.results

        const card = results.map((items,index) => {
            return `
                <div class="card">
                        <div class="img">
                            <img src="./aceface.jpg" alt="">
                            ${items.discount !==0 ? `<div class="disc">${items.discount}%</div>` : " "}
                            
                        </div>
                        <div class="f_line">
                            <div class="name">${items.name}</div>
                        <div class="price">${items.price}<strong>MAD</strong></div>
                        </div>
                        <div class="rate"> ${items.ratings}<img src="./starpng.png" alt=""></div>
                        <div class="brand">${items.brand}</div>
                        <p class="desc">${items.description}</p>
                        <div class="btns">
                            <button class="order">Order now</button>
                            <button class="cart">Add to cart</button>
                        </div>
                    </div>
            `
        })
        console.log()
        
        const cards = document.getElementById('az')
        
        cards.innerHTML = (card)

    }
    )
    .catch(error => console.error('Error fetching data:', error));


 */

/* */
