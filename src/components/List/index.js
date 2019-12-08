import React from 'react';
import ListItem, {ListItem1, ListItem2, ListItem3, ListItem4,ListItem5,ListItem6,ListItem7,ListItem8,ListItem9 } from 'components/ListItem';
import App from 'components/App';


import {LWrapper} from './styles';

const List = (props) => (
    <LWrapper>

        <ListItem {...props}/>

{/*<div className="post">{props.name}</div>*/}
{/*<div className="post_img"*/}
     {/*// style={{backgroundImage: `url(${props.image})`, height: 200 }}*/}
{/*>*/}
    {/*<img src={props.avatar_url} className="App-logo" alt="logo" />*/}
{/*</div>*/}



        <ListItem1 {...props}/>
        <ListItem2 {...props}/>
        <ListItem3 {...props}/>
        <ListItem4 {...props}/>
        <ListItem5 {...props}/>
        <ListItem6 {...props}/>
        <ListItem7 {...props}/>
        <ListItem8 {...props}/>
        <ListItem9 {...props}/>


    </LWrapper>


);

export default List;