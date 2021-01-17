import './modalx.css'

const Modalx = ({ handleClosex, showx, children }) => {
    const showHideClassName = showx ? 'modal display-block' : 'modal display-none'
    return (
        <div className={showHideClassName}>
            <section className='modal-main border border-solid shadow-md w-1/2 box-border p-16 transition duration-500 ease-in-out transform mx-auto bg-green-500 '>
                <div className='grid place-content-end'>
                    {children}
                    <button onClick={handleClosex} className='text-gray-100 bg-transparent border-2 border-green-100 rounded w-8'>
                        X
                    </button>
                </div>
                <h1 className='text-gray-100 font-playfair font-bold text-5xl text-center animate-pulse'>Make yout quote</h1>
                <form className='flex flex-col'></form>
            </section>
        </div>
    )
}
export default Modalx
