const options = document.querySelectorAll('.option-div');

  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(opt => {
        opt.classList.remove('selected');
        opt.querySelector('.options-content').style.display = 'none';
        opt.querySelector('input[type="radio"]').checked = false;
      });

      option.classList.add('selected');
      option.querySelector('input[type="radio"]').checked = true;
      option.querySelector('.options-content').style.display = 'block';
    });
  });

  document.querySelectorAll('.options-content').forEach(el => el.style.display = 'none');
