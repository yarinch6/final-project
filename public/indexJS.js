function show_alert() {
    alert("added to your shopping cart !");
  }

function showTable() {
    fetch('/getProduct')
        .then(Response => Response.text())
        .then(data => {
            var productType = JSON.parse(data);
            var myTables = "";
            productType.forEach(element => {
                myTables += `
                <center>
                <form action="/getOrder" method="get">
                <table class="styled-table">
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                    </tr>
                    <tr>
                        <label for="last" name="price"></label>
                        <td id="price"><a>${element.name}</a></td>
                        <input type="hidden" name="name" value="${element.name}">

                        <label for="last" name="price"></label>
                        <td id="price"><a>${element.price}</a></td>
                        <input type="hidden" name="price" value="${element.price}">

                        <td><img src="/images/${element.image}.png" width="100px"></td>
  
                        <label for="quantity" name="price"></label>
                        <td id="price"><a><input type="number" id="quantity" name="quantity" min="1" max="10"></a></td>
                        

                        <td><input type="submit" value="Add to cart"></td>

                    </tr>
                    </table></form></center>
                `

            });
            document.getElementById("myData").innerHTML = myTables
        })
} 