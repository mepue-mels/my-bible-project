import './About.css';
import Navigation from './components/Navigation';
import cat from './assets/cat.jpeg';
import sector_image from './assets/sector-image.jpeg'
import Image from './components/Image';

function About() {
    return (
        <>
            <Navigation />

            <div className="container">
                <div className="about-header">
                    <h1 className="header-text">Get to meet us</h1>
                </div>
                <div className="sector-layout">
                    <div className="sector-photo">
                    </div>
                </div>

                <div className="grid-layout-head">
                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Carlos Robielos'
                            program_year='Region Leader'
                            university=''
                            fb_link='https://www.facebook.com/Csrobielos?_rdc=1&_rdr'
                        />
                    </div>
                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Quennie Robielos'
                            program_year='Region Co-leader'
                            university=''
                            fb_link='https://www.facebook.com/kwen96'
                        />
                    </div>
                </div>

                <div className="grid-layout">
                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Rommel John Ronduen'
                            program_year='Computer Engineering - 2nd Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/spookzxzxz/'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Alvin Dave Galasinao'
                            program_year='Electronics Engineering - 4th Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/galasinaoalvindave'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Jan Adrian Manzanero'
                            program_year='Computer Engineering - 2nd Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/therealjeemboo'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Carlos Miguel Antipolo'
                            program_year='Architecture - 1st Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/carlos.antipolo.58'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Elcid Punzalan'
                            program_year='Architecture - 1st Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/cid.arki'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Mark Angelo Angeles'
                            program_year='Mechanical Engineering - 2nd Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/profile.php?id=100088076885275'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Ricciardoni Navarro'
                            program_year='Architecture - 2nd Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/ricciardoni1213'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Edwin Gongona Jr.'
                            program_year='Hotel & Restaurant Management - 2nd Year'
                            university='Lyceum of the Philippines University'
                            fb_link='https://www.facebook.com/profile.php?id=100027307878609'
                        />
                    </div>
                </div>

                <div className="grid-layout">
                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Chile Marie Santiago'
                            program_year='Electronics Engineering - Graduate'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/chilemarie.santiago'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Nikki Aida Calinog'
                            program_year='Architecture - 5th Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/nikkiaida.calinog.1'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Chiara Grace Lapada'
                            program_year='Architecture - 5th Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/chiaragrace.lapada?_rdc=1&_rdr'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Shikaniah Castillo'
                            program_year='Data Science - 3rd Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/profile.php?id=61551012490021'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Pauline Ruth Mariano'
                            program_year='Architecture - 5th Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/paulineruth.mariano'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Felicity Lujan Pablo'
                            program_year='Environmental & Sanitary Engineering - 3rd Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/felicity.pablo.1'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Luisa Pulacan'
                            program_year='Architecture - 1st Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/luisa.pulacan'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Frances Gayle Sardia'
                            program_year='Architecture - 3rd Year'
                            university='Mapúa University'
                            fb_link='https://www.facebook.com/fg.sardia'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Hilaria Kea Tan'
                            program_year='Business Management - 1st Year'
                            university='Lyceum of the Philippines University'
                            fb_link='https://www.facebook.com/profile.php?id=100085865361057'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Angela Corfaye Bolic'
                            program_year='Accountancy - 4th Year'
                            university='Lyceum of the Philippines University'
                            fb_link='https://www.facebook.com/Angela.Corfaye?_rdc=1&_rdr'
                        />
                    </div>

                    <div className="grid-item">
                        <Image
                            image={ cat }
                            name='Jean Marie France Loyola'
                            program_year='Accountancy - 4th Year'
                            university='Lyceum of the Philippines University'
                            fb_link='https://www.facebook.com/jeanmariefrance.loyola'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
