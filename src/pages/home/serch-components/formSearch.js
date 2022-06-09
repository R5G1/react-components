import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '32ch',
      '&:focus': {
        width: '48ch',
      },
    },
  },
}));
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Read Only' };
    this.value = 'Read Only';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    localStorage.setItem('loginUser', JSON.stringify(this.state.value));
  }
  handleSubmit(event) {
    this.handleReset();
    event.preventDefault();
  }
  handleReset() {
    document.querySelector('.formReset').reset();
  }

  render() {
    return (
      <div className="header-search">
        <div className="header-search__box-form">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <form className="formReset" onSubmit={this.handleSubmit}>
                    <StyledInputBase
                      name="text"
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </form>
                </Search>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        <div className="header-search__text">
          <span>{localStorage.getItem('loginUser')}</span>
        </div>
      </div>
    );
  }
}

export default NameForm;
