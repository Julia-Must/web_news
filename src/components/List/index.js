import React from 'react';
import ListItem, {ListItem1, ListItem2, ListItem3, ListItem4,ListItem5,ListItem6,ListItem7,ListItem8,ListItem9 } from 'components/ListItem';



import {LWrapper} from './styles';

const List = (props) => (
    <LWrapper>

        <ListItem {...props}/>
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