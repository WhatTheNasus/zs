"use client";

import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

export default function PridajPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Content:', content);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Pridaj Príspevok
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Názov"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Obsah"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: '20px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Pridaj
        </Button>
      </form>
    </Box>
  );
}