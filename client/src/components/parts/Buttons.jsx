import '../../style/parts/Buttons.css'

function Buttons({ name, href, download }) {
    return (
        <a className='button-link' href={href} download={download ? download : undefined}>
            {name}
        </a>
    );
}

export default Buttons;
