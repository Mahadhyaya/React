import './First.css'
function First ({title}) { 
    return (
        <header className='title'>
            Welcome To {title}
            
        </header>  
    );
}

First.defaultProps = {
    title:'Groceries',
}

export default First;