let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    hobby: "Reading a Book",
    }

const primary = {name: "Leanne Graham", email: "Sincere@april.biz" };
const secondary = {hobby: "Reading a Book"};

const biodata = {...primary, ...secondary};
    console.log(biodata)

const address = {street: "Kulas Light", city: "Gwenborough",}
const {street, city} = address

console.log(street)
console.log(city)