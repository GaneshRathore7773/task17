const allservices = [
  {
    name: "Dry Cleaning",
    price: 200.0,
    image: "dryclining.jpg",
  },
  {
    name: "Laundry",
    price: 150.0,
    image: "washandfold.jpg",
  },
  {
    name: "Ironing",
    price: 100.0,
    image: "ironingimage.jpg",
  },
];
let currserviceidx = 0;
let cart = [];
let totalprice = 0;
const addbtn = document.querySelector("#additem");
console.log(addbtn);

addbtn.addEventListener("click", () => {
  let service = allservices[currserviceidx];
  // console.log(service);

  totalprice = totalprice + service.price;
  // console.log(totalprice);

  cart.push(service);
  updatecart();
});
const updatecart = () => {
  let itemlist = document.querySelector(".itemlist");
  itemlist.innerHTML = "";
  if (cart.length === 0) {
    itemlist.innerHTML = `<tr><td colspan="0">No Item Added</td></tr>`;
  } else {
    cart.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
    `;
      itemlist.appendChild(row);
    });
  }
  let ttlprice = document.querySelector("#ttlamount");
  ttlprice.textContent = totalprice;
};
const skipbtn = document.querySelector("#skipbtn");
// console.log(skipbtn);
skipbtn.addEventListener("click", () => {
  currserviceidx = (currserviceidx + 1) % allservices.length;
  updateservice();
});
function updateservice() {
  let service = allservices[currserviceidx];

  let serviceimg = document.querySelector(".dryclinimg");
  serviceimg.src = service.image;

  let servicename = document.querySelector("#sname");
  servicename.textContent = service.name;

  let serviceprice = document.querySelector("#sprice");

  serviceprice.textContent = service.price;
  console.log(serviceprice);
}
updateservice();
const bookbtn = document.querySelector("#bookbtn");
bookbtn.addEventListener("click", () => {
  const bookbtn = document.querySelector("#bookbtn");
  if (cart.length === 0) {
    alert("no item in the cart to book");
    return;
  }
  alert("booked successfully");
  cart = [];
  totalprice = 0;
  updatecart();
});
