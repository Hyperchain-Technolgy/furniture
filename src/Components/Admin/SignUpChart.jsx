import ReactApexChart from "react-apexcharts"

const SignUpChart = () => {
  const options = {
    series: [{
      name: 'Users',
      data: [1334, 2435, 1753, 1328, 1155, 1632, 1336]
    }],
    labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
    chart: {
      type: 'bar',
      height: '140px',
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
          backgroundBarColors: ['#374151'], // Changed the background color to gray
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
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="w-full">
        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Users</h3>
        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
          <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
            </svg>
            3.4%
          </span>
          Since last month
        </p>
      </div>
      <div id="column-chart">
        <ReactApexChart options={options} series={options.series} type="bar" height='300' />
      </div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">

          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button">
            Last 7 days
            <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpChart
