var body = document.querySelector('body');

var btnRandom = document.querySelector('.btn-random');

var btnReset = document.querySelector('.btn-reset');

var generator = function() {
  newColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  console.log(newColor.length);
  if(newColor.length < 7) {
    generator();
  }
};

btnReset.addEventListener('click', function ()
{
  body.style.backgroundColor = "white";
});

btnRandom.addEventListener('click', function ()
{
  generator();

  body.style.backgroundColor = newColor;

});
