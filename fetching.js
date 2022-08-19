function fetchData() {
    fetch("http://127.0.0.1:5500/index.html")
      .then((response) => response.json())
      .then((json) => takeData(json));
  }
  
  function takeData(val) {
    return val.slice(1, 11);
  }
  
  fetchData();