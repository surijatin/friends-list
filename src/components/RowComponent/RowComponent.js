import './RowComponent.css';

function RowComponent(props) {
    const { friend, handleFavourite, handleDelete } = props;
    return (
        <div className="row-component">
            <div className="name">
                <h3>{friend.name}</h3>
                <h6>is your friend</h6>
            </div>
            <img
                src={friend.isFavourite ? './star-fill.png' : './star.png'}
                alt={"Favorite"}
                onClick={(e) => {
                    handleFavourite(e, friend.id);
                }} />
            <img
                src={'./delete.png'}
                alt={"Bin"}
                onClick={(e) => {
                    handleDelete(e, friend.id);
                }} />
        </div>
    );
}

export default RowComponent;
