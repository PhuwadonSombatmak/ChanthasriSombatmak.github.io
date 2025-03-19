// script.js

// ตัวอย่างการสร้างกราฟด้วย Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Stock 1', 'Stock 2', 'Stock 3', 'Stock 4'],
        datasets: [{
            label: 'Portfolio Value',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// ฟังก์ชันดึงข้อมูลหุ้นแบบเรียลไทม์ด้วย API
const updateStockData = () => {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo') // เปลี่ยนเป็น API จริง
        .then(response => response.json())
        .then(data => {
            // นำข้อมูลมาแสดงในตารางหรือกราฟ
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
};

// เรียกใช้งานฟังก์ชันอัปเดตข้อมูลหุ้นทุก 30 วินาที
setInterval(updateStockData, 30000);
