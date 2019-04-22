let dropdownValue = document.querySelector('.dropdown__value'),
    dropdownList = document.querySelector('.dropdown__list'),
    dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', function(){
      dropdownList.classList.toggle('dropdown__list_active');
  });

for (let i=0; i<dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click', (toOpen) => {
          toOpen.preventDefault();
          const select = toOpen.target.innerText;
      		if(dropdownList.classList.contains('dropdown__list_active')) {
      			dropdownValue.innerText = select;
      			dropdownList.classList.remove('dropdown__list_active');
      		}
    });
}
