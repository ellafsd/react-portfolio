import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';

export default function Footer() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, backgroundColor: 'primary.main' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Ella Girin
      </Typography>
      <Box sx={{ ml: 2 }}>
        <IconButton component="a" href="https://github.com/ellafsd" target="_blank" sx={{ color: 'text.secondary' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton component="a" href="https://www.linkedin.com/in/ella-girin-8234a0274/" target="_blank" sx={{ color: 'text.secondary' }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton component="a" href="https://leetcode.com/u/ellagirin/" target="_blank" sx={{ color: 'text.secondary' }}>
          <img
            src="https://leetcode.com/favicon.ico"
            alt="LeetCode"
            style={{ width: '24px', height: '24px' }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
