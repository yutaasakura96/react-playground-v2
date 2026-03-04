import { useState } from 'react';
import { EXAMPLES } from '../../data/data';
import TabButton from '../TabButton/TabButton';

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
  }
  return (
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => {
            handleSelect('components');
          }}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => {
            handleSelect('jsx');
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => {
            handleSelect('props');
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => {
            handleSelect('state');
          }}
        >
          State
        </TabButton>
      </menu>
      <div id='tab-content'>
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </>
        )}
      </div>
    </section>
  );
};

export default Examples;
