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
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Sidebar, Checkbox,
} from 'semantic-ui-react'

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
    width: "100%",
}

export const App = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible
                    width='thin'
                >
                    <Menu.Item as='a'>
                        <Icon name='home'/>
                        Home
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                    <Visibility once={false}>
                        <Grid>
                            <Grid.Row>
                                <Menu borderless style={fixedMenuStyle}>
                                    <Container>
                                        <Menu.Item>
                                            <Image size='mini' src='/logo192.png'/>
                                        </Menu.Item>
                                        <Menu.Item header>Project Name</Menu.Item>
                                        <Menu.Item as='a'>Blog</Menu.Item>
                                        <Menu.Item as='a'>Articles</Menu.Item>

                                        <Menu.Menu position='right'>
                                            <Dropdown text='Dropdown' pointing className='link item'>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>List Item</Dropdown.Item>
                                                    <Dropdown.Item>List Item</Dropdown.Item>
                                                    <Dropdown.Divider/>
                                                    <Dropdown.Header>Header Item</Dropdown.Header>
                                                    <Dropdown.Item>
                                                        <i className='dropdown icon'/>
                                                        <span className='text'>Submenu</span>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>List Item</Dropdown.Item>
                                                            <Dropdown.Item>List Item</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>List Item</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Menu.Menu>
                                    </Container>
                                </Menu>
                            </Grid.Row>
                            <Grid.Row>
                                <Checkbox
                                    toggle
                                    checked={visible}
                                    label={{children: <code>visible</code>}}
                                    onChange={(e, data) => setVisible(data.checked)}
                                />
                            </Grid.Row>
                            <Grid.Row>
                                <Sidebar.Pushable as={Segment}>
                                    <Sidebar
                                        as={Menu}
                                        animation='overlay'
                                        icon='labeled'
                                        inverted
                                        onHide={() => setVisible(false)}
                                        vertical
                                        visible={visible}
                                        width='thin'
                                    >
                                        <Menu.Item as='a'>
                                            <Icon name='home'/>
                                            Home
                                        </Menu.Item>
                                        <Menu.Item as='a'>
                                            <Icon name='gamepad'/>
                                            Games
                                        </Menu.Item>
                                        <Menu.Item as='a'>
                                            <Icon name='camera'/>
                                            Channels
                                        </Menu.Item>
                                    </Sidebar>

                                    <Sidebar.Pusher>
                                        <Segment basic>
                                            <Header as='h3'>Application Content</Header>
                                            <Image src='/images/wireframe/paragraph.png'/>
                                        </Segment>
                                    </Sidebar.Pusher>
                                </Sidebar.Pushable>
                            </Grid.Row>
                        </Grid>
                    </Visibility>
                </Sidebar.Pusher>
            </Sidebar.Pushable>

        </div>
    )
}

export default App;
