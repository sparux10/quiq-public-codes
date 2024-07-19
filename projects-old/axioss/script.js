async function getdata(){
    let res = await axios.get('http://localhost/api/users.php') 
    let data = res.data
    var tbody = document.getElementById('tb')
    data.forEach((user, index) => {
        var tr = document.createElement('tr')
        var tdi = document.createElement('td')
        var tdn = document.createElement('td')
        var tde = document.createElement('td')
        var tdc = document.createElement('td')

        tdi.innerText = index+1
        tdn.innerText = user.name
        tde.innerText = user.email
        tdc.innerText = user.created_at

        tr.appendChild(tdi)
        tr.appendChild(tdn)
        tr.appendChild(tde)
        tr.appendChild(tdc)

        tbody.append(tr)
    });
}


getdata()