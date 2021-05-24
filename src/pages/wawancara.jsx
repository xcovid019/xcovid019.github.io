import React, { useState, useEffect } from 'react';
import { Page, Navbar, Block, BlockTitle, Button, List, Fab, Icon } from 'framework7-react';
import question from '../js/json/question.json'
import InputForm from '../components/input';
import { coronavirus } from '../static';

const Wawancara = ({ f7router }) => {
  const [block, setBlock] = useState(0);
  const nextBlock = () => {
    if (question[block]) {
      setBlock(block => block+1);
    } else {
      setBlock(0);
    }
  }

  return (
    <Page>
      <Navbar title="Wawancara" backLink="Back" />
      <BlockTitle>{ question[block] ? question[block].block : ''}</BlockTitle>
      {
        question[block] ? 
        <List style={{
          listStyleType: 'none'
        }}>
          {
            question[block] ? 
            question[block].question.map((e, index) => {
              return <InputForm key={index} question={e} />
            }) : false
          }
        </List> :
        <Block>
          <div className="justify-content-center" style={{
              textAlign: 'center'
          }}>
              <img src={ coronavirus } className="lazy lazy-fade-in" style={{
                  width: '20em'
              }} alt="" />
              <Block strong noHairlines style={{
                fontSize: '24px',
              }}>
                XCOVID19 - TERIMA KASIH
              </Block>
          </div>
        </Block>
      }
      <Block>
        <Button fill raised onClick={() => nextBlock() }>
          {question[block] ? 'Selanjutnya' : 'Wawancara Baru'}
        </Button>
      </Block>
    </Page>
  )
};

export default Wawancara;
