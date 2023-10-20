document.addEventListener("DOMContentLoaded", function () {
    function tablePerDC() {
        var table = document.getElementById("tableDC");

        for (var i = 0; i < 4; i++) {
            var row = table.insertRow(i);

            for (var j = 0; j < 4; j++) {
                var cuad = row.insertCell(j);

                if (j < 3) {
                    if (i === 0 && j === 0) {
                        cuad.rowSpan = 3;
                        var img = document.createElement("img");
                        img.src = "https://pm1.aminoapps.com/6899/c4ddf063e21963ea55030ea5765115a0e47f9e5dr1-204-247v2_hq.jpg";
                        img.alt = "Imagen";
                        cuad.appendChild(img);
                    } else if (i === 0 && j === 1) {
                        var img = document.createElement("img");
                        img.src = "../recursos/imagenes/dave.png";
                        cuad.appendChild(img);
                    } else if (i === 0 && j === 2) {
                        var h3 = document.createElement("h3");
                        h3.innerHTML = 'Thursday October 11, 2001';
                        cuad.appendChild(h3);
                    } else if (i === 3 && j === 0) {
                        var img = document.createElement("img");
                        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc3CTZYQAA7QDRejCFuydDZCoC7ejmCwVeWw&usqp=CAU";
                        img.alt = "Imagen";
                        cuad.appendChild(img);
                    } else if (i === 3 && j === 1) {
                        cuad.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque maxime laudantium tempore quae eligendi natus repellendus incidunt architecto eaque est at qui, corporis rem quisquam nulla. Aperiam, recusandae nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum modi ad recusandae totam deserunt sit veniam facilis, laborum, dolorem ut natus iure! Magni obcaecati laboriosam, temporibus labore nam exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque maxime laudantium tempore quae eligendi natus repellendus incidunt architecto eaque est at qui, corporis rem quisquam nulla. Aperiam, recusandae nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque maxime laudantium tempore quae eligendi natus repellendus incidunt architecto eaque est at qui, corporis rem quisquam nulla. Aperiam, recusandae nesciunt.'
                        cuad.colSpan = 2;

                    } else if (i === 1 && j === 0) {
                        var h1 = document.createElement("h1");
                        h1.innerHTML = 'Sample Web Page Table Layout';
                        cuad.appendChild(h1);
                        cuad.colSpan = 2;

                    } else if (i === 2 && j === 0) {
                        var nav = document.createElement("nav");

                        var esp1 = document.createElement("a");
                        esp1.href = "#";
                        esp1.textContent = "HOME   |   ";

                        var esp2 = document.createElement("a");
                        esp2.href = "#";
                        esp2.textContent = "   DOWNLOAD   |   ";

                        var esp3 = document.createElement("a");
                        esp3.href = "#";
                        esp3.textContent = "   SITE INDEX   |   ";

                        var esp4 = document.createElement("a");
                        esp4.href = "#";
                        esp4.textContent = "   SEARCH   |   ";

                        var esp5 = document.createElement("a");
                        esp5.href = "#";
                        esp5.textContent = "   CONTACT US";

                        nav.appendChild(esp1);
                        nav.appendChild(esp2);
                        nav.appendChild(esp3);
                        nav.appendChild(esp4);
                        nav.appendChild(esp5);

                        cuad.appendChild(nav);
                        cuad.colSpan = 3;
                        
                    }
                    else if (i == 3 && j == 2) {
                        var img = document.createElement("img");
                        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuw7tdJwFE37zO89sxAallX_uKpGuVeXol_t3KxHGNCZ6YoEKDYA0LeRXKEurkoNECjoQ&usqp=CAU";
                        img.alt = "Imagen";
                        cuad.appendChild(img)
                    }

                }
            }
        }

        var primFila = table.rows[0];
        var delCelda = primFila.insertCell(3);

        var linku = document.createElement("a");
        linku.href = "#";
        linku.textContent = "Text Only";
        delCelda.appendChild(linku);

        var segFila = table.rows[1];
        segFila.deleteCell(3);

        var terFila = table.rows[2];
        terFila.deleteCell(3);

        var cuarFila = table.rows[3];
        cuarFila.deleteCell(3);

        var segFila = table.rows[2];
        segFila.deleteCell(2);

        var terFila = table.rows[2];
        terFila.deleteCell(1);

        var segFila = table.rows[1];
        segFila.deleteCell(2);

        var primFila = table.rows[0];
        primFila.deleteCell(4);
    }
    tablePerDC();
});
