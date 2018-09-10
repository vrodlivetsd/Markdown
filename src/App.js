import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    {
        label: 'Headers',
        value: `
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
`
    }, 
    {
        label: 'List',
        value: `1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
`
    },
    {
        label: 'Tables',
        value: `Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders \` | **nicely**
1 | 2 | 3
`
    },
    {
        label: 'Emphasis',
        value: `Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~`
    }
];

const defaultOption = options[0];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            markdown: defaultOption.value
        }
    }

    changeSelect = event => {
      console.log(event);
        this.setState({
            markdown: event.value
        });
    }

    changeValue = event => {
        this.setState({
            markdown: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div className = 'dropdown-wrapper'>
                  <h1 className='header'>Markdown list</h1>
                  <div className='dropdown'>
                        <Dropdown options={options} onChange={this.changeSelect} value={defaultOption} placeholder="Select an option" />
                  </div>
                </div>
                <div className='container'>
                    <div className='left'>
                        <textarea id='editor' value={this.state.markdown} onChange={this.changeValue} />
                    </div>
                    <div className='right'>
                        <div id='preview' dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

