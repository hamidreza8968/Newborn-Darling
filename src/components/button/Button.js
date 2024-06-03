export default function Button({handleClick , children , color}){
    return(
        <button className={`px-12 py-4 rounded bg-${color}`} onClick={handleClick}>{children}</button>
    )
}