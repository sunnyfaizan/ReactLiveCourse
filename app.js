 // const myHeading = React.createElement("h1", {
        //     id: 'rootId',
        //     className: 'rootclass' 
        // }, "Fetched Using Pure React");
        // const myRoot = ReactDOM.createRoot(document.getElementById('root'));
        // myRoot.render(myHeading);
        const heading1 = React.createElement('h1',{id:'head1'},'My First Heading');
        const heading2 = React.createElement('h2',{id:'head2'},'My Second Heading');
        const ourContainer = React.createElement('div',{},[heading1,heading2]);
        const createRoot = ReactDOM.createRoot(document.getElementById('root'));
        createRoot.render(ourContainer);