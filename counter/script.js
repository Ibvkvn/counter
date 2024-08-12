const count = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");


let count_ = 0;

increment.addEventListener("click", () =>{
    count_++;
    count.innerHTML = count_;
}
);

decrement.addEventListener("click", () =>{
    count_--;
    count.innerHTML = count_;
});

reset.addEventListener("click", () =>{
    count_ = 0;
    count.innerHTML = count_;
})