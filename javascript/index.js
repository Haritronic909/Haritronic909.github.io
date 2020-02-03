var n = 0;

function increment(){

  n++;
  return n;
      
}

function counter_fn() {
      var counter = document.getElementById("cntr");
      count =n;
      count = parseInt(counter.innerHTML);
      counter.innerHTML = count;
    }
    window.onload = counter_fn;
