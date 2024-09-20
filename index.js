function check(event) {
  const classes = event.classList;
  if (classes.contains("check")) {
    return false;
  } else {
    classes.add("check");
    return true;
  }
}

function mark(event) {
  if (check(event)) {
    event.classList.add("bg-[#1DD100]", "text-white");
    return true;
  } else {
    return false;
  }
}

const coupon = document.getElementById("coupon");
const couponbtn = document.getElementById("couponbtn");

coupon.disabled = true;
couponbtn.classList.add("btn-disabled", "bg-[#D5D6D9]", "text-[#B0B3B9]");

function unlock() {
  coupon.disabled = false;
  couponbtn.classList.remove("btn-disabled", "bg-[#D5D6D9]", "text-[#B0B3B9]");
}

function getOff(value) {
  const newbill =
    parseInt(document.getElementById("totalbill").innerText) *
    ((100 - value) / 100);
  document.getElementById("grandbill").innerText = newbill;
}

function checkCoupon() {
  const coupontext = coupon.value.trim();

  coupon.value = "";
  if (coupontext === "NEW15") {
    getOff(15);
  } else if (coupontext === "Couple 20") {
    getOff(20);
  } else {
    alert("The coupon is not correct");
  }
}

couponbtn.addEventListener("click", checkCoupon);

let count = 0;

function changetotalbill() {
  const bill = parseInt(document.getElementById("totalbill").innerText);
  document.getElementById("totalbill").innerText = bill + 550;
  document.getElementById("grandbill").innerText = bill + 550;
}

function buttonClicked(event) {
  if (count > 3) {
    return;
  }
  if (!mark(event)) {
    // alert("You already selected the seat");
    return;
  }

  count++;
  if (count === 4) {
    unlock();
  }
  document.getElementById("noseat").classList.add("hidden");
  const newLi = document.createElement("li");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p1.innerText = event.innerText;
  p2.innerText = "Economy";
  p3.innerText = "550";
  newLi.appendChild(p1);
  newLi.appendChild(p2);
  newLi.appendChild(p3);
  newLi.classList.add("flex", "items-center", "justify-between");
  let seat = parseInt(document.getElementById("leftsit").innerText);
  seat--;
  document.getElementById("leftsit").innerText = seat;
  document.getElementById("classlist").appendChild(newLi);
  changetotalbill();
}
