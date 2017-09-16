import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {IntlProvider} from 'react-intl';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
    render(
        <IntlProvider locale="en">
            <App/>
        </IntlProvider>,
        document.getElementById('render-target')
    );
});
