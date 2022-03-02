// const words = "1234567890 "
// console.log(words.length)
// I can use this for total number of characters

// const words = "1234567890 123"
// let count = 0
// for (let i = 0; i < words.length; i++)
// {
//     if (words[i] === " ")
//     {
//         continue
//     }
//     count = count + 1
// }
// console.log(count)
// I can use this for for total number of words

const main = document.createElement("main");

const div1 = document.createElement("div");
div1.setAttribute("class", "container");

const footer = document.createElement("footer");

div1.innerHTML = `<div class="text">
<p class="heading">Word<span class="count_word">Count</span></p>
<p class="paragraph">Enter your text to get number of words and characters count</p>
</div>
<input type="text" placeholder="Enter your text here"  class="textBox">
    <button class="button">Check</button>
<p class="results"><span class="words_counter">0</span> words | <span class="characters_counter">0</span> characters</p>`;

footer.innerHTML = `<code class="footer">Word Count mini project &copy-(03-02-2022)</code>`;

main.append(div1);
document.body.append(main);
document.body.append(footer);

const textBox = document.querySelector(".textBox");
const button = document.querySelector(".button");
const characterCounter = document.querySelector(".characters_counter");
const wordCounter = document.querySelector(".words_counter");

button.addEventListener("click", (e) => {
  let values = textBox.value;
  console.log(values);
  let characters = values.length;
  characterCounter.innerHTML = `${characters}`;

  let count = 0;
  let state = 0;
  for (let i = 0; i < characters; i++) {
    if (values[i] === " " || values[i] === "\n" || values[i] === "\t") {
      state = 0;
    } else if (state === 0) {
      state = 1;
      count = count + 1;
    }
  }
  wordCounter.innerHTML = `${count}`;

  textBox.value = "";
});
