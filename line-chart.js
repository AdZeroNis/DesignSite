var ctx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [
      {
        label: 'میزان فروش 1',
        data: [10, 20, 15, 25, 18],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false
      },
      {
        label: 'میزان فروش 2',
        data: [15, 25, 18, 30, 22],
        borderColor: 'rgba(255, 0, 0, 1)',
        fill: false
      },
      {
        label: 'میزان فروش 3',
        data: [5, 15, 10, 20, 12],
        borderColor: 'rgba(0, 0, 255, 1)',
        fill: false
      }
    ]
  }
});
