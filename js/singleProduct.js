import { displayError } from "./components/displayError.js";

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);

const productContainer = document.querySelector(".product-page");

const id = params.get("id");
console.log(id);

const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;
console.log(url);

async function getProduct() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    productContainer.innerHTML += `<img src="${result.image}" alt="${result.title}" />
            <section class="product-page-content">
              <h1>${result.title}</h1>
              <p class="price">${result.price} EUR</p>
              <p>${result.description}</p>
              <p>Gender: ${result.gender}</p>
              <p>Color: ${result.baseColor}</p>
              <form class="size">
                <label for="size">Select size:</label>
                <select name="size" id="size">
                  <option>${result.sizes[0]}</option>
                  <option>${result.sizes[1]}</option>
                  <option>${result.sizes[2]}</option>
                  <option>${result.sizes[3]}</option>
                  <option>${result.sizes[4]}</option>
                  <option>${result.sizes[5]}</option>
                </select>
              </form>
              <a href="../checkout.html" class="cta">Add to cart</a>
            </section>`;
  } catch (error) {
    console.log("There is an error", error);
    productContainer.innerHTML = displayError("An error occured when uploading the product from the server!");
  }
}

getProduct();

//      <img src=" " alt="" />
//         <section class="product-page-content"> -->
//           <h1>Stavanger jacket</h1>
//           <p class="price">55,00 EUR</p>
//           <p>
//             Light windbreaker jacket made for outdoor activities. Provide good protection from changing
//             weather conditions in the mountains. Made from waterproof Bikstex@ fabric. The back opening
//             provides easy ventilation when needed.
//           </p>
//           <p>Key features:</p>
//           <ul>
//             <li>Long-lasting weather protection</li>
//             <li>Waterproof & breathable</li>
//             <li>Back opening</li>
//             <li>Reflective prints</li>
//           </ul>
//           <form class="size">
//             <label for="size">Select size:</label>
//             <select name="size" id="size">
//               <option value="s">Small</option>
//               <option value="m">Medium</option>
//               <option value="l">Large</option>
//               <option value="xl">Extra large</option>
//             </select>
//           </form> -->
//           <a href="../checkout.html" class="cta">Add to cart</a>
//         </section>
