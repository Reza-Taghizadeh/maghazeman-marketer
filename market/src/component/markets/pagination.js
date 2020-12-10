import '../../containers/App.css';

export default function Pagination (){
    return (
        <div className='pagination-list'>
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span className='active'>1</span>
            <span>></span>
        </div>
    )
}