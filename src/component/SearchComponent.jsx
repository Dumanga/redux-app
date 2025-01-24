/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setColors } from '../features/colorsSlice';
import { useLazyFetchColorsQuery } from '../features/api';
import { TextField, Button, List, ListItem } from '@mui/material';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const { search, colors } = useSelector((state) => state.colors);

  // Lazy query hook beacause we want to trigger the API call manually
  const [fetchColors, { data: fetchedColors, isLoading, isError }] = useLazyFetchColorsQuery();

  const handleSearch = async () => {
    if (!search.trim()) {
      alert('Please enter a search term.');
      return;
    }

    // Trigger the API and update the Redux state
    const result = await fetchColors(search).unwrap();
    if (result) {
      dispatch(setColors(result));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <TextField
        label="Search Colors"
        variant="outlined"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        fullWidth
        style={{ marginBottom: '20px' }}
        disabled={isLoading}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
      {isError && <p style={{ color: 'red' }}>Error fetching data!</p>}
      <List>
        {colors.length === 0 ? (
          <p>No colors found</p>
        ) : (
          colors.map((color, index) => (
            <ListItem
              key={index}
              style={{ border: '1px solid #ccc', marginBottom: '10px' , backgroundColor: color.code }}
            >
              {color.name} - {color.code}
            </ListItem>
          ))
        )}
      </List>
    </div>
  );
};

export default SearchComponent;
