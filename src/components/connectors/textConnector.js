import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Paper, Box, TextField, Button, CircularProgress } from '@mui/material';
import Chips from 'react-chips';
import styled from 'styled-components';
import API_URL from '../../config';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const Footer = styled.footer`
  text-align: center;
  font-size: 1rem;
  color: #999;
  padding-top: 2rem;
`;

const TextConnector = () => {
  const [content, setContent] = React.useState('');
  const [language, setLanguage] = React.useState({ name: '' });
  const [tags, setTags] = React.useState([]);
  const [texts, setTexts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [editingTags, setEditingTags] = React.useState([]);

  const handleTagAdd = (tagName) => {
    const newTag = { name: tagName };
    setEditingTags([...editingTags, newTag]);
  };

  const handleTagDelete = (index) => {
    const newTags = [...editingTags];
    newTags.splice(index, 1);
    setEditingTags(newTags);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick(e);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const text = { content, language, tags };
    console.log(text);
    try {
      await fetch(`${API_URL}/http://localhost:8080/api/v1/text/saveText`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text),
      });
      console.log('New Text added');
      setContent('');
      setLanguage({ name: '' });
      setTags([]);
    } catch (error) {
      console.error('Error saving text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await fetch(`${API_URL}http://localhost:8080/api/v1/text/delete/${id}`, {
        method: 'DELETE',
      });
      console.log('Text deleted');
      setTexts(texts.filter((text) => text.id !== id));
    } catch (error) {
      console.error('Error deleting text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (text) => {
    setIsLoading(true);
    try {
      await fetch(`${API_URL}http://localhost:8080/api/v1/text/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...text, tags: editingTags }),
      });
      console.log('Text updated');
      setTexts(
        texts.map((t) => (t.id === text.id ? { ...t, tags: editingTags } : t))
      );
    } catch (error) {
      console.error('Error updating text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetch(`${API_URL}http://localhost:8080/api/v1/text/getTexts`)
      .then((res) => res.json())
      .then((result) => {
        setTexts(result);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
          <h1 style={{ color: theme.palette.primary.main }}>Add Text</h1>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              id="content"
              label="Content"
              variant="standard"
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              required
            />
            <TextField
              id="language"
              label="Language"
              variant="standard"
              fullWidth
              value={language.name}
              onChange={(e) => setLanguage({ name: e.target.value })}
              onKeyDown={handleKeyDown}
              required
            />
            <div style ={{margin: '5px', padding: '5px'}}/>
            <Chips
              value={tags.map((tag) => tag.name)}
              onChange={(newTagNames) =>
                setTags(newTagNames.map((name) => ({ name })))
              }
              onAdd={handleTagAdd}
              onDelete={(index) => handleTagDelete(index)}
              placeholder="Enter tags"
            />
            <Button
              variant="contained"
              onClick={handleClick}
              disabled={isLoading}
              style={{ marginTop: '16px' }}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </Box>
        </Paper>
        <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
          <h1 style={{ color: theme.palette.primary.main }}>Texts</h1>
          {texts.map((text) => (
            <Paper
              elevation={6}
              style={{
                margin: '10px',
                padding: '15px',
                textAlign: 'left',
                backgroundColor: theme.palette.grey[100],
              }}
              key={text.id}
            >
              <p>Content: {text.content}</p>
              <p>Language: {text.language.name}</p>
              <p>Tags: {text.tags.map((tag) => tag.name).join(', ')}</p>
              <TextField
                id={`update-content-${text.id}`}
                label="Update Content"
                variant="standard"
                fullWidth
                defaultValue={text.content}
              />
              <TextField
                id={`update-language-${text.id}`}
                label="Update Language"
                variant="standard"
                fullWidth
                defaultValue={text.language.name}
              />
              <div style ={{margin: '1px', padding: '1px'}}/>
              <Chips
                value={editingTags.map((tag) => tag.name)}
                onChange={(newTagNames) =>
                  setEditingTags(newTagNames.map((name) => ({ name })))
                }
                onAdd={handleTagAdd}
                onDelete={(index) => handleTagDelete(index)}
                placeholder="Update tags"
              />
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(text.id)}
                disabled={isLoading}
                style={{ margin: '8px' }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  const updatedText = {
                    id: text.id,
                    content: document.getElementById(`update-content-${text.id}`).value,
                    language: { name: document.getElementById(`update-language-${text.id}`).value },
                    tags: text.tags,
                  };
                  handleUpdate(updatedText);
                }}
                disabled={isLoading}
              >
                Update
              </Button>
            </Paper>
          ))}
        </Paper>
        <Footer>
          <p>&copy; 2024 Определитель языка текста. Все права защищены.</p>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default TextConnector;