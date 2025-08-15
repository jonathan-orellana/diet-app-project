const chartConfigs = [
  { id: "myPieChart1", data: [40, 30, 30] },
  { id: "myPieChart2", data: [25, 45, 30] },
  { id: "myPieChart3", data: [50, 20, 30] },
  { id: "myPieChart4", data: [35, 35, 30] }
];

chartConfigs.forEach(config => {
  const ctx = document.getElementById(config.id).getContext("2d");

  const chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Carbs", "Protein", "Fats"],
      datasets: [{
        data: config.data,
        backgroundColor: [
          getComputedStyle(document.documentElement).getPropertyValue('--color-teal'),
          getComputedStyle(document.documentElement).getPropertyValue('--color-purple'),
          getComputedStyle(document.documentElement).getPropertyValue('--color-medium-gray')
        ],
        hoverOffset: 20 // scale effect on hover
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--color-dark-gray')
          }
        },
        tooltip: {
          enabled: true
        }
      },
      onClick: (evt, elements) => {
        if (elements.length > 0) {
          const sliceIndex = elements[0].index;
          const dataset = chart.data.datasets[0];

          // Toggle slice color when clicked
          const originalColors = [
            getComputedStyle(document.documentElement).getPropertyValue('--color-teal'),
            getComputedStyle(document.documentElement).getPropertyValue('--color-purple'),
            getComputedStyle(document.documentElement).getPropertyValue('--color-medium-gray')
          ];

          dataset.backgroundColor[sliceIndex] =
            dataset.backgroundColor[sliceIndex].trim() === '#FFD700'
              ? originalColors[sliceIndex]
              : '#FFD700';

          chart.update();
        }
      }
    }
  });
});
