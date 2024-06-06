// import React, { useState, useCallback } from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import { createTheme, Paper } from '@mui/material';
// import API_URL from '../../config';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });

// const Container = styled.div`
//   padding: 2rem;
//   background-color: ${theme.palette.background.paper};
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   margin-bottom: 1.5rem;
//   color: ${theme.palette.text.primary};
// `;

// const InputGroup = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1rem;

//   input {
//     flex: 1;
//     padding: 0.5rem 1rem;
//     border: 1px solid ${theme.palette.grey[400]};
//     border-radius: 4px;
//     font-size: 0.9rem;
//     color: ${theme.palette.text.primary};
//   }

//   button {
//     margin-left: 0.5rem;
//     padding: 0.5rem 1rem;
//     background-color: ${theme.palette.primary.main};
//     color: ${theme.palette.common.white};
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     font-size: 0.9rem;
//   }
// `;

// const ListItem = styled.li`
//   margin-bottom: 0.5rem;
//   color: #555;
// `;

// const Footer = styled.footer`
//   text-align: center;
//   font-size: 1rem;
//   color: #999;
//   padding-top: 2rem;
// `;

// const SearchPage = () => {
//   const [tagList, setTagList] = useState([]);
//   const [languageList, setLanguageList] = useState([]);
//   const [contentData, setContentData] = useState({ content: '', language: {}, tags: [] });
//   const [tagSearchText, setTagSearchText] = useState('');
//   const [languageSearchText, setLanguageSearchText] = useState('');
//   const [contentSearchText, setContentSearchText] = useState('');

//   const handleInputChange = (setter) => (event) => {
//     setter(event.target.value);
//   };

//   const fetchData = useCallback(async (url, setter) => {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         setter(data);
//       } else {
//         console.error(`Error: ${response.status} - ${response.statusText}`);
//       }
//     } catch (error) {
//       console.error(`Error fetching data:`, error);
//     }
//   }, []);

//   const handleFetchTagList = useCallback(() => {
//     fetchData(`${API_URL}/api/v1/text/findTextSortedByTag/${tagSearchText}`, setTagList);
//   }, [fetchData, tagSearchText]);

//   const handleFetchLanguageList = useCallback(() => {
//     fetchData(`${API_URL}/api/v1/text/findTextSortedByLanguage/${languageSearchText}`, setLanguageList);
//   }, [fetchData, languageSearchText]);

//   const handleFetchContentList = useCallback(() => {
//     fetchData(`${API_URL}/api/v1/text/getTextByContent/${contentSearchText}`, setContentData);
//   }, [fetchData, contentSearchText]);

//   const handleKeyPress = (event, fetchFunction) => {
//     if (event.key === 'Enter') {
//       fetchFunction();
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
//           <Title>Text List Sorted by Tag</Title>
//           <InputGroup>
//             <input
//               type="text"
//               value={tagSearchText}
//               onChange={handleInputChange(setTagSearchText)}
//               onKeyPress={(event) => handleKeyPress(event, handleFetchTagList)}
//               placeholder="Search by tag..."
//             />
//             <button onClick={handleFetchTagList}>Find</button>
//           </InputGroup>
//           <ul>
//             {tagList.map((content, index) => (
//               <ListItem key={index}>{content}</ListItem>
//             ))}
//           </ul>
//         </Paper>

//         <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
//           <Title>Text List Sorted by Language</Title>
//           <InputGroup>
//             <input
//               type="text"
//               value={languageSearchText}
//               onChange={handleInputChange(setLanguageSearchText)}
//               onKeyPress={(event) => handleKeyPress(event, handleFetchLanguageList)}
//               placeholder="Search by language..."
//             />
//             <button onClick={handleFetchLanguageList}>Find</button>
//           </InputGroup>
//           <ul>
//             {languageList.map((content, index) => (
//               <ListItem key={index}>{content}</ListItem>
//             ))}
//           </ul>
//         </Paper>

//         <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
//           <Title>Text List by Content</Title>
//           <InputGroup>
//             <input
//               type="text"
//               value={contentSearchText}
//               onChange={handleInputChange(setContentSearchText)}
//               onKeyPress={(event) => handleKeyPress(event, handleFetchContentList)}
//               placeholder="Search by content..."
//             />
//             <button onClick={handleFetchContentList}>Find</button>
//           </InputGroup>
//           <ul>
//             <ListItem>Content: {contentData.content}</ListItem>
//             <ListItem>Language: {contentData.language?.name || ''}</ListItem>
//             <ListItem>Tags: {contentData.tags.length > 0 ? contentData.tags.map((tag) => tag.name).join(', ') : ''}</ListItem>
//           </ul>
//         </Paper>
//         <Footer>
//           <p>&copy; 2024 Определитель языка текста. Все права защищены.</p>
//         </Footer>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default SearchPage;
