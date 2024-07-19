function useState(initialValue) {
    let state = initialValue;
    const getState = () => state;
    const setState = (newValue) => {
            state = newValue ;
    };
    return [getState, setState];
}

const [data, setdata] = useState();



function handleChange(value) {
    setdata(value)
}





document.getElementById('hii').addEventListener('input', () => {
    const da = data()
    console.log(da)
})

console.log(data())



//2023-12-19           