import React,{ useState } from 'react';
import './index.scss'




const Pagination = ({data,pageSize,rowTemplate,emptyTemplate}) => {


    const [currentPage,setCurrentPage] = useState(1);


    const GetTotalPage = () => {
        const totalPageFloat = data.length / pageSize;
        let totalPageNumber = parseInt(totalPageFloat);

        if(totalPageFloat > totalPageNumber) totalPageNumber++;

        return totalPageNumber;
    }
    const PaginationButtons = () => {
 
        const totalPage = GetTotalPage();
        const buttons = [];

        for (let index = 1  ; index < totalPage + 1; index++ ) {
            const buttonProps = {
                key:index,
                onClick:() => handleClick(index),
                className: "pagination-button" + (currentPage !== index ? "" : " active")
            }
            buttons.push(<a {...buttonProps} > {index}</a>)
        } 
        
        if (totalPage > 1) {
            buttons.push(<a className="pagination-button arrow" key="next" onClick={handleNextClick}> {'>'} </a>);
            buttons.unshift(<a className="pagination-button arrow" key="prev" onClick={handlePrevClick}> {'<'} </a>);
        }

        return <div className="pagination-buttons"> {buttons}</div>;
    }

    const handleClick = (number) => {
        setCurrentPage(number);
    }
    const handleNextClick = () => {
        if (currentPage + 1 > GetTotalPage()) return;
        setCurrentPage(currentPage + 1);
    }
    const handlePrevClick = () => {
        if (currentPage - 1 < 1) return;
        setCurrentPage(currentPage - 1);
    }


    const totalPage = GetTotalPage();
    if(totalPage < currentPage) {
        setCurrentPage(totalPage);
    }

    const startIndex = ((currentPage -1) * pageSize);
    const viewData = data.slice(startIndex, startIndex + pageSize);

    return (
        <>
        { 
         viewData && viewData.length > 0 ? 
         
         viewData.map(rowTemplate) 
         : 
         <div className="empty-template"> { emptyTemplate() } </div>
        }
        <PaginationButtons />
        </>
    )


}

export default Pagination;