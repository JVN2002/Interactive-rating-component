const Rating = document.getElementById('RatingBox');

let TelaAtual = false;

window.onload = function vazio(){   
    Rating.innerHTML = `
    <img src="images/icon-star.svg" alt="estrela" class="estrela">
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>
    
    <form action="">
      <input type="radio" id="OP1" name="nota" value="1">
      <label for="OP1">
        <p><b>1</b></p>
      </label>
      <input type="radio" id="OP2" name="nota" value="2">
      <label for="OP2">
        <p><b>2</b></p>
      </label>
      <input type="radio" id="OP3" name="nota" value="3">
      <label for="OP3">
        <p><b>3</b></p>
      </label>
      <input type="radio" id="OP4" name="nota" value="4">
      <label for="OP4">
        <p><b>4</b></p>
      </label>
      <input type="radio" id="OP5" name="nota" value="5">
      <label for="OP5">
        <p><b>5</b></p>
      </label>

      <br><br>
      <input type="button" class="btnSubmit" id="btnSubmit" value="Submit">
      </form>`;

      const radio = document.querySelectorAll('input[name="nota"]');
      let option;

      radio.forEach((radio)=>{
        radio.addEventListener('change',(event)=>{
            option = event.target.value;
        });
      });

      const btn = document.getElementById('btnSubmit');

        btn.addEventListener('click', function(){
            TelaAtual = true;
            Rating.innerHTML = `<div class="agradecimentos">
      <img src="images/illustration-thank-you.svg" alt="Ilustraçao de agradecimento">
      <br>
      <p class="score">You selected ${option} out of 5</p>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    </div>`;
        });
}



