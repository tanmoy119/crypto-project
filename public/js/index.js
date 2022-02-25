const con = document.querySelector('.sd');



    const getPost = async () => {
        const response = await fetch(`http://localhost:3000/data`);

        let dataCount = 1;
        
         var data = await response.json();
         console.log(data); 


data.forEach((curElm,index) => {
     
    const htmlData = `
    <tr >
    <td>${dataCount}</td>
    <td>${curElm.name}</td>
    <td>₹${curElm.last}</td>
    <td>₹${curElm.buy}/ ₹${curElm.sell}</td>
    <td>${curElm.volume}</td>
    <td>${curElm.base_unit}</td>
  </tr>`;

    con.insertAdjacentHTML('beforeend', htmlData);
    dataCount+= 1;
  })



}

getPost();

