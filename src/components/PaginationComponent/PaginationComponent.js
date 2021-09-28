import './PaginationComponent.css';

function PaginationComponent(props) {
    const { page, handlePagination } = props;
    return (
        <>
            {
                page.totalPages > 1 &&
                Array.from(Array(page.totalPages)).map((x, index) => {
                    return (
                        <button key={index} id={index + 1} onClick={handlePagination} className={'pagination-button'}>{index + 1}</button>
                    )
                })
            }
        </>
    );
}

export default PaginationComponent;
