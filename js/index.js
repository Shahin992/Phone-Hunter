// get the data

const getData = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${id}
    `
  );
  const data = await res.json();
  const phones = data.data;
  display(phones);
};

// display phones

const display = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = ''



  phones.forEach((phone) => {
    // 1. create phone card
    const card = document.createElement("div");
    card.classList = ` card bg-gray-100 shadow-xl pt-6 `;
    card.innerHTML = `
    <figure>
    <img src="${phone.image}" alt="Shoes" />
    </figure>
              <div class="card-body">
                <h2 class="card-title text-3xl font-semibold justify-center">${phone.phone_name}!</h2>
                <p class="text-center">There are many variations of passages of available, but the majority have suffered</p>
                <p class="text-center text-3xl font-semibold "> $999 </P>
                <div class="card-actions justify-center">
                  <button class="btn btn-accent text-white mt-5">Show Details</button>
                </div>
              </div>
            </div>
    
    `;

    phoneContainer.appendChild(card);
  });
};

// search phone
  const searchInput = () => {
  const searchText = document.getElementById('searchValue');
  const searchValue = searchText.value;
  getData(searchValue);


}

 // getData();
