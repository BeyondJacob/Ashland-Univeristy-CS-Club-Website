import React from 'react';
import './widget.css'

class WidgetBot extends React.Component {
  render(){
      return (
        <div className='widget-div' >
          {/* Below is the template. This will be the first channel it shows given
              the correct permissions from the WidgetBot via Discord server. */}
          {/* https://e.widgetbot.io/channels/SERVERID/CHANNELID"  */}
          <iframe
            className='widget-iframe'
            src="https://e.widgetbot.io/channels/895085154203205633/1050212784169832479"
            loading='lazy'
          ></iframe>
        </div>
      )
  }
}
export default WidgetBot;
