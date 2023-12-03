            document.addEventListener('DOMContentLoaded',function()
            {
                let incorrect = document.querySelectorAll('.incorrect');
                for (let i = 0; i < incorrect.length; i++)
                {
                    incorrect[i].addEventListener('click',function(){
                        incorrect[i].style.backgroundColor = 'red';
                    let back1 = document.querySelector('#footback1');
                    back1.innerHTML = 'incorrect';
                    });
                }
                let correct = document.querySelector('.correct');
                correct.addEventListener('click',function(){
                correct.style.backgroundColor = 'green';
                let back = document.querySelector('#footback1');
                back.innerHTML = 'correct';
                });

                let input = document.querySelector('input');
                document.querySelector('.check').addEventListener('click',function(){
                    if (input.value === '2'){
                        input.style.backgroundColor = 'green';
                        document.querySelector('#footback2').innerHTML = 'correct';
                    }
                    else
                    {
                        input.style.backgroundColor = 'red';
                        document.querySelector('#footback2').innerHTML = 'incorrect';
                    };
                });
            })