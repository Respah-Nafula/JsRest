function fetchProducts() {
    fetch("localhost:5500/index.html")
      .then((response) => response.json())
       .then(data => {
        for(var product=0; product<data.length; product++){
            document.getElementById("products").innerHTML += data[product].name + " " +data[product].category
        }
        console.log(data)
        document.querySelector("fruList").innerText = data.category = "fruits"
      
        document.querySelector("vegList").innerText = data
    })
  }
  fetchProducts();


  function fetchfruList() {
    fetch("localhost:5500/index.html")
      .then((response) => response.json())
      .then((json) => takeData(json));
      for(var fruit=0; fruitdata.length; fruit++){
        document.getElementById("fruList").innerHTML += data[fruit].name + " " +data[fruit].category

  }
}
  fetchfruList();


  function vegList() {
    fetch("localhost:5500/index.html")
      .then((response) => response.json())
      .then((json) => takeData(json));
      for(var veg=0; veg<data.length; veg++){
        document.getElementById("vegList").innerHTML += data[veg].name + " " +data[veg].category
  }
}
  vegList();

  