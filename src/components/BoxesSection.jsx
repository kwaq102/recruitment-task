//  Sekcja 3: sekcja o standardowej dla frameworka szerokości z 4 boxami obok siebie. Boxy mają się stackować: na „medium” do 2x2, na „small” do 1x4. Boxy mają zawierać polskie znaki, które powinny wyświetlać się prawidłowo w przeglądarce (2). Grid boxy powinny zawierać różną ilość treści, ale równać się do tej samej wysokości – wykorzystać możliwości biblioteki! (2)
//         ◦ Rozbudowa sekcji 3: w jednym z boxów wstaw kolejny grid, podzielony na 2 kolumny. (2)

import '../styles/boxesSection.css';

const BoxesSection = () => {
    const polishChars = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];

    const showPolishChars = polishChars.map((char) => char).join(' ')

    console.log(showPolishChars);
    return (
        <>
            <section className="boxes-section container">
                <div className="row">
                    <div className="box col-sm-12 col-md-6 col-lg-3 col-sm-offset-2">
                        <p>{showPolishChars}</p>
                        <p>{showPolishChars}</p>

                    </div>
                    <div className="box col-sm-12 col-md-6 col-lg-3 col-sm-offset-2">
                        <p>{showPolishChars}</p>

                    </div>
                    <div className="box col-sm-12 col-md-6 col-lg-3">
                        <p>{showPolishChars}</p>
                        <p>{showPolishChars}</p>
                        <p>{showPolishChars}</p>

                        {/* <div className="container"> */}
                        {/* <div className="row">
                                <div className="col-md-6">ą, ć, ę, ł, ń, ó, ś, ź, ż ą, ć, ę, ł, ń, ó, ś, ź, ż ą, ć, ę, ł, ń, ó, ś, ź, ż</div>
                                <divc className="col-md-6">ą, ć, ę, ł, ń, ó, ś, ź, ż ą, ć, ę, ł, ń, ó, ś, ź, ż ą, ć, ę, ł, ń, ó, ś, ź, ż</divc>
                            </div> */}
                        {/* </div> */}
                    </div>
                    <div className="box col-sm-12 col-md-6 col-lg-3">
                        <p>{showPolishChars}</p>
                        <p>{showPolishChars}</p>
                        <p>{showPolishChars}</p>
                        <p>{showPolishChars}</p>

                    </div>

                </div>
            </section>
        </>
    );
}

export default BoxesSection;