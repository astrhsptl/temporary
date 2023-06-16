const serverDomainName = "http://127.0.0.1:8000";

async function get_all(skip=0, limit=100){
    let data = await axios.get(`${serverDomainName}/shop/?skip=${skip}&limit=${limit}`)
    .then(
        response => {
            console.log(response.data);
            console.log(response.status);
    })
    .catch(
        error => console.log("somthings wrong")
    )
}

async function get_by_id(){
    let inputedID = getIntegerDataFromForm("id")

    let data = await axios.get(`${serverDomainName}/shop/${inputedID}`)
    .then(
        response => {
            console.log(response.data);
            console.log(response.status);
    })
    .catch(
        error => console.log("somthings wrong")
    )
}


async function create_shop(event) {
    event.preventDefault()

    let shopName = document.getElementById("createShopName").value
    let shopAddress = document.getElementById("createShopAddress").value


    await axios.post(`${serverDomainName}/shop/create`, {
        "name": shopName,
        "address": shopAddress,
    })
    .then(
        response => {
            console.log(response.data);
            console.log(response.status);
    })
    .catch(
        error => console.log("somthings wrong")
    )
}



async function update_shop(event) {
    event.preventDefault()

    let inputedID = getIntegerDataFromForm("updateID")
    let shopName = document.getElementById("updateShopName").value
    let shopAddress = document.getElementById("updateShopAddress").value


    await axios.put(`${serverDomainName}/shop/update/${inputedID}`, {
        "name": shopName,
        "address": shopAddress,
    })
    .then(
        response => {
            console.log(response.data);
            console.log(response.status);
    })
    .catch(
        error => console.log("somthings wrong")
    )
}

async function delete_shop(event){
    event.preventDefault()

    let inputedID = getIntegerDataFromForm("shopID")

    let data = await axios.delete(`${serverDomainName}/shop/delete/${inputedID}`)
    .then(
        response => {
            console.log(response.data);
            console.log(response.status);
    })
    .catch(
        error => console.log("somthings wrong")
    )
}


// await axios.<тип запроса>('url', data={...}).then(result=>{...}).catch(error={...})


function getIntegerDataFromForm(inputId) {
    return parseInt(document.getElementById(inputId).value)   

}