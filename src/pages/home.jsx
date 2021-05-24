import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  Fab,
  Icon,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';
import { coronavirus_white } from '../static';

const HomePage = ({ f7router }) => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar sliding={false}>
      <NavLeft>
        <Link>
          <img src={ coronavirus_white } alt="...." />
        </Link>
      </NavLeft>
      <NavTitle sliding>XCovid19</NavTitle>
    </Navbar>

    {/* Page content */}
    <Block strong noHairlines style={{
      textAlign:'center',
      fontSize: '24px',
    }}>
      PENYIMPANGAN INFORMASI VAKSIN COVID-19 DI 6 PROVINSI INDONESIA TAHUN 2021
    </Block>

    <Block strong noHairlines style={{
      textAlign:'justify',
      fontSize: '18px'
    }}>
      <p>Yayasan Jenewa Institute, Link To Evidance, Leuser Andalas Community Development sedang melaksanakan survey Penyimpangan Informasi Vaksi Covid-19 di 6 Provinsi Indonesia tahun 2021.</p>
      <p>Partisipasi aktif dalam mengisi daftar pertanyaan ini sangat kami harapkan, demikian juga ketulusan dan kejujuran dalam menjawab. Perlu dipahami, bahwa kami bukan menilai jawbaan anda benar atau salah, namun kami ingin mempelajari kondisi dan realitas yang terjadi di masyarakat terkait penyimpangan informasi vaksin Covid-19 . Kejujuran Anda dalam mengisi kuesioner akan membantu memberikan data/informasi yang benar mengenai realitas yang terjadi di masyarakat.</p>
      <p>Kerahasiaan jawaban akan kami jamin.  Anda tidak perlu mencantumkan identitas apapun
      pada kuesioner.  Isi dari jawaban Anda TIDAK ADA sangkut-pautnya penilaian baik dan baruk diri anda.
      Perlu ditegaskan bahwa hasil penelitian ini tidak akan menggambarkan keadaan individu tertentu, tetapi untuk lingkup yang lebih besar.
      </p>
      <p style={{
        textAlign: 'center'
      }}>
        Bacalah dulu Petunjuk Pengisian!
      </p>
    </Block>
    <Block>
      <Button fill raised onClick={() => f7router.navigate('/persiapan/')}>
        Selanjutnya
      </Button>
    </Block>
  </Page>
);
export default HomePage;