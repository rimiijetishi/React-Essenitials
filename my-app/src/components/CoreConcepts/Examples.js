import { useState } from 'react';
import TabButton from '../TabButton';
import { EXAMPLES } from '../../data';
import Section from '../Section';
import Tabs from '../Tabs';


export default function Examples() {

  const [selectedTopic, setSelecedTopic] = useState()
  
  
  function handleSelect(selecctedButton) {
    setSelecedTopic(selecctedButton)
  }
  
  let tabContent = <p>Please select a topic.</p>
  
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3 className='tab'>{EXAMPLES[selectedTopic].title}</h3>
        <p className='tab'>{EXAMPLES[selectedTopic].description}</p>
        <pre className='tab'>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  return(
    <Section title='Examples' id='examples'>
      <Tabs 
        buttons={
          <>
            <TabButton
                isSelected={selectedTopic === 'components'}
                onClick={() => handleSelect('components')}>Components
            </TabButton>
            <TabButton
                isSelected={selectedTopic === 'jsx'}
                onClick={() => handleSelect('jsx')}>JSX
            </TabButton>
            <TabButton
                isSelected={selectedTopic === 'props'}
                onClick={() => handleSelect('props')}>Props
            </TabButton>
            <TabButton
                isSelected={selectedTopic === 'state'}
                onClick={() => handleSelect('state')}>State
            </TabButton>
          </>
        }
      >

        {tabContent}

      </Tabs>
    </Section>
  )
}