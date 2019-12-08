import React, { Component, useState, useEffect } from 'react';
import GlobalStyles from '../../styles/globals';
import { ThemeProvider } from 'styled-components';
import {colorsLight} from 'styles/palette';
import List from 'components/List';
import {Wrapper, Title} from './styles';

function App() {

    const JSON_QUERY = 'romasoletskyi';
    const JSON_QUERY1 = 'sunmeat';
    const JSON_QUERY2 = 'SashaTsebrii';
    const JSON_QUERY3 = 'romeoordos';
    const JSON_QUERY4 = 'snrdrum';
    const JSON_QUERY5 = 'akenford';
    const JSON_QUERY6 = 'astralian';
    const JSON_QUERY7 = 'r13';
    const JSON_QUERY8 = 'daVinci87';
    const JSON_QUERY9 = 'Igor-Cavallaro';


        const GitHubDevApi = {
            getResource: async (url) => {
                const res = await fetch(url);
                const body = await res.json();
                return body;
            }
        };



        GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY}`)
            .then((body) => {
                setData(body);
            })
            .catch((err) => {
                console.log('Could not fetch', err);
            });



    const [name, setName] = useState('');
    const [html_url, setUserHtmlUrl] = useState('');
    const [avatar_url, setAvatar] = useState('');
    const [error, setError] = useState(null);



     const setData = ({name, avatar_url, html_url }) => {
         setName(name);
         setAvatar(avatar_url);
         setUserHtmlUrl(html_url);

     };


    GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY1}`)
         .then((body) => {
             setData1(body);
         })
         .catch((err) => {
             console.log('Could not fetch', err);
         });


    const [name1, setName1] = useState('');
    const [html_url1, setUserHtmlUrl1] = useState('');
    const [avatar_url1, setAvatar1] = useState('');
    const [error1, setError1] = useState(null);



  const setData1 = ({name, avatar_url, html_url }) => {
    setName1(name);
    setAvatar1(avatar_url);
    setUserHtmlUrl1(html_url);

};



    GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY2}`)
        .then((body) => {
            setData2(body);
        })
        .catch((err) => {
            console.log('Could not fetch', err);
        });


    const [name2, setName2] = useState('');
    const [html_url2, setUserHtmlUrl2] = useState('');
    const [avatar_url2, setAvatar2] = useState('');

    const [error2, setError2] = useState(null);



    const setData2 = ({name, avatar_url, html_url }) => {
        setName2(name);
        setAvatar2(avatar_url);
        setUserHtmlUrl2(html_url);

    };



    GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY3}`)
        .then((body) => {
            setData3(body);
        })
        .catch((err) => {
            console.log('Could not fetch', err);
        });


    const [name3, setName3] = useState('');
    const [html_url3, setUserHtmlUrl3] = useState('');
    const [avatar_url3, setAvatar3] = useState('');

    const [error3, setError3] = useState(null);



    const setData3 = ({name, avatar_url, html_url }) => {
        setName3(name);
        setAvatar3(avatar_url);
        setUserHtmlUrl3(html_url);

    };


    GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY4}`)
        .then((body) => {
            setData4(body);
        })
        .catch((err) => {
            console.log('Could not fetch', err);
        });


    const [name4, setName4] = useState('');
    const [html_url4, setUserHtmlUrl4] = useState('');
    const [avatar_url4, setAvatar4] = useState('');

    const [error4, setError4] = useState(null);



    const setData4 = ({name, avatar_url, html_url }) => {
        setName4(name);
        setAvatar4(avatar_url);
        setUserHtmlUrl4(html_url);

    };

    GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY5}`)
        .then((body) => {
            setData5(body);
        })
        .catch((err) => {
            console.log('Could not fetch', err);
        });


    const [name5, setName5] = useState('');
    const [html_url5, setUserHtmlUrl5] = useState('');
    const [avatar_url5, setAvatar5] = useState('');

    const [error5, setError5] = useState(null);



    const setData5 = ({name, avatar_url, html_url }) => {
        setName5(name);
        setAvatar5(avatar_url);
        setUserHtmlUrl5(html_url);

    };

    GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY6}`)
        .then((body) => {
            setData6(body);
        })
        .catch((err) => {
            console.log('Could not fetch', err);
        });


    const [name6, setName6] = useState('');
    const [html_url6, setUserHtmlUrl6] = useState('');
    const [avatar_url6, setAvatar6] = useState('');

    const [error6, setError6] = useState(null);



    const setData6 = ({name, avatar_url, html_url }) => {
        setName6(name);
        setAvatar6(avatar_url);
        setUserHtmlUrl6(html_url);

    };

    GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY7}`)
        .then((body) => {
            setData7(body);
        })
        .catch((err) => {
            console.log('Could not fetch', err);
        });


    const [name7, setName7] = useState('');
    const [html_url7, setUserHtmlUrl7] = useState('');
    const [avatar_url7, setAvatar7] = useState('');

    const [error7, setError7] = useState(null);



    const setData7 = ({name, avatar_url, html_url }) => {
        setName7(name);
        setAvatar7(avatar_url);
        setUserHtmlUrl7(html_url);

    };

    GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY8}`)
        .then((body) => {
            setData8(body);
        })
        .catch((err) => {
            console.log('Could not fetch', err);
        });


    const [name8, setName8] = useState('');
    const [html_url8, setUserHtmlUrl8] = useState('');
    const [avatar_url8, setAvatar8] = useState('');

    const [error8, setError8] = useState(null);



    const setData8 = ({name, avatar_url, html_url }) => {
        setName8(name);
        setAvatar8(avatar_url);
        setUserHtmlUrl8(html_url);

    };

    GitHubDevApi.getResource(`https://api.github.com/users/${JSON_QUERY9}`)
        .then((body) => {
            setData9(body);
        })
        .catch((err) => {
            console.log('Could not fetch', err);
        });


    const [name9, setName9] = useState('');
    const [html_url9, setUserHtmlUrl9] = useState('');
    const [avatar_url9, setAvatar9] = useState('');

    const [error9, setError9] = useState(null);



    const setData9 = ({name, avatar_url, html_url }) => {
        setName9(name);
        setAvatar9(avatar_url);
        setUserHtmlUrl9(html_url);

    };



    return (

    <ThemeProvider theme={colorsLight}>

        <Wrapper>
        <GlobalStyles />
            <Title>
                Test task <br/>
                Git Hub Community Odessa, Ukraine
                {/*<Host/>*/}
            </Title>
        <List
            name={name}
            avatar_url={avatar_url}
            html_url={html_url}

            name1={name1}
            avatar_url1={avatar_url1}
            html_url1={html_url1}

            name2={name2}
            avatar_url2={avatar_url2}
            html_url2={html_url2}

            name3={name3}
            avatar_url3={avatar_url3}
            html_url3={html_url3}

            name4={name4}
            avatar_url4={avatar_url4}
            html_url4={html_url4}

            name5={name5}
            avatar_url5={avatar_url5}
            html_url5={html_url5}

            name6={name6}
            avatar_url6={avatar_url6}
            html_url6={html_url6}

            name7={name7}
            avatar_url7={avatar_url7}
            html_url7={html_url7}

            name8={name8}
            avatar_url8={avatar_url8}
            html_url8={html_url8}

            name9={name9}
            avatar_url9={avatar_url9}
            html_url9={html_url9}


        />
                </Wrapper>

    </ThemeProvider>
    );
}

export default App;




