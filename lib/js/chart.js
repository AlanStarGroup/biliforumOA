/* 普通图表生成测试 */
$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('line_chart'));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '论坛话题帖子增量'
      },
      //与x轴垂直的数值提醒
      tooltip: {
          trigger: "axis"
      },
      legend: {
        data: ['数量']
      },
      xAxis: {
        data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日']
      },
      yAxis: {},
      series: [
        {
          name: '帖子数',
          type: 'line',
          data: [5, 20, 50, 40, 20, 10],
          title: {},
          lineStyle: {
            color: '#66ccff',
            width: "2"
        },
          symbolSize: "8",
          symbol: "emptyCircle",
          //渐变颜色填充
          areaStyle: {
              color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0,
                      color: '#C8EEFB'
                  },
                  {
                      offset: 1,
                      color: '#FFFFFF'
                  }],
                  global: false
              }
          }
        }
      ]
    };
    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})

