import '../styles/photoSection.css'
import tiger from '../img/tiger.jpg'

const PhotoSection = () => {
    return (
        <>
            <section className="photoSection">
                <div>
                    <img src={tiger} alt="" />
                    <p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nam asperiores doloremque officiis tempora. Quaerat asperiores odio illo neque, dolorem sequi mollitia! Porro quibusdam, facere vel ab hic delectus. Adipisci.</span>
                    </p>
                </div>
            </section>
        </>
    );
}

export default PhotoSection;