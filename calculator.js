function proiz(){
    const check = /^[1-9][0-9]*$/;
    let num1, num2, num3;
    num1 = document.getElementById("n1").value;
    num1=parseInt(num1);
    num2 = document.getElementById("n2").value;
    num2=parseInt(num2);
    num3=num1*num2;

    if (!check.test(num1)|| !check.test(num2)) {
        alert('Вы сделали что-то не так!');
        document.getElementById('out').innerHTML="Произошла ошибка!";
    }
    else{
        document.getElementById('out').innerHTML=num3;
    }
}
  
window.addEventListener('DOMContentLoaded', function()  {
    console.log("DOM fully loaded and parsed");

    let buttonProiz = document.getElementById("proiz");
    buttonProiz.addEventListener("click",proiz);
});



function updatePrice() {
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  let quantity = Number(document.getElementById('select_input').value);
  let check_div_Div = document.querySelectorAll('#check_div input');
  check_div_Div.forEach(function (checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) { price += propPrice; }
    }
  });
  let radio_options = document.getElementsByName('radio_options');
  let k = 0;
  radio_options.forEach(function (radio) {
    if (radio.checked) {
      let optionPrice = prices.radio_options[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;

      }
    }
  });


  let cou = document.getElementById('select_input');
  cou.addEventListener('input', function () { updatePrice(); });
  let s = document.getElementsByName('type');
  s[0].addEventListener('change', function (event) {
    let select = event.target;
    let radio_div = document.getElementById('radio_div');
    let check_div = document.getElementById('check_div');
    if (select.value === '1') {
      radio_div.style.display = 'none';
      check_div.style.display = 'none';
      radio_id();
      check_div_hide();
      document.getElementById('price2').innerHTML =
        'ИТОГО: ' + prices.prodTypes[0] * quantity + 'РУБ';
    }
    else if (select.value === '2') {
      check_div_hide();
      radio_div.style.display = 'block';
      check_div.style.display = 'none';
      document.getElementById('price2').innerHTML =
        'ИТОГО: ' + prices.prodTypes[1] * quantity + 'РУБ';
    }
    else if (select.value === '3') {
      radio_div.style.display = 'none';
      check_div.style.display = 'block';
      radio_id();
      document.getElementById('price2').innerHTML =
        'ИТОГО: ' + prices.prodTypes[2] * quantity + 'РУБ';
    } else {
    }
  });
  let price_pr = document.getElementById('price2');
  price_pr.innerHTML = 'ИТОГО: ' + price * quantity + 'РУБ';
}
function getPrices() {
  return {
    prodTypes: [229, 299, 269],
    radio_options: {
      delivery: 100,
      taxi: 200,
      deepcosmos: 300,
    },
    prodProperties: {
      seats: 70,
      engine: 128,
      spaceship: 15,
    },
  };
}
let elm = document.getElementById('radio_id');
elm.style.display = 'none';
function radio_id() {
  elm.checked = !elm.checked;
}
function check_div_hide() {
  document.getElementById('seats').checked = false;
  document.getElementById('engine').checked = false;
  document.getElementById('spaceship').checked = false;
}



window.addEventListener('DOMContentLoaded', function () {



  let radioDiv = document.getElementById('radio_div');
  radioDiv.style.display = 'none';

  let check_div = document.getElementById('check_div');
  check_div.style.display = 'none';

  let s = document.getElementsByName('type');
  let select = s[0];

  select.addEventListener('change', function () {
    updatePrice();
  });
  let radio_options = document.getElementsByName('radio_options');
  radio_options.forEach(function (radio) {
    radio.addEventListener('change', function () { updatePrice(); });
  });
  let sniper_option = document.querySelectorAll('#check_div input');
  sniper_option.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () { updatePrice(); });
  });
  updatePrice();
});