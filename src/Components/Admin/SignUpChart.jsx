import ReactApexChart from "react-apexcharts"
import ChartContainer from "./ChartContainer";
import DropDownMenu from "./DropDownMenu";
import ChartHeader from "./ChartHeader";

const SignUpChart = () => {
  const options = {
    series: [{
      name: 'Users',
      data: [1334, 2435, 1753, 1328, 1155, 1632, 1336]
    }],
    labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
    chart: {
      type: 'bar',
      height: "100%",
      maxWidth: "100%",
      foreColor: '#4B5563',
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: false
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#1A56DB'
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '25%',
        borderRadius: 3,
        colors: {
          backgroundBarColors: ['#374151'],
          backgroundBarRadius: 3,
        },
      },
      dataLabels: {
        hideOverflowingLabels: false
      }
    },
    xaxis: {
      floating: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif'
      }
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.8
        }
      }
    },
    fill: {
      opacity: 1
    },
    yaxis: {
      show: false
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
  };

  return (
    <ChartContainer style='p-4 md:p-6'>
      <ChartHeader total='2,340' heading='Users since last month' percent='3.4' />
      <ReactApexChart options={options} series={options.series} type="bar" height='320' />
      <DropDownMenu />
    </ChartContainer>
  )
}

export default SignUpChart
