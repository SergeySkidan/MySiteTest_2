import React from 'react';
import { Router, Route } from 'react-router'
import { connect } from 'react-redux';
import {  Link } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';

import { AccountPage } from '../AccountPage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

// Layouts
import MainLayout from '../components/layouts/main-layout';
import SearchLayoutContainer from '../components/containers/search-layout-container';

// Pages
import Home from '../components/home';
import Report_18_08_18 from '../components/report_18_08_18';
import Articles from '../components/articles';
import AboutUs from '../components/aboutUs';
import BasketListContainer from '../components/containers/basket-list-container';
import ProductListContainer from '../components/containers/product-list-container';
import LeskaListContainer from '../components/containers/leska-list-container';

import TitleDialog from '../TitleDialog/TitleDialog';
import NavBar from '../NavBar/NavBar';

import {FishingGear} from '../constants';
import {Equipment} from '../constants';
import {Baits} from '../constants';
import {Accessories} from '../constants';


import './App.css';



class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {

            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (

<Router history={history}>

          <div className="app">

            {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            }

            <header className="primary-header">

              <NavBar/>
              <TitleDialog/>

            </header>

            <main id="content" class="main-content">

            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/fishingGear">Рыболовные снасти</Link></li>
              <li><Link to="/equipment">Оснащение</Link></li>
              <li><Link to="/baits">Приманки</Link></li>
              <li><Link to="/accessories">Аксессуары</Link></li>
            </ul>





                <h4 className="h6-animation">НА ХВОСТЕ Юрия Скользнева. Ловля фидером с лодки. Сорокошичи.</h4>
                <iframe width="350" height="200" src="https://www.youtube.com/embed/my0GAYs0XmY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <h4 className="h6-animation">Обзор бюджетного шнура Select Basic</h4>
                <iframe width="350" height="200" src="https://www.youtube.com/embed/qG4KoljRhWI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <h4 className="h6-animation">Как использовать флюорокарбон?</h4>
                <iframe width="350" height="200" src="https://www.youtube.com/embed/pvd89UZ8Mdg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <p><img src='https://ibis.net.ua/images/promo/2726_ru.jpg?v=1534506205' width="350" height="200" alt="Пример"/></p>
                <p><img src='https://ibis.net.ua/images/promo/2729_ru.jpg?v=1534757420' width="350" height="200" alt="Пример"/></p>
                <p><img src='https://ibis.net.ua/images/promo/2713_ru.jpg?v=1533129106' width="350" height="200" alt="Пример"/></p>
                <p><img src='https://ibis.net.ua/images/promo/2703_ru.jpg?v=1531407503' width="350" height="200" alt="Пример"/></p>


                <h4 className="h6-animation">Чемпионат Украины по ловле хищной рыбы спиннингом с берега 2018</h4>
                <p><a href="http://fsfu.org.ua/novyny/147-chempionat-ukrainy-po-lovle-khishchnoj-ryby-spinningom-s-berega-2018">
                   <img src="http://fsfu.org.ua/images/stories/Bereg/Chemp2018/_DSC0530.jpg" width="350" height="200" alt="Пример"/></a></p>
                <h4 className="h6-animation">Чемпіонат світу з берегового спінінгу 2018</h4>
                <p><a href="http://fsfu.org.ua/index.php">
                   <img src="http://fsfu.org.ua/images/stories/Bereg/WC2018/32381170_1856124181104262_8597369107374931968_n.jpg" width="350" height="200" alt="Пример"/></a></p>
                <h4 className="h6-animation">Рыбалка.Охота.Туризм 26 - 29 сентября 2018 года</h4>
                <p><a href="http://fishexpo.com.ua/">
                   <img src="http://fishexpo.com.ua/wp-content/uploads/2018/03/главное-фото-1000.jpg" width="350" height="200" alt="Пример"/></a></p>

                </main>

                <aside className="primary-aside">
                  <Route path="/" exact component={Home}/>
                  <Route path="/report_18_08_18" exact component={Report_18_08_18}/>
                  <Route path="/articles" exact component={Articles}/>
                  <Route path="/aboutUs" component={AboutUs}/>
                  <Route path="/basket" component={BasketListContainer}/>

                    <PrivateRoute exact path="/accountPage" component={AccountPage} />
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>

                    <Route path="/fishingGear" component={FishingGear}/>
                    <Route path="/equipment" component={Equipment}/>
                    <Route path="/baits" component={Baits}/>
                    <Route path="/accessories" component={Accessories}/>

                  <Route exact path="/fishingGear/spinning" component={ProductListContainer}/>
                  <Route path="/fishingGear/coil" component={() => (<div> катушка </div>)}/>
                  <Route path="/fishingGear/line" component={LeskaListContainer}/>
                  <Route path="/fishingGear/cage" component={() => (<div> Садки, подсаки </div>)}/>
                  <Route path="/fishingGear/bickStrikeAlarms" component={() => (<div> Сигнализаторы поклевки </div>)}/>
                  <Route path="/fishingGear/racksAndStands" component={() => (<div> Стойки и подставки </div>)}/>

                  <Route exact path="/equipment/hooks" render={() => (<div> Крючки</div>)}/>
                  <Route path="/equipment/sinker" component={() => (<div> Грузила </div>)}/>
                  <Route path="/equipment/jigHeads" component={() => (<div> Джиг-головки </div>)}/>
                  <Route path="/equipment/feeders" component={() => (<div> Кормушки </div>)}/>
                  <Route path="/equipment/floats" component={() => (<div> Поплавки </div>)}/>
                  <Route path="/equipment/carbines" component={() => (<div> Карабины </div>)}/>
                  <Route path="/equipment/fasteners" component={() => (<div> Застежки </div>)}/>
                  <Route path="/equipment/swivels" component={() => (<div> Вертлюжки </div>)}/>
                  <Route path="/equipment/clockworkRings" component={() => (<div> Заводные кольца </div>)}/>
                  <Route path="/equipment/leads" component={() => (<div> Поводки </div>)}/>

                  <Route exact path="/baits/spoon" render={() => (<div> Блесна </div>)}/>
                  <Route path="/baits/mormyshki" component={() => (<div> Мормышки </div>)}/>
                  <Route path="/baits/balancer" component={() => (<div> Балансиры </div>)}/>
                  <Route path="/baits/wobblers" component={() => (<div> Воблеры </div>)}/>
                  <Route path="/baits/silicone" component={() => (<div> Силикон </div>)}/>
                  <Route path="/baits/nozzles" component={() => (<div> Насадки </div>)}/>
                  <Route path="/baits/lure" component={() => (<div> Прикормка </div>)}/>
                  <Route path="/baits/additives" component={() => (<div> Добавки </div>)}/>
                  <Route path="/baits/attractants" component={() => (<div> Аттрактанты </div>)}/>
                  <Route path="/baits/sprays" component={() => (<div> Спреи </div>)}/>

                  <Route exact path="/accessories/inflatableBoat" render={() => (<div> Надувные лодки</div>)}/>
                  <Route path="/accessories/pendantMotors" component={() => (<div> Подвесные двигатели </div>)}/>
                  <Route path="/accessories/echoSounders" component={() => (<div> Эхолоты </div>)}/>
                  <Route path="/accessories/carpBoats" component={() => (<div> Карповые кораблики </div>)}/>
                  <Route path="/accessories/carpMats" component={() => (<div> Карповые маты и мешки </div>)}/>
                  <Route path="/accessories/cobras" component={() => (<div> Кобры, ракеты </div>)}/>
                  <Route path="/accessories/slingshots" component={() => (<div> Рогатки и катапульты </div>)}/>
                </aside>

                <aside class="twin">

                </aside>

                <aside class="twin">

                </aside>

                <footer class="colophon grid">
                &copy; Скидан Сергей
                </footer>

                </div>







</Router>

        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
