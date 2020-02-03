function counter_fn(){
       var counter = document.getElementById("cntr");
       var count = 0;
       count = parseInt(counter.value);
       count = count+1;
       counter.innerHTML = parseInt(count);
    }
    window.onload = counter_fn;  
