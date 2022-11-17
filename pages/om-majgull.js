import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import {  Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Layout>
            <Head>
                <title>{`MajgullAxelssons.se - Om Majgull Axelsson}`}</title>
                <meta name="description" content="Om Majgull Axelsson ..." />
            </Head>
            <Container>
                <Row>
                    <h1 className="m-3 text-center display-handwriting">Majgull Axelsson om Majgull</h1>
                </Row>
                <hr/>
                <Row>
                    <h4 className="mb-5 text-center">Hej!</h4>
                    <div style={{width: '100%', height: '480px',  position: 'relative', float: 'left', overflow: "hidden"}} >
                        <Image src="https://cms.majgullaxelsson.se/assets/a7200bf4-3969-46b2-910d-1f3b2656243a" objectFit="contain" layout="fill" className="imgCircular" />
                    </div>
                </Row>
                <Row>
                    <p className="text-center p-3">
                    Jag heter Majgull Axelsson och är författare. En gång i världen var jag journalist, men det är mer än 30 år sedan och – oss emellan – var jag aldrig särskilt lysande. Kanske berodde det på att jag valde yrket för att det var något jag trodde att jag skulle kunna bli, i stället för det jag verkligen ville bli, nämligen författare. Men det var lite för stort för att ens drömma om. Jag föddes 1947 in i en stor urskånsk släkt i Landskrona. När jag var i femårsåldern bestämde sig SJ för att organisera om sin verksamhet, alltså ställdes min far som var lokeldare på den tiden inför valet att antingen flytta till Nässjö eller att säga upp sig. Följaktligen lämnade vi vår för den tiden moderna tvårummare i Landskrona (rinnande varmvatten, centralvärme och badrum i källaren) för att flytta in i en omodern järnvägarbostad i Nässjö. Där fick vi en lägenhet med två rum och kök med järnspis, men utan både varmvatten och badrum.
                    <br/>
                    Nässjö blev alltså den stad där jag växte upp, vilket har satt sina spår i de romaner jag skriver. Många av dem utspelar sig just i Nässjö, trots att jag lämnade stan som artonårig gymnasist för mer än 55 år sedan. Efter första ring åkte jag och en kompis till Liverpool för att jobba som städerskor på ett hotell över sommarlovet. När jag kom tillbaka visade det sig att mina föräldrar, som hade varit separerade under några år, hade flyttat ihop igen och att de hade gjort det i Stockholm. Dit fick jag också flytta och där fick jag genast börja jobba.
                    <br/>
                    Det var inte det lyckligaste året i mitt liv, men när våren kom började jag i alla fall på Poppius Journalistskola om kvällarna och fyra månader senare var jag tillbaka i Småland. Jag hade blivit volontär på Tranås-Posten. Senare samma år började jag på Smålands Folkblad i Jönköping och när min volontärtid efter ett och ett halvt år var slut fick jag jobb på Folkbladet Östgöten i Norrköping.
                    <br/>
                    Nu var jag reporter och medlem i Journalistförbundet. Norrköping blev mitt universitet, det var där jag verkligen lärde mig yrket. Jag jobbade vidare som journalist i ytterligare 18 – 19 år men kände allt tydligare att journalistiken inte räckte till. Ändå tog jag övergången till skönlitteraturen i små steg. Först skrev jag en ängslig liten fackbok om barnarbete, men tog sedan tjänstledigt och gick vidare med dokumentärromanen Rosario är död som handlar om filippinska barn i sexhandel. Det var en bok som förändrade mitt liv, dels genom att jag för första gången själv var den som bestämde över min tid och därför kunde ägna åtskilligt mycket mer tid åt research än jag någonsin hade gjort, och dels genom att den befriade mitt språk från journalistikens tvångströja. När jag insåg det sa jag upp mig från mitt journalistjobb och skrev min första rent fiktiva roman: Långt borta från Nifelheim. Nu skulle jag bli författare på heltid, även om jag måste frilansa en del för att hålla svälten från dörren. Ett av de frilansjobben blev en reportagebok: … och dom som inte har. Den blev mitt farväl till journalistiken. Därefter satte jag i gång med nästa fiktiva roman. Den hette Aprilhäxan och blev mitt genombrott.
                    Nu är jag pensionär sedan många år, men jobbar naturligtvis fortfarande. Jag skriver varje dag, men ägnar också mycket tid åt att läsa.
                    <br/>
                    Och bättre kan man inte ha det.
                    </p>
                </Row>
            </Container>
        </Layout>
    )
}

export default AboutPage