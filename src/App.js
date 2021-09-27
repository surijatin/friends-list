import { useState } from 'react';
import './App.css';
import RowComponent from './RowComponent';

function App() {
  const [friends, setFriends] = useState([]);
  const [name, setName] = useState('');

  const handleFriendSearch = (event) => {
    const regex = /^[A-Za-z ]+$/;
    if (event.target.value.match(regex)) {
      setName(event.target.value);
    }
  }

  const sortFriends = (friends) => {
    return friends.sort((item1, item2) => item2.isFavourite - item1.isFavourite);
  }

  const handleFavourite = (event, selectedId) => {
    let newFriends = [...friends];
    newFriends = newFriends.map((item) => {
      if (item.id === selectedId) {
        return {
          ...item,
          isFavourite: !item.isFavourite
        }
      }
      return item
    });
    newFriends = sortFriends(newFriends);
    setFriends(newFriends);
  }

  const handleDelete = (event, selectedId) => {
    let newFriends = friends.filter(item => item.id !== selectedId);
    setFriends(newFriends);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let name = event.target.value.trim().split(' ');
      name = name.map(name => {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
      }).join(' ');
      const newObj = {
        id: Math.random(),
        name,
        isFavourite: false
      }
      const newFriends = [...friends, newObj];
      setFriends(newFriends);
      setName('');
    }
  }

  return (
    <div className='container'>
      <input
        className={'input-text'}
        type={'text'}
        onChange={handleFriendSearch}
        onKeyUp={handleKeyDown}
        value={name}
        placeholder={'Enter your friend\'s name'} />
      {
        friends.map(item =>
        (
          <RowComponent
            key={item.id}
            friend={item}
            handleFavourite={handleFavourite}
            handleDelete={handleDelete}
          />
        ))
      }
    </div>
  );
}

export default App;
