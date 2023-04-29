import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import userData from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLm from "../../components/widgetLg/WidgetLg"

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart title="User Analytics" data={userData} dataKey="Active Users" grid/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLm/>
      </div>
    </div>
  )
}
