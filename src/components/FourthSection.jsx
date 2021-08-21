// Sekcja 4: Sekcja na całą szerokość, z paddingiem top/bottom zależnym od wysokości ekranu, oraz left/right zależnym od szerokości ekranu. Sekcja ma mieć inny kolor tła, niż reszta dokumentu. W sekcji ma znajdować się kontener, o standardowej szerokości dla użytego frameworka CSS, a w środku dwa boxy, z borderem, obrazkiem oraz tekstem. (1) !!!!!!!!Należy użyć dowolnej animacji jQuery na obrazkach. (1)

import './animateImg';

import '../styles/fourthSection.css'

import ostrich from '../img/ostrich.jpg';
import wolf from '../img/wolf.jpg';

const FourthSection = () => {
    return (
        <>
            <section className="fourthSection">

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 offset-md-1" >
                            <img className="image" src={ostrich} alt="" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi, dolore sequi dignissimos maiores ipsum doloremque necessitatibus facere temporibus quisquam beatae obcaecati veritatis totam voluptates. Ut earum doloribus ipsam maxime.</p>
                        </div>

                        <div className="box col-sm-12 col-md-5 offset-md-1">
                            <img className="image" src={wolf} alt="" />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi, dolore sequi dignissimos maiores ipsum doloremque necessitatibus facere temporibus quisquam beatae obcaecati veritatis totam voluptates. Ut earum doloribus ipsam maxime.</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default FourthSection;