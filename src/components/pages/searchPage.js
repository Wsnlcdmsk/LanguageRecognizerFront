import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Paper} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const Container = styled.div`
  padding: 2rem;
  background-color: ${theme.palette.background.paper};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: ${theme.palette.text.primary};
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input {
    flex: 1;
    padding: 0.5rem 1rem;
    border: 1px solid ${theme.palette.grey[400]};
    border-radius: 4px;
    font-size: 0.9rem;
    color: ${theme.palette.text.primary};
  }

  button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #555;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 1rem;
  color: #999;
  padding-top: 2rem;
`;

const SearchPage = () => {
  const [tagList, setTagList] = useState([]);
  const [languageList, setLanguageList] = useState([]);
  const [content, setContent] = React.useState('');
  const [language, setLanguage] = React.useState({ name: '' });
  const [tags, setTags] = React.useState([]);
  const [tagSearchText, setTagSearchText] = useState('');
  const [languageSearchText, setLanguageSearchText] = useState('');
  const [contentSearchText, setContentSearchText] = useState('');

  const handleTagSearchTextChange = (event) => {
    setTagSearchText(event.target.value);
  };

  const handleLanguageSearchTextChange = (event) => {
    setLanguageSearchText(event.target.value);
  };

  const handleContentSearchTextChange = (event) => {
    setContentSearchText(event.target.value);
  };

  const handleKeyPress = (event, fetchFunction) => {
    if (event.key === 'Enter') {
      fetchFunction();
    }
  };

  const fetchTagList = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/text/findTextSortedByTag/${tagSearchText}`);
      if (response.ok) {
        const data = await response.json();
        setTagList(data);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching tag list:', error);
    }
  };

  const fetchLanguageList = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/text/findTextSortedByLanguage/${languageSearchText}`);
      if (response.ok) {
        const data = await response.json();
        setLanguageList(data);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching language list:', error);
    }
  };

  const fetchContentList = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/text/getTextByContent/${contentSearchText}`);
      if (response.ok) {
        const data = await response.json();
        setContent(data.content);
        setLanguage(data.language);
        setTags(data.tags);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching content list:', error);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
        <h1 style={{ color: theme.palette.primary.main }}>Text List Sorted by Tag</h1>
        <InputGroup>
          <input
            type="text"
            value={tagSearchText}
            onChange={handleTagSearchTextChange}
            onKeyPress={(event) => handleKeyPress(event, fetchTagList)}
            placeholder="Search by tag..."
          />
          <button onClick={fetchTagList}  >Find</button>
        </InputGroup>
        <ul>
          {tagList.map((content, index) => (
            <ListItem key={index}>{content}</ListItem>
          ))}
        </ul>
        </Paper>

      <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
        <h1  style={{ color: theme.palette.primary.main }}>Text List Sorted by Language</h1>
        <InputGroup>
          <input
            type="text"
            value={languageSearchText}
            onChange={handleLanguageSearchTextChange}
            onKeyPress={(event) => handleKeyPress(event, fetchLanguageList)}
            placeholder="Search by language..."
          />
          <button onClick={fetchLanguageList}>Find</button>
        </InputGroup>
        <ul>
          {languageList.map((content, index) => (
            <ListItem key={index}>{content}</ListItem>
          ))}
        </ul>
        </Paper>

      <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
        <h1  style={{ color: theme.palette.primary.main }}>Text List by Content</h1>
        <InputGroup>
          <input
            type="text"
            value={contentSearchText}
            onChange={handleContentSearchTextChange}
            onKeyPress={(event) => handleKeyPress(event, fetchContentList)}
            placeholder="Search by content..."
          />
          <button onClick={fetchContentList}>Find</button>
        </InputGroup>
        <ul>
          <ListItem>Content: {content}</ListItem>
          <ListItem>Language: {language.name}</ListItem>
          <ListItem>Tags: {tags.map((tag) => tag.name).join(', ')}</ListItem>
        </ul>
        </Paper>
        <Footer>
        <p>&copy; 2023 Определитель языка текста. Все права защищены.</p>
      </Footer>
    </Container>
  );
};

export default SearchPage;