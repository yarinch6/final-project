function showTable() {
    fetch('/getProduct')
        .then(Response => Response.text())
        .then(data => {
            var productType = JSON.parse(data);
            var myTables = "";
            productType.forEach(element => {
                myTables += `
                <center>
                <table class="styled-table">
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.price}</td>
                        <td> <img src="/images/${element.image}.png" width="100px"></td>
                        <td><button onclick="fetchPage('paymentPage.html')">BUY NOW</button></td>
                    </tr>
                    </table></center>
                `

            });
            document.getElementById("myData").innerHTML = myTables
        })
} 