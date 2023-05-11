const products = document.querySelectorAll('.product');
const radioButtons = document.querySelectorAll('input[name="category"]');


for (const radioButton of radioButtons) {
  radioButton.addEventListener('change', () => {
    const category = radioButton.value;
    for (const product of products) {
      if ( product.dataset.category === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    }
  });
}

function sendCheckedValues() {
  
  const checkedValues = [];
  const checkboxes = document.getElementsByName('check');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedValues.push(checkbox.value);
    }
  });

  // 선택된 값 전달하기
  const params = new URLSearchParams();
  params.append('checkedValues', checkedValues.join(';'));
  const url = 'result.html?' + params.toString();
  window.open(url, '_blank');
}



