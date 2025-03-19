document.addEventListener("DOMContentLoaded", function() {
    // Dynamic data from table rows
    let growthTotal = 0, dividendTotal = 0, rothTotal = 0;
  
    // Growth Portfolio Calculation
    document.querySelectorAll("#portfolio tbody tr").forEach(row => {
      const value = parseFloat(row.children[3].textContent.replace(/\$|,/g, '')); // Get value owned
      if (!isNaN(value)) growthTotal += value;
    });
  
    // Dividend Portfolio Calculation
    document.querySelectorAll("#portfolio .dividend tbody tr").forEach(row => {
      const value = parseFloat(row.children[3].textContent.replace(/\$|,/g, ''));
      if (!isNaN(value)) dividendTotal += value;
    });
  
    // Roth IRA Portfolio Calculation
    document.querySelectorAll("#portfolio .roth-ira tbody tr").forEach(row => {
      const value = parseFloat(row.children[3].textContent.replace(/\$|,/g, ''));
      if (!isNaN(value)) rothTotal += value;
    });
  
    // Update Chart Data
    portfolioChart.data.datasets[0].data = [growthTotal, dividendTotal, rothTotal];
    portfolioChart.update(); // Update the chart with new data
  });
  