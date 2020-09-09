import React, {Component, useState} from 'react';
import 'primereact/resources/themes/nova-dark/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './App.scss';
import './layout/layout.scss'
import 'semantic-ui-css/semantic.min.css'
import 'medium-draft/lib/index.css'
import './my-site/MySite.css'
import {Menu} from "semantic-ui-react";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leftOpen: true,
        }
    }

    toggleSidebar = () => {
        this.setState({
            leftOpen: !this.state.leftOpen
        })
    }

    render() {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        return (
            <div id='layout'>
                <div id='left' className={leftOpen}>
                    <div className={`sidebar ${leftOpen}`}>
                        <div className='content'>
                            <h3>Left content</h3>
                            <p>
                            </p>
                        </div>
                    </div>
                </div>

                <div id='main'>
                    <Menu>
                        <Menu.Item
                            name='editorials'
                            onClick={this.toggleSidebar}
                        >
                            Editorials
                        </Menu.Item>

                        <Menu.Item
                            name='reviews'
                        >
                            Reviews
                        </Menu.Item>

                        <Menu.Item
                            name='upcomingEvents'
                        >
                            Upcoming Events
                        </Menu.Item>
                    </Menu>
                    <div className='content'>
                        <h3>Main content</h3><br/>
                        <p>
                            Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo
                            blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non
                            molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero.
                            Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut
                            commodo. Sed euismod quam gravida condimentum commodo.
                        </p><br/>
                        <p>
                            Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                            ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                            Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                            diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                            eleifend quam eget dictum.
                        </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>                        <p>
                        Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim
                        ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum.
                        Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur
                        diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend
                        eleifend quam eget dictum.
                    </p><br/>
                        <p>
                            Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet
                            dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea
                            dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit
                            non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante.
                            Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat,
                            fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
