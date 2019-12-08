import React from 'react';
import App from 'components/App';
import {Item, Title, Host, ExternalLink, Description, CommentLink, ListWrapper } from './styles';

const LINK_REL = 'noopener noreferrer nofollow';

const ListItem = (props) => {

    return (
    <ListWrapper>

        <Item className="item">

          <div className="content">
            <CommentLink href={props.html_url} className="header" rel={LINK_REL} target="_blank">
                {props.name}

            </CommentLink>
            <ExternalLink>


            </ExternalLink>
            <Description>
            </Description>
        </div>
            <div className="image">
                <img src={props.avatar_url}  alt="image" />
            </div>
        </Item>
        </ListWrapper>
    )
};


export default ListItem;

const ListItem1 = (props) => {

    return (
        <ListWrapper>

            <Item className="item">

                <div className="content">
                    <CommentLink href={props.html_url1} className="header" rel={LINK_REL} target="_blank">
                        {props.name1}

                    </CommentLink>
                    <ExternalLink>


                    </ExternalLink>
                    <Description>
                    </Description>
                </div>
                <div className="image">
                    <img src={props.avatar_url1}  alt="image" />
                </div>
            </Item>
        </ListWrapper>
    )
};


export {ListItem1};

const ListItem2 = (props) => {

    return (
    <ListWrapper>
        <Item>
            <CommentLink href={props.html_url2} rel={LINK_REL} target="_blank">
                {props.name2}
            </CommentLink>
            <ExternalLink>

                <div className="post_img"
                     // style={{backgroundImage: `url(${props.image1})`, height: 200 }}
                >
                    <img src={props.avatar_url2} className="App-logo" alt="logo" />
                </div>
            </ExternalLink>
            <Description>
            </Description>
        </Item>
        </ListWrapper>
    )
};

export {ListItem2};

const ListItem3 = (props) => {

    return (
    <ListWrapper>
        <Item>
            <CommentLink href={props.html_url3} rel={LINK_REL} target="_blank">
                {props.name3}
            </CommentLink>
            <ExternalLink>

                <div className="post_img"
                     // style={{backgroundImage: `url(${props.image1})`, height: 200 }}
                >
                    <img src={props.avatar_url3} className="App-logo" alt="logo" />
                </div>
            </ExternalLink>
            <Description>
            </Description>
        </Item>
        </ListWrapper>
    )
};

export {ListItem3};

const ListItem4 = (props) => {

    return (
    <ListWrapper>
        <Item>
            <CommentLink href={props.html_url4} rel={LINK_REL} target="_blank">
                {props.name4}
            </CommentLink>
            <ExternalLink>

                <div className="post_img"
                     // style={{backgroundImage: `url(${props.image1})`, height: 200 }}
                >
                    <img src={props.avatar_url4} className="App-logo" alt="logo" />
                </div>
            </ExternalLink>
            <Description>
            </Description>
        </Item>
        </ListWrapper>
    )
};

export {ListItem4};

const ListItem5 = (props) => {

    return (
    <ListWrapper>
        <Item>
            <CommentLink href={props.html_url5} rel={LINK_REL} target="_blank">
                {props.name5}
            </CommentLink>
            <ExternalLink>

                <div className="post_img"
                     // style={{backgroundImage: `url(${props.image1})`, height: 200 }}
                >
                    <img src={props.avatar_url5} className="App-logo" alt="logo" />
                </div>
            </ExternalLink>
            <Description>
            </Description>
        </Item>
        </ListWrapper>
    )
};

export {ListItem5};

const ListItem6 = (props) => {

    return (
    <ListWrapper>
        <Item>
            <CommentLink href={props.html_url6} rel={LINK_REL} target="_blank">
                {props.name6}
            </CommentLink>
            <ExternalLink>

                <div className="post_img"
                     // style={{backgroundImage: `url(${props.image1})`, height: 200 }}
                >
                    <img src={props.avatar_url6} className="App-logo" alt="logo" />
                </div>
            </ExternalLink>
            <Description>
            </Description>
        </Item>
        </ListWrapper>
    )
};

export {ListItem6};

const ListItem7 = (props) => {

    return (
    <ListWrapper>
        <Item>
            <CommentLink href={props.html_url7} rel={LINK_REL} target="_blank">
                {props.name7}
            </CommentLink>
            <ExternalLink>

                <div className="post_img"
                     // style={{backgroundImage: `url(${props.image1})`, height: 200 }}
                >
                    <img src={props.avatar_url7} className="App-logo" alt="logo" />
                </div>
            </ExternalLink>
            <Description>
            </Description>
        </Item>
        </ListWrapper>
    )
};

export {ListItem7};

const ListItem8 = (props) => {

    return (
    <ListWrapper>
        <Item>
            <CommentLink href={props.html_url8} rel={LINK_REL} target="_blank">
                {props.name8}
            </CommentLink>
            <ExternalLink>

                <div className="post_img"
                     // style={{backgroundImage: `url(${props.image1})`, height: 200 }}
                >
                    <img src={props.avatar_url8} className="App-logo" alt="logo" />
                </div>
            </ExternalLink>
            <Description>
            </Description>
        </Item>
        </ListWrapper>
    )
};

export {ListItem8};
const ListItem9 = (props) => {

    return (
    <ListWrapper>
        <Item>
            <CommentLink href={props.html_url9} rel={LINK_REL} target="_blank">
                {props.name9}
            </CommentLink>
            <ExternalLink>


                <div className="post_img"
                     // style={{backgroundImage: `url(${props.image1})`, height: 200 }}
                >
                    <img src={props.avatar_url9} className="App-logo" alt="logo" />
                </div>
            </ExternalLink>
            <Description>
            </Description>
        </Item>
        </ListWrapper>
    )
};

export {ListItem9};







