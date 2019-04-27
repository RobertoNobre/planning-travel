import React from 'react';
import Toast from 'carbon-react/lib/components/toast';

export default ({ failures, bsStyleFailures, messages, bsStyleMessges}) => {
  function msgs(msg) {return (<span key={msg}>{msg}<br/></span>)}
    return (
      <>
        {
          !!messages && messages.length > 0 &&
          (<>
            <Toast open={ true } as={bsStyleMessges || 'success'}>
              { messages.map(m => msgs(m)) }
            </Toast>
          </>)
        }
        {
          !!failures && failures.length > 0 &&
          (<>
            <Toast open={ true } as={bsStyleFailures || 'error'}>
              { failures.map(f => msgs(f)) }
            </Toast>
          </>)
        }
      </>
    )
  }