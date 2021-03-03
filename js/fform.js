const scriptURL = 'https://script.google.com/macros/s/AKfycbw5lowXY77NzeN7wCm9i5AezcUYpSmlarYa6rTUTaH6MPdTHmGBQuXwrIYXKFl6HbFv/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for giving Feedback..!"))
                .catch(error => console.error('Error!', error.message))
            });