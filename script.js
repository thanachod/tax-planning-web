// alert('hi');
var income = 0
function getVal(){
    income = document.getElementById('income').value
    document.getElementById('income_bot').value = parseFloat(income).toFixed(2);

    checkTotal();
}

function checkTotal() {

    var tax_cb = document.querySelectorAll('input[name="tax"]:checked');
    
    var total = 0;
    for (var i = 0; i < tax_cb.length; i++) {
        total += parseFloat(tax_cb[i].value);
    }

    document.getElementById('total').value = total.toFixed(2);

    sum = parseFloat(income) - parseFloat(total);

    document.getElementById('result').value = parseFloat(sum).toFixed(2);

}

function selectAllClass(cls) {

    var checkboxes = document.getElementsByClassName(cls.name);
    var values = [];
    for (var i = 0; i < checkboxes.length; i++) {
      
        if (checkboxes[i].checked) {
            checkboxes[i].checked = false;
        }
        else {
            checkboxes[i].checked = true;
            values.push(checkboxes[i].value);
        }
      
    }

    checkTotal();
}

function selectAll(cls) {
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    var checkall = document.getElementsByName('general');


    console.log(checkall)
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkall[0].checked) {
            checkboxes[i].checked = true;
        }
        else {
            checkboxes[i].checked = false;
        }
    }
    checkTotal();

}

class generalTax {
    porpotion = 0;
}

function personal_n_family () {
    this.personal = 60000;
    document.getElementById('personal').value = this.personal
    document.getElementById('personal_value').value = this.personal
}
