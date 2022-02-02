import React from 'react';
import {PaginationArea} from './style';

function Pagination(props){

    const pageLinks = []

    for(let i = 1; i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : '';

        pageLinks.push(
            <li className={`page-item ${active}`} key={i}>
                <a className="page-link" href="#" onClick={() => props.nextPage(i)}>{i}</a>
            </li>
        )
    }

    return(
        <PaginationArea aria-label="pagination">
            <div className="container">
                <div className="row">
                   <div className="col-lg-12">
                   <ul className="pagination flex-wrap">
                    {props.currentPage > 1 ? 
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={() => props.nextPage(props.currentPage - 1)}> Anterior </a> 
                        </li> : ''}

                    {pageLinks}

                    {props.currentPage < props.pages + 1 ? 
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={() => props.nextPage(props.currentPage + 1)}> Próximo </a>
                        </li> : ''}
                    </ul>
                   </div>
                </div>
            </div>
        </PaginationArea>
    );
}

export default Pagination;