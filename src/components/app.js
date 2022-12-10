import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>基于&nbsp;<Link to='https://uptimerobot.com/' text='UptimeRobot' />&nbsp;接口&nbsp;|&nbsp;检测频率&nbsp;5&nbsp;分钟</p>
          <p>Copyright&nbsp;&copy;&nbsp;2020&nbsp;-&nbsp;2022&nbsp;<Link to='https://fiee.wtdown.top/home' text='飓枫' />&nbsp;|&nbsp;Powered by&nbsp;<Link to='https://github.com/yb/uptime-status' text='uptime-status' />&nbsp;{Package.version}</p>
          <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
            <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
        </div>
      </div>
    </>
  );
}

export default App;