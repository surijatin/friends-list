import { useState } from 'react';
import './List.css';
import RowComponent from '../RowComponent/RowComponent';
import PaginationComponent from '../PaginationComponent/PaginationComponent';

const recordsPerList = 4;

function List() {
  const [friends, setFriends] = useState([]);
  const [displayFriends, setDisplay] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState({
    currPage: 1,
    totalPages: 1
  });

  const handleFriendSearch = (event) => {
    const regex = /^[A-Za-z ]+$/;
    const nameEntered = event.target.value;
    if (nameEntered.match(regex) || nameEntered === "") {
      setName(nameEntered);
      const filteredList = friends.filter(item => {
        let showResult = false;
        const nameArr = item.name.split(' ');
        nameArr.forEach((name) => {
          if (name.toLowerCase().includes(nameEntered.toLowerCase())) {
            showResult = true;
          };
        });
        return showResult;
      });
      setDisplay(filteredList);
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
    setPage(prevState => {
      return {
        currPage: 1,
        totalPages: prevState.totalPages
      }
    });
    setFriends(newFriends);
  }

  const handleDelete = (event, selectedId) => {
    let newFriends = friends.filter(item => item.id !== selectedId);
    setFriends(newFriends);
    setPage(prevState => {
      return {
        currPage: prevState.currPage,
        totalPages: computeTotalPages(newFriends)
      }
    });
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      const name = event.target.value;
      const newObj = {
        id: Math.random(),
        name,
        isFavourite: false
      }
      const newFriends = [...friends, newObj];
      setPage({ currPage: 1, totalPages: computeTotalPages(newFriends) });
      setFriends(newFriends);
      setName('');
    }
  }

  const computeTotalPages = (arr) => {
    return Math.ceil(arr.length / recordsPerList);
  }

  const handlePagination = (event) => {
    setPage(prevState => {
      return {
        currPage: event.target.id,
        totalPages: prevState.totalPages
      }
    });
  }

  const computeChunk = (arr) => {
    let finalData = arr.reduce((resultArr, item, index) => {
      const chunkIndex = Math.floor(index / recordsPerList);
      if (!resultArr[chunkIndex]) {
        resultArr[chunkIndex] = [];
      }
      resultArr[chunkIndex].push(item);
      return resultArr;
    }, []);
    return finalData[page.currPage - 1];
  }

  const arr = name === '' ? friends : displayFriends;

  const chunkToDisplay = computeChunk(arr);

  return (
    <>
      <div className='container'>
        <input
          className={'input-text'}
          type={'text'}
          onChange={handleFriendSearch}
          onKeyUp={handleKeyDown}
          value={name}
          placeholder={'Enter your friend\'s name'} />
        {
          chunkToDisplay ? chunkToDisplay.map(item =>
          (
            <RowComponent
              key={item.id}
              friend={item}
              handleFavourite={handleFavourite}
              handleDelete={handleDelete}
            />
          )) :
            name && <label>Press Enter ↵ to add new friend</label>
        }
      </div>
      <PaginationComponent
        page={page}
        handlePagination={handlePagination}
      />
    </>
  )
}

export default List;
