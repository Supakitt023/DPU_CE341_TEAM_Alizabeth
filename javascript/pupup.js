//ดึงค่าหน้าต่าง
var windows = document.getElementById("myModal");

// ดึงค่าปุ่มที่จะเปิดหน้าต่าง
var btn = document.getElementById("myBtn");

//ดึงค่าปุ่มที่จะปิดหน้าต่าง
var spanClose = document.getElementsByClassName("close")[0];

//เมื่อคลิกเมาส์ จะทำการเปิดหน้าต่างเพื่อแสดงรูป
btn.onclick = function() {
  windows.style.display = "block";
}

//เมื่องคลิกเมาส์ที่ปุ่มนี้ จะปิดหน้าต่างลงไป
spanClose.onclick = function() {
  windows.style.display = "none";
}

//ถ้าคลิกเมาส์ภายนอกหน้าต่างหรือพื้นที่ที่กำหนดนี้ ก็จะปิดหน้าต่างลง
window.onclick = function(event) {
  if (event.target == modal) {
    windows.style.display = "none";
  }
}

function getIPAddress() {
  fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
          var any = 'IP ของคุณคือ : ' + data.ip;
          alert(any)
      })
      .catch(error => console.error('Error fetching IP address:', error));
}

// Call the function when the page is loaded
var modal = document.getElementById("popup-box2")
var btn2 = document.getElementById("myBtnIp")


btn2.onclick = function() {

  getIPAddress();
}
