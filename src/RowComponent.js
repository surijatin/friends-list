import star from './star.png';
import starFill from './star-fill.png';
import binIcon from './delete.png';
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
                src={friend.isFavourite ? starFill : star}
                alt={"Favourite Icon"}
                onClick={(e) => {
                    handleFavourite(e, friend.id);
                }} />
            <img
                src={binIcon}
                alt={"Bin Icon"}
                onClick={(e) => {
                    handleDelete(e, friend.id);
                }} />
        </div>
    );
}

export default RowComponent;
