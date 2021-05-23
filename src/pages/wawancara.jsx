import React, { useEffect } from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem, Fab, Icon } from 'framework7-react';
import question from '../js/json/question.json'

const Wawancara = ({ f7router }) => {
  useEffect(() => {
    console.log(question);
  }, [])
  return (
    <Page>
      <Navbar title="Wawancara" backLink="Back" />
      <BlockTitle></BlockTitle>
      
    </Page>
  )
};

export default Wawancara;
