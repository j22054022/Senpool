import React from 'react'
import "./MainPage.scss";
import sectionImage1 from "../S__6496574.jpg"
import icon_trade from "../trade.png"
import icon_hosting from "../hosting.png"
import icon_maintenance from "../maintenance.png"
import icon_support from "../customer-service.png"
import showcase_0 from "../showcase_0.jpg"
import showcase_1 from "../showcase_1.jpg"
import showcase_2 from "../showcase_2.jpg"
import showcase_3 from "../showcase_3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import icon_map from "../map.png"
import icon_gmail from "../gmail.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as RresponsiveCarousel } from 'react-responsive-carousel';
import blank from "../blank.png"
import { StepSection } from './StepSection';

export const MainPage = () => {
    const services = [
        {
            service: "託管",
            icon: icon_hosting
        },
        {
            service: "買賣",
            icon: icon_trade
        },
        {
            service: "維修",
            icon: icon_maintenance
        },
        {
            service: "客服",
            icon: icon_support
        },
    ]
    const showcases = [showcase_0, showcase_1, showcase_2, showcase_3]

    return (
        <div className="mainPage">
            <section className="mainPage__intro" style={{ backgroundImage: `url(${sectionImage1})` }}>
                {/* <img src={sectionImage1} alt="sectionImage1"/> */}
                <h3 className="h3-intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ducimus sint, labore aspernatur non expedita unde ex quos accusamus debitis asperiores officia cupiditate odio reprehenderit dolores cumque minima. Explicabo, dolorem?</h3>
            </section>
            <section className="mainPage__services">
                <div className="grid-2x2">
                    {services.map(s => <div className="service"><img src={s.icon} alt={s.service}></img><h3>{s.service}</h3></div>)}
                </div>
            </section>
            <section className="mainPage__showcase">
                <Carousel>
                    {showcases.map(i => <Carousel.Item interval={1000}><img src={i} alt={String(i)}></img></Carousel.Item>)}
                </Carousel>
            </section>
            <section className="mainPage__table">
                <div className="table__container">
                    <h3 className='h3-title'>為何選擇森浦?</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th style={{ fontWeight: 900 }}>森浦</th>
                                <th>他牌</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>顯卡我司保固五年</td>
                                <td>原廠顯卡僅保固三年</td>
                            </tr>
                            <tr>
                                <td>ASIC我司保固三年</td>
                                <td>原廠ASIC僅保固半年</td>
                            </tr>
                            <tr>
                                <td>保障客戶在線率九成</td>
                                <td>無法保證客戶在線率</td>
                            </tr>
                            <tr>
                                <td>全天候專員管理設備</td>
                                <td>不一定有24小時專員管理設備</td>
                            </tr>
                            <tr>
                                <td>客戶享有保全、保險服務</td>
                                <td>無提供客戶保全、保險服務</td>
                            </tr>
                            <tr>
                                <td>獨立散熱風道，設備不過熱</td>
                                <td>散熱系統不佳，致設備過熱</td>
                            </tr>
                            <tr>
                                <td>提供設備散熱更改維修服務</td>
                                <td>不提供設備散熱更改服務</td>
                            </tr>
                            <tr>
                                <td>簽訂合約有律師背書</td>
                                <td>僅憑出貨單，無合約證明</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </section>
            <section className="mainPage__steps" id="mainPage__steps">
                <h3 className='h3-title'>購買流程</h3>
                <StepSection />
            </section>
            <section className="mainPage__plan">
                <RresponsiveCarousel showArrows={false} showStatus={false} showThumbs={false}>
                    <div>
                        <div className="plan">
                            <p>ASIC-亞米<br />YM107(ETH/ETC)</p>
                            <p>售價50萬/三年保固</p>
                            <p>耗電量<br />一台設備玩2300w<br />2.3度/hx24hx30day<br />=1656度<br />家庭電費:11592<br />礦場託管費:7000</p>
                            <p>當ETH-4000U時04個月回本</p>
                            <p>當ETH-4000U=129600TWD</p>
                            <p>預估月獲利5%~20%<br />年獲利60%~240%</p>
                        </div>
                    </div>
                    <div>
                        <div className="plan">
                            <p>ASIC-芯動<br />A11(ETH/ETC)</p>
                            <p>售價35萬/三年保固</p>
                            <p>耗電量<br />一台設備玩2300w<br />2.3度/hx24hx30day<br />=1656度<br />家庭電費:11592<br />礦場託管費:7000</p>
                            <p>當ETH-4000U時05個月回本</p>
                            <p>當ETH-4000U=81000TWD</p>
                            <p>預估月獲利4%~16%<br />年獲利56%~224%</p>
                        </div>
                    </div>
                    <div>
                        <div className="plan">
                            <p>ASIC-螞蟻<br />E9(ETH/ETC)</p>
                            <p>售價50萬/三年保固</p>
                            <p>耗電量<br />一台設備玩3100w<br />3.1度/hx24hx30day<br />=1382度<br />家庭電費:9674<br />礦場託管費:6000</p>
                            <p>當ETH-4000U時4個月回本</p>
                            <p>當ETH-4000U=129600TWD</p>
                            <p>預估月獲利5.3%~21.2%<br />年獲利64%~256%</p>
                        </div>
                    </div>
                    <div>
                        <div className="plan">
                            <p>ASIC-亞米<br />V1(ETH/ETC)</p>
                            <p>售價80萬/三年保固</p>
                            <p>耗電量<br />一台設備玩3100w<br />3.1度/hx24hx30day<br />=2232<br />家庭電費:15624<br />礦場託管費:10000</p>
                            <p>當ETH-4000U時4個月回本</p>
                            <p>當ETH-4000U=194400TWD</p>
                            <p>預估月獲利5%~25%<br />年獲利60%~240%</p>
                        </div>
                    </div>
                    <div>
                        <div className="plan">
                            <p>ASIC-亞米<br />E7(ETH/ETC)</p>
                            <p>售價18萬/三年保固</p>
                            <p>耗電量<br />一台設備玩1350w<br />1.3度/hx24hx30day<br />=972度<br />家庭電費:6804<br />礦場託管費:4500</p>
                            <p>當ETH-45U時10個月回本</p>
                            <p>當ETH-45U=17496TWD</p>
                            <p>預估月獲利3%~10%<br />年獲利36%~120%</p>
                        </div>
                        <img src={blank} alt="0"></img>
                    </div>
                </RresponsiveCarousel>
            </section>
            <section className="mainPage__contect" id="mainPage__contect">
                <h1>聯絡我們</h1>
                <a href="https://www.google.com.tw/maps?q=%E6%A3%AE%E6%B5%A6%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8">
                    <img src={icon_map} alt="icon_map"></img>
                </a>
                <a href="mailto: abc@example.com">
                    <img src={icon_gmail} alt="icon_gmail"></img>
                </a>
                <a href="#">
                    <img src={"https://fakeimg.pl/97/?text=Line"}></img>
                </a>
            </section>
        </div>
    )
}
