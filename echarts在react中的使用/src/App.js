/*
 * @Description: echarts
 * @Author: 陈崇俊
 * @Date: 2023-02-16 13:13:40
 * @LastEditors: 陈崇俊
 * @LastEditTime: 2023-02-16 16:03:44
 */
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import * as echarts from 'echarts'; // 导入所有 并命名为echarts

// 柱状图
const Histogram = forwardRef((_, ref) => {
  const chartRef = useRef();
  const options = {
    // 标题
    title: {
      text: '柱状图',
    },
    // 提示框组件
    tooltip: {
      // trigger: 'axis'
    },
    // 图例组件
    legend: {
      //     data:['销量'],
      //     show:true
    },
    // x轴
    xAxis: {
      type: 'category',
      data: ['冬瓜', '茄子', '丝瓜', '玉米', '红薯', '西红柿', '芹菜'],
    },
    // y轴
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [20, 9, 39, 43, 60, 18, 50],
        // type: 'line' 折线图
        type: 'bar', // 柱状图
        name: '销量',
      },
    ],
  };

  useImperativeHandle(ref, () => ({ data: [20, 9, 39, 43, 60, 18, 50] }), []);

  useEffect(() => {
    // 创建一个echarts实例，返回echarts实例。不能在单个容器中创建多个echarts实例
    const chart = echarts.init(chartRef.current);
    // 设置图表实例的配置项和数据
    chart.setOption(options);

    function resize() {
      chart.resize();
    }
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      // 销毁实例
      chart.dispose();
    };
    // eslint-disable-next-line
  }, []);

  // 此处不能给ECharts的容器设置固定的宽高。
  // 宽度要写百分比
  // 高度要写vh
  // 然后再搭配resize方法才可以实现根据浏览器大小而改变大小的功能
  return <div style={{ width: '40%', height: '40vh' }} ref={chartRef}></div>;
});

const App = () => {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current.data);
  }, []);

  return (
    <>
      <Histogram ref={ref} />
    </>
  );
};

export default App;
