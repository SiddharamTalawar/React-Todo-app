function Footer(props) {
    const listitems = props.list
    const list = listitems.map(item => <li className="footer-list-item" key={item.id}>{item.data}</li>)

    return (
        <footer>
            <ol className="footer-list">{list}</ol>
            <p>&copy;{new Date().getFullYear()} my-react-project</p>
        </footer>
    )
}

export default Footer