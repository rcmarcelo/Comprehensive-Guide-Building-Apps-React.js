import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({
render: function(){
	return (
		<div>
			Hello World!
		</div>
	)
}
});

/* JS
var HelloWorld = React.createClass({
displayName: "HelloMessage",
render: function() {
	return React.createElement("div", null, "Hello World");
}
});
*/

ReactDOM.render(<HelloWorld />, document.getElementById('app'));