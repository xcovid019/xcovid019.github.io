import React from 'react';
import { Page, Navbar, Block, Button, List, ListItem, Fab, Icon } from 'framework7-react';

const Persiapan = ({ f7router }) => (
  <Page>
    <Navbar title="Persiapan Wawancara" backLink="Back" />
    <Block strong noHairlines style={{
      textAlign:'justify',
      margin: '25px',
      fontSize: '18px'
    }}>
      <p>
      Dalam pengisian daftar, perlu diperhatikan jenis aturan pengisian yang masing-masing berlaku untuk pertanyaan tertentu.  Intrumen ini memiliki beberpa tipe pertanyaan dan jawaban yang akan menentukan cara pengisian pertanyaan tersebut, adapun tipe pertanyaan dan jawaban yang dimaksud diantaranya :
      </p>
      <p>
      1.	Pertanyaan dengan jawaban tertutup dengan hanya boleh memilih salah satu jawaban yang tersedia <br /> 
      2.	Pertanyaan dengan jawaban tertutup, namun responden dapat menjawab boleh lebih dari satu pilihan jawaban <br />
      3.	Pertanyaan dengan opsi jawaban satuan tertentu yang diisi dengan angka <br />
      4.	Opsi jawaban terbuka dimana responden dapat menyebutkan jawaban diluar jawaban tertutup yang telah tersedia untuk mengakomodir situasi lainnya 
      </p>
    <p>Intrumen ini juga menerapkan bentuk validasi pertanyaan dengan menggunakan pertanyaan dengan kondisi, sehingga responden tidak perlu menjawab beberapa pertanyaan yang tidak relevan karena jawaban responden di pertanyaan sebelumnya membuat kondisi pertanyaan tersebut tidak perlu dijawab </p>
    </Block>
    <Block>
      <Button fill raised round onClick={() => f7router.navigate('/wawancara/')}>
        Selanjutnya
      </Button>
    </Block>
  </Page>
);

export default Persiapan;
