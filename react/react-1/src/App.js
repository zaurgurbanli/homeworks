import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Button } from './Button';
import {Modal} from './Modal';

function App() {

  const [firstModalStatus, setFirstModalStatus] = useState(false);
  const [secondModalStatus, setSecondModalStatus] = useState(false);

  const toggleFirstModal = () => setFirstModalStatus(v=> !v);


  return (
    <div className="App" style = {{height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <div>
        <Button backgroundColor = 'rgba(0,0,0, .3)' text = "Open first modal window" onClick = {toggleFirstModal}/>
        <Button backgroundColor = '#1d8d13' text = "Open second modal window" onClick = {() => alert('second modal window')}/>
      </div>

      <div style={{marginTop: 20}}>
        {firstModalStatus && (
          <Modal 
            header = 'Test'
            closeIcon = {true}
            text = 'Hello World'
            close = {toggleFirstModal}
            actions = {[<Button 
                            key = {1}
                            backgroundColor = 'rgba(0,0,0, .3)'
                            text = 'Ok'
                            onClick = {() => alert('first modal window')}/>,
                        <Button 
                            key = {2}
                            backgroundColor = 'rgba(0,0,0, .3)'
                            text = 'Cancel'
                            onClick = {toggleFirstModal}/>]}/>
        )}
      </div>
    </div>
  );
}

export default App;
