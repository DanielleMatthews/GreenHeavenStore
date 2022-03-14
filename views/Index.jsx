const React = require('react')

class Index extends React.Component{
    render() {
        return (
            <div>
                <h1> Plants Index </h1>
                <ul>
                    {this.props.plants.map((plant, i) => {
                        return(
                        <li>
                           The plant is called {plant.name}. <a href = {`/plants/${plant.id}`}> Info </a>
                        </li>
                    )}
                )}
                </ul>
            </div>
        )
    }
}

module.exports = Index