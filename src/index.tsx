import './style.scss';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Title from './title';
import List from './list';

// import title from './title';
// document.body.appendChild(title);

// import list from './list';
// document.body.appendChild(list);

const root = createRoot(document.getElementById('root'));
root.render(
	<React.Fragment>
		<Title />
		<List />
	</React.Fragment>,
);
